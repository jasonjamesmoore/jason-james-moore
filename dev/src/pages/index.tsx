import { AppLayout } from "@/components/AppLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechBadge } from "@/components/TechBadge";

// Your project data
const projects = [
  {
    title: "Subscription Scheduler with Dynamic Pricing",
    description:
      "Built a multi-step onboarding and subscription management system for a residential trash valet service. Implemented location-based seasonal pricing using Stripe Subscription Schedules, where subscription costs automatically adjust throughout the year based on each property's seasonal service windows. Features webhook-driven schedule creation, metadata-encoded business rules, and comprehensive invoice previews.\n\n**This portfolio demo mirrors the live production system.**\n\n",
    techStack: [
      "Next.js 15",
      "TypeScript 5",
      "React 19",
      "Stripe API",
      "React Hook Form 7",
      "Zod 4",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    status: "In Production" as const,
    whatWorking: [
      "Multi-step form with step-aware Zod validation",
      "Stripe payment integration with Payment Intents",
      "Dynamic multi-phase subscription schedule creation",
      "Location-based service area validation (zip code matching)",
      "Webhook handlers for subscription lifecycle events",
      "Real-time invoice preview with phase breakdown",
      "Per-property seasonal add-on configuration",
      "Responsive UI with loading states and error handling",
    ],
    whatNext: [
      "User authentication and account management",
      "Admin dashboard for subscription oversight",
      "Postgres integration for customer data persistence and contractor app consumption",
      "Customer self-service portal (pause/cancel/modify)",
      "Email notifications for seasonal phase transitions",
      "Analytics dashboard for revenue forecasting",
      "Automated testing suite (unit + integration)",
      "Rate limiting and abuse prevention",
    ],
    githubUrl: "https://github.com/jasonjamesmoore/Stripe-Schedule-Onboarding",
    subdomain: "https://onboard.jasonjamesmoore.com",
    slug: "onboarding-subscription-mvp",
  },
  {
    title: "PracticeKit: Interactive Music Theory Learning Platform",
    description:
      "Built a modular music theory practice platform with interactive flashcard quizzes. Implemented a sophisticated enharmonic calculation engine that validates 12,789 possible note/key/degree combinations in real-time. Features four quiz modes with contextual filtering, prompt locking for focused practice, custom color theming with light/dark modes, and multi-step onboarding system.\n\n**Personal project for musicians learning theory fundamentals.**\n\n",
    techStack: [
      "React 19",
      "TypeScript 5",
      "Vite 6",
      "Mantine UI 7",
      "React Router v7",
      "Vitest",
      "React Testing Library",
    ],
    status: "MVP" as const,
    whatWorking: [
      "Four quiz modes: Degree Finder, Note Finder, Key Finder, Key Signature Quiz",
      "Enharmonic calculation engine with letter-based interval logic",
      "Smart card generation with validation (filters invalid combinations)",
      "Priority filtering system (harmonic extensions vs. scale degrees)",
      "Prompt locking feature for practicing specific keys/notes",
      "Variant system for bidirectional quizzes (key→signature, signature→key)",
      "Custom 5-color palette with 10 shades each (light/dark mode support)",
      "Multi-step onboarding (platform welcome + tool-specific tutorials)",
      "Tool registry architecture for extensibility",
      "Breadcrumb navigation with context-aware labels",
    ],
    whatNext: [
      "User accounts with progress tracking",
      "Spaced repetition algorithm for optimal learning intervals",
      "Additional learning tools (ear training, sight reading, rhythm practice)",
      "Practice analytics and performance metrics dashboard",
      "Difficulty progression system (adaptive quiz difficulty)",
      "Customizable card decks (major keys only, naturals only, etc.)",
      "Audio playback for notes and intervals",
      "Test suite covering core theory calculations",
      "MIDI keyboard input support",
    ],
    githubUrl: "https://github.com/jasonjamesmoore/TheoryFlashCards",
    subdomain: "https://practice.jasonjamesmoore.com",
    slug: "practicekit-music-theory",
  },
  // {
  //   title: "Musician's Practice Notebook",
  //   description:
  //     "Digital practice journal for tracking rehearsal sessions, goals, and progress over time.",
  //   techStack: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  //   status: "In Progress" as const,
  //   whatWorking: [
  //     "Session logging",
  //     "Basic note-taking",
  //     "Date-based organization",
  //   ],
  //   whatNext: [
  //     "Goal tracking features",
  //     "Analytics/insights",
  //     "Audio recording integration",
  //     "Export to PDF",
  //   ],
  //   githubUrl: "https://github.com/jasonjamesmoore/practice-notebook",
  // },
];

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-24 pb-[50vh]">
        {/* About */}
        <section id="about" className="scroll-mt-24 space-y-8">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-[#9ca3af]">
              I'm a{" "}
              <b className="text-[#fafafa]">software developer and educator</b>{" "}
              based in Wilmington, NC, specializing in building clear, reliable
              tools that make complex workflows feel simple. A long-time music
              educator and professional saxophonist, I’ve transitioned into
              software engineering where I bring the same curiosity, focus, and
              communication skills that defined my earlier career.
            </p>
            <p className="text-[#9ca3af]">
              I work primarily with <b className="text-[#fafafa]">React</b>,{" "}
              <b className="text-[#fafafa]">Next.js</b>,{" "}
              <b className="text-[#fafafa]">TypeScript</b>,{" "}
              <b className="text-[#fafafa]">Postgres/Supabase</b>, and{" "}
              <b className="text-[#fafafa]">Stripe</b>, and I love designing
              user interfaces that are easy to understand but powerful under the
              hood. I've built production-ready systems for startups, small
              businesses, and freelance clients—everything from{" "}
              <b className="text-[#fafafa]">multi-step onboarding flows</b> with{" "}
              <b className="text-[#fafafa]">subscription logic</b> to{" "}
              <b className="text-[#fafafa]">internal tools</b> and{" "}
              <b className="text-[#fafafa]">custom quoting applications</b>.
            </p>
            <p className="text-[#9ca3af]">
              I care deeply about clean architecture, thoughtful UX, and
              building software that holds up in real-world use. Whether
              collaborating with a team or working independently, I focus on
              creating tools that{" "}
              <b className="text-[#fafafa]">
                solve real problems for real people
              </b>
              , built with a methodical, detail-driven engineering mindset and a
              commitment to continuous learning.
            </p>
          </div>

          {/* Currently Section */}
          <div className="border-l-2 border-[#10b981] pl-6 space-y-3 mt-20">
            <h3 className="text-sm font-bold text-[#10b981] uppercase tracking-wide">
              Currently
            </h3>
            <ul className="space-y-2 text-[#9ca3af]">
              <li className="flex items-start">
                <span className="text-[#10b981] mr-3">▹</span>
                <span>Seeking a full-time software engineering role</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-3">▹</span>
                <span>Also available for contract and freelance projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-3">▹</span>
                <span>
                  Especially interested in work involving React, TypeScript,
                  Next.js, Sanity.io, or building product workflows end-to-end
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <h2 className="text-2xl font-bold text-[#fafafa]">Selected Experience</h2>

          <div className="space-y-12">
            <ExperienceCard
              startDate="2025"
              endDate="Ongoing Contract"
              title="Full-stack Developer"
              company="Tidal Cans"
              description="Built a multi-step onboarding MVP with Stripe subscription management and seasonal pricing logic. Also worked on infrastructure improvements for an existing application, including security hardening, redeployment, and implementing logging and backup systems. Improvements and additional features in development."
              technologies={[
                "React",
                "TypeScript",
                "Node.js",
                "Stripe API",
                "Shadcn/ui",
              ]}
              link="https://www.tidalcans.com/"
            />

            <ExperienceCard
              startDate="2023"
              endDate="Present"
              title="React Developer & Consultant"
              company="Conduction"
              description="Worked with engineers, educators, and designers at a music-education startup to debug timeline features and improve state logic. Proposed architectural patterns adopted across the platform. Developed a marketplace MVP prototype to explore product direction and technical feasibility."
              technologies={["JavaScript", "PostgreSQL", "React", "Mantine"]}
              link="https://www.conduction.live/"
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <h2 className="text-2xl font-bold text-[#fafafa]">
            Selected Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="scroll-mt-24 space-y-8">
          <h2 className="text-2xl font-bold text-[#fafafa]">Tech I Use</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Supabase",
              "PostgreSQL",
              "Sanity.io",
              "Stripe API",
              "REST APIs",
              "Git",
              "Tailwind CSS",
              "shadcn/ui",
              "Mantine",
              "Framer Motion",
            ].map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
