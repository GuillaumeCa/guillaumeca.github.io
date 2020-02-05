import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { Project } from "../components/project"
import SEO from "../components/seo"
import { Skill, useAllSkills } from "../components/skill"

const PROJECTS_QUERY = graphql`
  query {
    allProjectsJson {
      edges {
        node {
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
  const skills = useAllSkills()

  return (
    <section className="px-6 max-w-6xl mx-auto mt-10">
      <SquaredTitle>SKILLS</SquaredTitle>
      <div className="mt-4 flex flex-wrap">
        {skills.map(skill => (
          <Skill
            key={skill.tag}
            name={skill.name}
            icon={skill.icon.publicURL}
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
