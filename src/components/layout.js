import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"
// import "./style.css"

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
const Layout = ({ children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          lastUpdate
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={siteMetadata.title}
        description={siteMetadata.description}
        author={siteMetadata.author}
      />
      <main>{children}</main>
      <Footer lastUpdate={siteMetadata.lastUpdate} />
    </>
  )
}

export default Layout
