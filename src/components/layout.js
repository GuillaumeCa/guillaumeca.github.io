import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

/**
 * Layout component
 */
const Layout = ({ children, siteMetadata }) => {
  return (
    <>
      <Header
        siteTitle={siteMetadata.title}
        description={siteMetadata.description}
        author={siteMetadata.author}
        currentWork={siteMetadata.currentWork}
      />
      <main>{children}</main>
      <Footer lastUpdate={siteMetadata.lastUpdate} />
    </>
  );
};

export default Layout;
