import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

/**
 * Layout component
 */
const Layout = ({ children, siteMetadata, locale }) => {
  return (
    <>
      <Header
        siteTitle={siteMetadata.title}
        description={siteMetadata.description[locale]}
        author={siteMetadata.author}
        currentWork={siteMetadata.currentWork[locale]}
      />
      <main>{children}</main>
      <Footer lastUpdate={siteMetadata.lastUpdate} />
    </>
  );
};

export default Layout;
