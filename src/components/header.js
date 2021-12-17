import Link from "next/link";
import React from "react";

export const Header = ({ siteTitle, author, description }) => (
  <header className="m-6">
    <div className="p-4 bg-main-dark text-white border-main-light border-8 leading-none">
      <span className="uppercase font-bold text-xl">{siteTitle}</span>
      <Link href="/">
        <a>
          <h1 className="text-5xl font-bold mt-1">{author}</h1>
        </a>
      </Link>
      <h2 className="text-xl mt-2">
        <span role="img" aria-label="waving hand">
          👋
        </span>{" "}
        {description}
      </h2>
    </div>
  </header>
);
