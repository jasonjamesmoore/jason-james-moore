import { AppLayout } from "@/components/AppLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechBadge } from "@/components/TechBadge";

// Your project data
const projects = [
  {
    title: "Onboarding/Subscription MVP",
    description:
      "Multi-step user onboarding flow with Stripe payment integration. Validates user data, handles subscription plans, and processes payments securely.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Stripe API",
      "React Hook Form",
      "Tailwind CSS",
    ],
    status: "MVP" as const,
    whatWorking: [
      "Multi-step form with validation",
      "Stripe payment integration",
      "User data collection and storage",
      "Responsive design",
    ],
    whatNext: [
      "Email confirmation flow",
      "Subscription management dashboard",
      "Webhook handlers for payment events",
    ],
    githubUrl: "https://github.com/jasonjamesmoore/onboarding-mvp",
    subdomain: "https://onboarding.jasonjamesmoore.com",
  },
  {
    title: "Music Theory Flashcards",
    description:
      "Interactive flashcard app for learning music theory concepts. Production-ready with clean UI and smooth animations.",
    techStack: ["React", "TypeScript", "Framer Motion", "CSS Grid"],
    status: "Production" as const,
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
              I'm a <b className="text-[#fafafa]">software developer and educator</b> based in Wilmington,
              NC, specializing in building clear, reliable tools that make
              complex workflows feel simple. A long-time music educator and
              professional saxophonist, I’ve transitioned into software
              engineering where I bring the same curiosity, focus, and
              communication skills that defined my earlier career.
            </p>
            <p className="text-[#9ca3af]">
              I work primarily with <b className="text-[#fafafa]">React</b>, <b className="text-[#fafafa]">Next.js</b>,{" "}
              <b className="text-[#fafafa]">TypeScript</b>, <b className="text-[#fafafa]">Postgres/Supabase</b>, and <b className="text-[#fafafa]">Stripe</b>, and
              I love designing user interfaces that are easy to understand but
              powerful under the hood. I've built production-ready systems for
              startups, small businesses, and freelance clients—everything from{" "}
              <b className="text-[#fafafa]">multi-step onboarding flows</b> with <b className="text-[#fafafa]">subscription logic</b>{" "}
              to <b className="text-[#fafafa]">internal tools</b> and <b className="text-[#fafafa]">custom quoting applications</b>.
            </p>
            <p className="text-[#9ca3af]">
              I care deeply about clean architecture, thoughtful UX, and
              building software that holds up in real-world use. Whether
              collaborating with a team or working independently, I focus on
              creating tools that <b className="text-[#fafafa]">solve real problems for real people</b>,
              built with a methodical, detail-driven engineering mindset and a
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
              startDate="2023"
              endDate="Present"
              title="Full-stack Developer"
              company="Company Name"
              description="Brief description of your role and key accomplishments. What you built, technologies you used, and impact you made."
              technologies={["React", "TypeScript", "Node.js"]}
              link="#"
            />

            <ExperienceCard
              startDate="2020"
              endDate="2023"
              title="Previous Role"
              company="Previous Company"
              description="Description of responsibilities and achievements in this role."
              technologies={["JavaScript", "PostgreSQL"]}
              link="#"
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
              "PostgreSQL",
              "MongoDB",
              "Tailwind CSS",
              "Framer Motion",
              "REST APIs",
              "Web Audio",
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
