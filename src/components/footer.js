import { format, formatDistance } from "date-fns";
import React from "react";

export function Footer({ lastUpdate }) {
  return (
    <footer className="p-8 mt-8 text-gray-400 text-center">
      <span className="font-semibold">
        © {new Date().getFullYear()} Guillaume Carré
      </span>
      {` - `}
      <span>
        Built with
        {` `}
        <a className="font-bold hover:underline" href="https://nextjs.org">
          Nextjs
        </a>
      </span>
      {` - `}
      <span>
        Updated{" "}
        <time title={format(lastUpdate, "PPPppp")}>
          {formatDistance(lastUpdate, new Date(), {
            addSuffix: true,
          })}
        </time>
      </span>
    </footer>
  );
}
