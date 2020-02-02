import React from "react"
import Layout from "../components/layout"
import { Project } from "../components/project"
import SEO from "../components/seo"
import { Skill } from "../components/skill"

const IndexPage = ({ pageContext: { projects, skills } }) => (
  <Layout>
    <SEO title="Home" />

    <section>
      <h1>PROJECTS</h1>
      {projects.map(project => (
        <Project data={project} />
      ))}
    </section>

    <section>
      <h1 id="skill-anchor">SKILLS</h1>
      {skills.map(skill => (
        <Skill data={skill} />
      ))}
    </section>
  </Layout>
)

export default IndexPage
