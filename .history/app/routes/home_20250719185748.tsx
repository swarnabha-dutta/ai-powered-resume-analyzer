import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeBoost AI" },
    { name: "description", content: "Smart feedback for your dream jobs!" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section">
        <div className="page-heading">
            <h1>Track Your Apllications </h1>
        </div>
    </section>
  </main>
}
