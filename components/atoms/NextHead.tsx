import Head from "next/head";

type Props = {
  title: string;
  description: string;
  type: string;
};

const NextHead = (props: Props) => {
  return (
    <Head>
      <title>{props.title} | Audiophile</title>
      <meta name="description" content={props.description} />
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={`${props.title} | Audiophile`} />
      <meta property="og:description" content={props.description} />
      <meta name="twitter:creator" content="Jason Nembhard" />
      <meta name="twitter:card" content={props.type} />
      <meta name="twitter:title" content={`${props.title} | Audiophile`} />
      <meta name="twitter:description" content={props.description} />
      <link rel="icon" href="/audiophile.png" />
    </Head>
  );
};

export default NextHead;
