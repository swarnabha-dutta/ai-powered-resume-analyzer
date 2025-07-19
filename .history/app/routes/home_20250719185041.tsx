import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeBoost AI" },
    { name: "description", content: "Some " },
  ];
}

export default function Home() {
  return <Welcome />;
}
