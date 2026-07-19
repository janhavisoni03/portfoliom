import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-28">
      <SectionReveal className="text-center">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-heading mt-4">
          Applied <span className="gradient-text">field work</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">
          Hazard analysis, process mapping and laboratory investigations carried out
          during hands-on internships.
        </p>
      </SectionReveal>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
