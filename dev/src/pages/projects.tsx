import Link from "next/link";
import { AppLayout } from "@/components/AppLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <AppLayout>
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-5xl space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#ccd6f6]">Projects</h1>
          <p className="text-[#8892b0] max-w-2xl">
            Software I've built. Each showcases different technical approaches and where I'm taking it next.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 border-t border-[rgba(136,146,176,0.1)] pt-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </AppLayout>
  );
}
