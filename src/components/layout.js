import React from "react";
import { SITE } from "../data/site.data";
import { Footer } from "./footer";
import { Header } from "./header";

const siteMetadata = SITE;

/**
 * Layout component
 */
const Layout = ({ children }) => {
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
