import React from "react";
import { useSkillByTag } from "./skill";
import { AirplaneIcon, GraduationCapIcon, IdeaIcon } from "./svgs";

function SkillIcon({ tag }) {
  const skill = useSkillByTag(tag);
  if (!skill) return null;

  const svgUrl = skill.icon;

  return (
    <div className="bg-white mx-1 my-2 p-3 border-white shadow-md rounded-full">
      <div
        title={skill.name}
        className="w-8 h-8 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${svgUrl}')` }}
      />
    </div>
  );
}

export function Project({
  type,
  anchorTag,
  image,
  title,
  subtitle,
  description,
  technologies,
  url,
  source,
}) {
  return (
    <div className="flex mt-10 flex-col md:flex-row">
      <div className="flex-1 md:w-1/2 md:mr-10">
        <img
          className="border-4 rounded-md shadow-lg shadow-blue-100 border-blue-300 bg-blue-300"
          src={image}
          alt={"Project picture of " + title}
        />
      </div>
      <div className="flex-1 mt-6 md:mt-0 md:w-1/2">
        <div className="bg-gradient-to-tl from-teal-300 to-blue-700 shadow-md shadow-blue-200 rounded-md p-5 text-white">
          <h1 className="text-5xl font-light leading-none">{title}</h1>
          <h3 className="inline-block shadow-md mt-4 py-1 px-3 rounded-full bg-white text-main-dark font-bold text-sm">
            <div className="flex items-center">
              <span>
                {type === "PERSONAL" && <IdeaIcon className="w-3 h-3 mr-1" />}
                {type === "FREELANCE" && (
                  <AirplaneIcon className="w-3 h-3 mr-1" />
                )}
                {type === "SCHOOL" && (
                  <GraduationCapIcon className="w-3 h-3 mr-1" />
                )}{" "}
              </span>
              {subtitle}
            </div>
          </h3>
          <div
            className="mt-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex flex-wrap mt-2">
            {technologies.map((t) => (
              <SkillIcon key={t} tag={t} />
            ))}
          </div>
        </div>
        {source && (
          <a
            href={source.url}
            className="inline-block mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex p-2 border-4 rounded-md border-black  leading-none items-center text-black hover:text-white hover:bg-black">
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
              >
                <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-.469-52.562-.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375-113.656-12.937-233.218-56.875-233.218-253.063 0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-.688 123.625-.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z" />
              </svg>
              <span className="font-bold ml-3 text-sm">SOURCE</span>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
