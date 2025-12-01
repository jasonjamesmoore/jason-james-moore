"use client"

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  status: "MVP" | "In Progress" | "Production";
  whatWorking: string[];
  whatNext: string[];
  githubUrl: string;
  liveUrl?: string;
  subdomain?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  status,
  whatWorking,
  whatNext,
  githubUrl,
  liveUrl,
  subdomain,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const statusColors = {
    MVP: "text-[#fb923c] border-[#fb923c]",
    "In Progress": "text-[#fb923c] border-[#fb923c]",
    Production: "text-[#10b981] border-[#10b981]",
  };

  return (
    <>
      {/* Card Preview - clickable */}
      <button
        onClick={() => setOpen(true)}
        className="w-full text-left"
      >
        <Card className="border-transparent bg-transparent p-6 rounded-lg transition-all duration-300 hover:bg-[rgba(156,163,175,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-[#fafafa] group-hover:text-[#10b981] transition">
              {title}
            </h3>
            <Badge
              variant="outline"
              className={`text-xs px-2 py-1 ${statusColors[status]}`}
            >
              {status}
            </Badge>
          </div>
          <p className="text-[#9ca3af] text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[rgba(16,185,129,0.2)] text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </button>

      {/* Modal - Full Details */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#1a1a1a] border-[rgba(156,163,175,0.2)] text-[#fafafa] max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <DialogTitle className="text-2xl font-bold text-[#fafafa]">
                {title}
              </DialogTitle>
              <span className={`text-xs px-2 py-1 border rounded whitespace-nowrap ${statusColors[status]}`}>
                {status}
              </span>
            </div>
            <DialogDescription className="text-[#9ca3af] text-base mt-4">
              {description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-bold text-[#fafafa] uppercase tracking-wide mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[rgba(16,185,129,0.2)] text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Working Features */}
            <div>
              <h4 className="text-sm font-bold text-[#10b981] uppercase tracking-wide mb-3">
                ✓ Working
              </h4>
              <ul className="space-y-2">
                {whatWorking.map((feature, i) => (
                  <li key={i} className="text-sm text-[#9ca3af] flex items-start">
                    <span className="text-[#10b981] mr-2">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            {whatNext.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-[#9ca3af] uppercase tracking-wide mb-3">
                  → Next
                </h4>
                <ul className="space-y-2">
                  {whatNext.map((item, i) => (
                    <li key={i} className="text-sm text-[#9ca3af] flex items-start">
                      <span className="text-[#9ca3af] mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-[rgba(156,163,175,0.1)]">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9ca3af] hover:text-[#10b981] transition text-sm"
                >
                  <Github size={16} />
                  View Code
                </a>
              )}
              {(liveUrl || subdomain) && (
                <a
                  href={liveUrl || subdomain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9ca3af] hover:text-[#10b981] transition text-sm"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
