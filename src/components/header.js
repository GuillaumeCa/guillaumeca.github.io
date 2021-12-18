import React from "react";

export function Header({ siteTitle, author, description, currentWork }) {
  return (
    <header className="flex items-center justify-center h-screen relative">
      <div className="p-4 text-gray-400 leading-none">
        <h1 className="text-6xl font-bold leading-normal text-transparent mt-1 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Hello ! I'm {author} and <br />
          this is my portfolio.
        </h1>
        <h2 className="text-xl mt-2">
          <span role="img" aria-label="waving hand">
            👋
          </span>{" "}
          {description} - {currentWork}
        </h2>
        <div className="text-center mt-12">
          <a
            href="#projects"
            className="bg-blue-600 font-medium text-white rounded-full px-5 py-3"
          >
            My projects &rarr;
          </a>
        </div>
      </div>
    </header>
  );
}
