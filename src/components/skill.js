import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export function useAllSkills() {
  const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
        edges {
          node {
            tag
            name
            icon {
              publicURL
            }
          }
        }
      }
    }
  `)
  return data.allSkillsJson.edges.map(e => e.node)
}

export function useSkillByTag(tag) {
  return useAllSkills().find(skill => skill.tag === tag)
}

export function Skill({ tag, name, icon }) {
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/5 justify-center">
      <div className="p-4 py-10 m-5 flex flex-col items-center border-8 border-main-light m-2 shadow-dark   transition-shadow-transform hover:shadow-dark20 hover:transform--5px">
        <img className="h-32" src={icon} alt={tag} />
        <p className="mt-3 text-center font-bold text-main-dark">{name}</p>
      </div>
    </div>
  )
}
