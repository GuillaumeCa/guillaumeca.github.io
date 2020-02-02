import { formatDistance } from "date-fns"
import { fr } from "date-fns/locale"
import { Link } from "gatsby"
import React from "react"

export const Header = ({ siteTitle, author, description, lastUpdate }) => (
  <header>
    <div className="box">
      <span>{siteTitle}</span>
      <Link to="/">
        <h1 className="title">{author}</h1>
      </Link>
      <h2 className="title">{description}</h2>
      <p>
        Last update:{" "}
        {formatDistance(lastUpdate, new Date(), {
          locale: fr,
          addSuffix: true,
        })}
      </p>
    </div>
  </header>
)
