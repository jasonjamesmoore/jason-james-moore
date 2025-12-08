import { AppLayout } from "@/components/AppLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechBadge } from "@/components/TechBadge";

// Your project data
const projects = [
  {
    title: "Subscription Scheduler with Dynamic Pricing",
    description:
      "Built a multi-step onboarding and subscription management system for a residential trash valet service. Implemented location-based seasonal pricing using Stripe Subscription Schedules, where subscription costs automatically adjust throughout the year based on each property's seasonal service windows. Features webhook-driven schedule creation, metadata-encoded business rules, and comprehensive invoice previews.\n\n**This portfolio demo mirrors the live production system with a few simplifications.**\n\n",
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
    title: "Music Theory Flashcards",
    description:
      "Interactive flashcard app for learning music theory concepts. Production-ready with clean UI and smooth animations.",
    techStack: ["React", "TypeScript", "Framer Motion", "CSS Grid"],
    status: "In Production" as const,
    whatWorking: [
      "Multiple flashcard decks",
      "Flip animations",
      "Progress tracking",
      "Mobile responsive",
    ],
    whatNext: [
      "Spaced repetition algorithm",
      "User accounts and progress sync",
      "Additional theory topics",
    ],
    githubUrl: "https://github.com/jasonjamesmoore/music-theory-flashcards",
    subdomain: "https://flashcards.jasonjamesmoore.com",
  },
  {
    title: "Face Detection App",
    description:
      "Real-time face detection using Clarifai API. Upload images and get instant facial recognition results.",
    techStack: ["React", "Node.js", "Clarifai API", "PostgreSQL"],
    status: "In Progress" as const,
    whatWorking: [
      "Image upload functionality",
      "Face detection API integration",
      "Bounding box visualization",
    ],
    whatNext: [
      "User authentication",
      "Image history/gallery",
      "Batch processing",
      "Deploy to production",
    ],
    githubUrl: "https://github.com/jasonjamesmoore/face-detection",
  },
  {
    title: "Musician's Practice Notebook",
    description:
      "Digital practice journal for tracking rehearsal sessions, goals, and progress over time.",
    techStack: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    status: "In Progress" as const,
    whatWorking: [
      "Session logging",
      "Basic note-taking",
      "Date-based organization",
    ],
    whatNext: [
      "Goal tracking features",
      "Analytics/insights",
      "Audio recording integration",
      "Export to PDF",
    ],
    githubUrl: "https://github.com/jasonjamesmoore/practice-notebook",
  },
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
                  Next.js, or building product workflows end-to-end
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <h2 className="text-2xl font-bold text-[#fafafa]">Experience</h2>

          <div className="space-y-12">
            <ExperienceCard
              startDate="2025"
              endDate="Ongoing Contract"
              title="Full-stack Developer"
              company="Tidal Cans"
              description="Built a multi-step onboarding MVP with Stripe subscription management and seasonal pricing logic. Also worked on infrastructure improvements for an existing application, including security hardening, redeployment, and implementing logging and backup systems. Improvements and additional features in development."
              technologies={["React", "TypeScript", "Node.js"]}
              link="https://www.tidalcans.com/"
            />

            <ExperienceCard
              startDate="2023"
              endDate="Present"
              title="React Developer & Consultant"
              company="Conduction"
              description="Worked with engineers, educators, and designers at a music-education startup to debug timeline features and improve state logic. Proposed architectural patterns adopted across the platform. Developed a marketplace MVP prototype to explore product direction and technical feasibility."
              technologies={["JavaScript", "PostgreSQL"]}
              link="https://www.conduction.live/"
            />

            {/* <ExperienceCard
              startDate="2023"
              endDate="Present"
              title="Full-stack Developer"
              company="Freelance"
              description="Delivered production applications for onboarding systems, custom quoting tools, and educational platforms. Worked directly with clients to define requirements, architect solutions, and iterate based on feedback."
              technologies={["React", "TypeScript", "Node.js"]}
              link="https://dev.jasonjamesmoore.com/"
            /> */}
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
              "Vite",
              "Tailwind CSS",
              "Shadcn UI",
              "Mantine",
              "Framer Motion",
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "Prisma",
              "Stripe",
              "REST APIs",
              "Web Audio",
              "Zod",
              "Vercel",
              "Linux/SSH",
              "Git",
            ].map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
