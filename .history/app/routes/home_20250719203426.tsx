import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import NavBar from "~/components/Navbar"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeBoost AI" },
    { name: "description", content: "Smart feedback for your dream jobs!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <NavBar/>
    
    <section className="main-section">
        <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings </h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
    </section>
    {resumes.map((resume) => (
      <
    ))}
  </main>
}
