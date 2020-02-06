import { graphql, useStaticQuery } from "gatsby"
import React, { useRef } from "react"
import Layout from "../components/layout"
import { Project } from "../components/project"
import SEO from "../components/seo"
import { Skill, useAllSkills } from "../components/skill"
import { useOnScreen } from "../components/use-on-screen"

const PROJECTS_QUERY = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          type
          title
          subtitle
          description
          url
          technologies
          source {
            type
            url
          }
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const ProjectsList = () => {
  const data = useStaticQuery(PROJECTS_QUERY)
  const projects = data.allProjectsJson.edges

  return (
    <section className="px-6 max-w-6xl mx-auto mt-10">
      <SquaredTitle>PROJECTS</SquaredTitle>
      {projects.map(({ node: project }) => {
        return (
          <Project
            key={project.title}
            type={project.type}
            imageData={project.image.childImageSharp.fluid}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            technologies={project.technologies}
            url={project.url}
            source={project.source}
          />
        )
      })}
    </section>
  )
}

export function SquaredTitle({ id, children }) {
  return (
    <h1
      id={id}
      className="inline-block py-2 px-4 bg-main-dark text-white uppercase text-2xl font-bold tracking-wider"
    >
      {children}
    </h1>
  )
}

function SkillsList() {
  const ref = useRef()
  const skills = useAllSkills()
  const onScreen = useOnScreen(
    ref,
    `0px 0px -${window.innerHeight * 0.8}px 0px`
  )

  return (
    <section ref={ref} className="px-6 max-w-6xl mx-auto mt-10">
      <SquaredTitle>SKILLS</SquaredTitle>
      {onScreen && "On screen"}
      <div className="mt-4 flex flex-wrap">
        {skills.map((skill, i) => (
          <Skill
            key={skill.tag}
            name={skill.name}
            icon={skill.icon.publicURL}
            index={i}
            visible={onScreen}
          />
        ))}
      </div>
    </section>
  )
}

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ProjectsList />
      <SkillsList />
    </Layout>
  )
}
