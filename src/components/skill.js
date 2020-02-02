import React from "react"

export function Skill({ data: { tag, name, icon } }) {
  return (
    <div className="techno">
      <img src={icon} alt={tag} />
      <p>{name}</p>
    </div>
  )
}
