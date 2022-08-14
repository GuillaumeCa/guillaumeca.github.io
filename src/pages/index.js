import React, { useRef, useState } from "react";
import Layout from "../components/layout";
import { Project, SkillIcon } from "../components/project";
import SEO from "../components/seo";
import { Skill } from "../components/skill";
import { useOnScreen } from "../components/use-on-screen";
import { PROJECTS } from "../data/projects.data";
import { SITE } from "../data/site.data";
import { SKILLS } from "../data/skills.data";

function FilterIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
      />
    </svg>
  );
}

function SkillFilter({ skills, projects, skillFocus, onSkillFocus }) {
  return (
    <div className="space-x-2 mb-4 text-center">
      {skills.map((skill) => {
        const numProjects = projects.filter((p) =>
          p.technologies.some((t) => skill.tag === t)
        ).length;
        if (numProjects === 0) {
          return null;
        }

        return (
          <button
            key={skill.tag}
            type="button"
            className="relative"
            onClick={() => {
              if (skill.tag !== skillFocus) {
                onSkillFocus(skill.tag);
              } else {
                onSkillFocus(null);
              }
            }}
          >
            <SkillIcon focus={skill.tag === skillFocus} tag={skill.tag} />
            <span className="absolute right-0 top-0 rounded-full w-6 h-6  bg-teal-500 text-white">
              {numProjects}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ProjectsList({ projects, locale, skills }) {
  const [showFilters, setShowFilters] = useState(false);
  const [skillFocus, setSkillFocus] = useState(null);

  const projectsFiltered = projects.filter(
    (p) => !skillFocus || p.technologies.some((t) => t === skillFocus)
  );

  return (
    <section className="px-6 max-w-6xl mx-auto mt-10">
      <div className="flex justify-between mb-10">
        <SquaredTitle id="projects">PROJECTS</SquaredTitle>
        <button
          type="button"
          onClick={() => {
            if (showFilters) {
              setSkillFocus(null);
            }
            setShowFilters(!showFilters);
          }}
          className={`p-3 ${
            showFilters ? "bg-blue-200" : "bg-blue-50"
          } rounded-full hover:bg-blue-100 active:bg-blue-200`}
        >
          <FilterIcon className="text-blue-500" />
        </button>
      </div>
      {showFilters && (
        <SkillFilter
          skills={skills}
          projects={projects}
          skillFocus={skillFocus}
          onSkillFocus={setSkillFocus}
        />
      )}
      {projectsFiltered.map((project) => {
        return (
          <Project
            key={project.title}
            type={project.type}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle[locale]}
            description={project.description[locale]}
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
    <div className="inline-block rounded-md bg-gradient-to-br from-teal-300 to-blue-700">
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

export default ({ locale, projects, skills, siteMetadata }) => {
  return (
    <Layout siteMetadata={siteMetadata} locale={locale}>
      <SEO title="Home" siteMetadata={siteMetadata} />
      <ProjectsList projects={projects} skills={skills} locale={locale} />
      {/* <SkillsList skills={skills} /> */}
    </Layout>
  );
};

export function getStaticProps({ locale = "en" }) {
  const siteMetadata = SITE;
  siteMetadata.lastUpdate = Date.now();
  return {
    props: {
      locale,
      projects: PROJECTS,
      skills: SKILLS,
      siteMetadata: SITE,
    },
  };
}
