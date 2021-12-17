import { SKILLS } from "./skills.data";

export function getSkillByTag(tag) {
  return SKILLS.find((skill) => skill.tag === tag);
}
