import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  transition?: { ease: string; duration: number; delay: number };
  children: React.ReactNode;
};

const Motion = (props: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={props.transition}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
    >
      {props.children}
    </motion.div>
  );
};

export default Motion;
