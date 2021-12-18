import Head from "next/head";
import React from "react";

function SEO({ title, lang = "en", meta = [], siteMetadata }) {
  const metaDescription = siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <link rel="icon" href={siteMetadata.image}></link>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={siteMetadata.author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
}

export default SEO;
