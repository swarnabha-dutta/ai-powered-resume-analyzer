import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeBoost AI" },
    { name: "description", content: "Smart feedback for your dream jobs!" },
  ];
}

export default function Home() {
  return main
}
