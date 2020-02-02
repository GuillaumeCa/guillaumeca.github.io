import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Header } from "./header"
import "./style.css"

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
        lastUpdate={siteMetadata.lastUpdate}
      />
      <div>
        <main className="fluid">{children}</main>
        <footer>
          © {new Date().getFullYear()} Guillaume Carré, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
