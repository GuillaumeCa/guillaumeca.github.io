import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"

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

function useDelayAnimate(visible, index) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (visible) {
      let ref = setTimeout(() => {
        setAnimate(true)
      }, 50 * index)
      return () => clearTimeout(ref)
    }
  }, [visible, index])

  return animate
}

export function Skill({ tag, name, icon, visible, index }) {
  const animate = useDelayAnimate(visible, index)

  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/5 justify-center">
      <div
        className={`p-4 py-10 m-5 flex flex-col items-center border-8 border-main-light m-2 ${animate &&
          "shadow-dark"} transition-shadow-transform ${animate &&
          "hover:shadow-dark20 hover:transform--5px"}`}
      >
        <img className="h-32" src={icon} alt={tag} />
        <p className="mt-3 text-center font-bold text-main-dark">{name}</p>
      </div>
    </div>
  )
}
