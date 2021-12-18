import React, { useRef } from "react";
import Layout from "../components/layout";
import { Project } from "../components/project";
import SEO from "../components/seo";
import { Skill } from "../components/skill";
import { useOnScreen } from "../components/use-on-screen";
import { PROJECTS } from "../data/projects.data";
import { SITE } from "../data/site.data";
import { SKILLS } from "../data/skills.data";

function ProjectsList({ projects }) {
  return (
    <section className="px-6 max-w-6xl mx-auto mt-10">
      <SquaredTitle id="projects">PROJECTS</SquaredTitle>
      {projects.map((project) => {
        return (
          <Project
            key={project.title}
            type={project.type}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            technologies={project.technologies}
            url={project.url}
            source={project.source}
          />
        );
      })}
    </section>
  );
}

export function SquaredTitle({ id, children }) {
  return (
    <div className="inline-block rounded-md bg-gradient-to-br from-blue-500 to-blue-700">
      <h1
        id={id}
        className="inline-block scroll-mt-4 py-2 px-4 text-white uppercase text-2xl font-bold tracking-wider"
      >
        {children}
      </h1>
    </div>
  );
}

function SkillsList({ skills }) {
  const ref = useRef();
  const onScreen = useOnScreen(
    ref,
    `0px 0px -${
      typeof window !== "undefined" && window.innerHeight * 0.8
    }px 0px`
  );

  return (
    <section ref={ref} className="px-6 max-w-6xl mx-auto mt-10">
      <SquaredTitle>SKILLS</SquaredTitle>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
        {skills.map((skill, i) => (
          <Skill
            key={skill.tag}
            name={skill.name}
            icon={skill.icon}
            index={i}
            visible={onScreen}
          />
        ))}
      </div>
    </section>
  );
}

export default ({ projects, skills, siteMetadata }) => {
  return (
    <Layout siteMetadata={siteMetadata}>
      <SEO title="Home" siteMetadata={siteMetadata} />
      <ProjectsList projects={projects} />
      {/* <SkillsList skills={skills} /> */}
    </Layout>
  );
};

export function getStaticProps() {
  const siteMetadata = SITE;
  siteMetadata.lastUpdate = Date.now();

  return {
    props: {
      projects: PROJECTS,
      skills: SKILLS,
      siteMetadata: SITE,
    },
  };
}
