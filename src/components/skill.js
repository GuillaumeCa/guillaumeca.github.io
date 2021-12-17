import React, { useEffect, useState } from "react";
import { getSkillByTag } from "../data/data";

export function useSkillByTag(tag) {
  return getSkillByTag(tag);
}

function useDelayAnimate(visible, index) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (visible) {
      let ref = setTimeout(() => {
        setAnimate(true);
      }, 50 * index);
      return () => clearTimeout(ref);
    }
  }, [visible, index]);

  return animate;
}

export function Skill({ tag, name, icon, visible, index }) {
  const animate = useDelayAnimate(visible, index);

  return (
    <div className="justify-center">
      <div
        className={`p-4 py-10 flex flex-col items-center border-8 border-main-light m-2 ${
          animate && "shadow-dark"
        } transition-shadow ${
          animate && "hover:shadow-dark20 hover:transform--5px"
        }`}
      >
        <img className="h-32" src={icon} alt={tag} />
        <p className="mt-3 text-center font-bold text-main-dark">{name}</p>
      </div>
    </div>
  );
}
