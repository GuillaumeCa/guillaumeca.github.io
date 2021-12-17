import { format, formatDistance } from "date-fns";
import React from "react";

export function Footer({ lastUpdate }) {
  return (
    <footer className="p-4 mt-4 text-gray-600">
      <span className="text-main-dark font-semibold">
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
