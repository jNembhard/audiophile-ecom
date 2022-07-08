import Head from "next/head";

type Props = { title: string; metaDescription: string };

const NextHead = (props: Props) => {
  return (
    <Head>
      <title>{props.title} | Audiophile</title>
      <meta name="description" content={props.metaDescription} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default NextHead;
