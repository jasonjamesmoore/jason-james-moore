import { useRouter } from "next/router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface Project {
  title: string;
  company?: string;
  timeline: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  tldr?: string; // Brief executive summary
  projectType?: string; // e.g., "Solo Project", "Client Work", "Team Collaboration"
  duration?: string; // e.g., "3 months", "6 weeks"
  deployment?: string; // e.g., "Production", "In Development"
  challenge: string;
  technicalChallenges?: Array<{ title: string; description: string }>; // Individual technical challenges to highlight
  approach: string;
  solution: string;
  results: string;
  keyLearnings?: Array<{ title: string; lesson: string }>; // Key insights and growth from the project
}

// This will eventually come from a data file or CMS
const projectData: Record<string, Project> = {
  "onboarding-subscription-mvp": {
    title: "Subscription Scheduler with Dynamic Seasonal Pricing",
    company: "Tidal Cans (Residential Service Company)",
    timeline: "2025",
    tldr: "Built a production subscription management system with automated seasonal pricing for a residential service company. Architected complex multi-phase billing logic using Stripe Subscription Schedules, handling dynamic property-based pricing that automatically adjusts throughout the year. Zero webhook failures in production.",
    projectType: "Solo Full-Stack Development",
    duration: "2 months (ongoing enhancements)",
    deployment: "Live in Production",
    techStack: ["Next.js 15", "TypeScript 5", "React 19", "Stripe API", "React Hook Form 7", "Zod 4", "Tailwind CSS 4",
    "shadcn/ui",
    "Vercel"],
    githubUrl: "https://github.com/jasonjamesmoore/Stripe-Schedule-Onboarding",
    liveUrl: "https://onboard.jasonjamesmoore.com",
    challenge: `**Note**: This case study describes a production system currently processing real payments for Tidal Cans. The linked demo uses Stripe test mode to allow recruiters to explore the functionality without processing real transactions.

My client operates a trash valet service with complex pricing requirements. Their business model includes:

- **Base service**: Weekly trash valet for residential properties, synced to local garbage collection days
- **Seasonal add-ons**: Second weekly pickup during peak periods (summer at beach properties)
- **Location-specific rules**: Different seasonal windows for different service areas
- **Multi-property subscriptions**: Customers can subscribe for multiple addresses with mixed seasonal statuses

The existing manual billing process was error-prone and couldn't scale. They needed an automated system that would:

- **Dynamically calculate pricing** based on signup date and property locations.
- **Automatically adjust subscription costs** as properties enter/exit seasonal windows.
- **Handle prorated billing** for mid-month signups.
- **Preview upcoming charges** before customers commit.
- **Validate service coverage** by zip code during onboarding.`,
    
    technicalChallenges: [
      {
        title: "Explicit Phase Definitions",
        description: "Stripe's Subscription Schedules require explicit phase definitions—they don't auto-calculate based on metadata"
      },
      {
        title: "Complex Boundary Calculations",
        description: "Each property has unique seasonal dates, requiring complex phase boundary calculations"
      },
      {
        title: "Multi-Property Consolidation",
        description: "Multiple properties with overlapping/non-overlapping seasons need consolidated into single schedule phases"
      },
      {
        title: "Idempotent Webhooks",
        description: "Webhook-based schedule creation must be idempotent (handle retries)"
      },
      {
        title: "Accurate Invoice Previews",
        description: "Invoice previews must accurately reflect which properties have seasonal service in each phase"
      }
    ],
    
    approach: `I architected a solution using Stripe's Subscription Schedules API, which allows defining multiple pricing phases that transition automatically on specified dates.

**Key architectural decisions:** 

1. **Metadata-driven configuration**: Store per-address service selections in subscription metadata so webhooks can access business logic without a database

2. **Webhook-triggered schedule creation**: Don't create the schedule immediately—wait for the \`invoice.paid\` event, then build the multi-phase schedule based on the subscription's metadata

3. **Server-side phase calculation**: Use UTC timestamps to calculate seasonal window boundaries, then build phases that align with month boundaries for clean billing periods

4. **Service area validation**: Maintain a typed configuration mapping zip codes to service rules (base pickup day, seasonal pickup day, seasonal window dates)

5. **Type-safe forms**: Use React Hook Form with Zod schemas that validate different fields based on the current wizard step

**Data flow:**

1. User completes onboarding → Server creates subscription + payment intent
2. Payment succeeds → Stripe fires \`invoice.paid\` webhook
3. Webhook reads subscription metadata → Builds multi-phase schedule
4. Client polls for schedule → Displays phase breakdown and invoice preview`,

    solution: `**Multi-Step Onboarding System**

Built a 4-step wizard with:
- Real-time validation using React Hook Form and Zod
- Separate flows for Personal accounts and Business accounts (production only)
- Contact information collection
- Service address management (add/edit/remove multiple properties)
- Plan selection with per-property seasonal add-on toggles
- Stripe payment integration with real-time validation

Form validation uses step-aware Zod schemas that only validate fields relevant to the current step, preventing premature error states.

**Dynamic Subscription Schedule Builder** (\`phaseBuilder.ts\`)

Core algorithm that:
- Reads subscription metadata containing per-address seasonal selections
- Identifies all unique seasonal window boundaries across properties
- Generates phase date ranges aligned to month boundaries
- Calculates correct line item quantities for each phase
- Handles edge cases (overlapping seasons, properties with no seasonal service, open-ended final phases)

---

**Example: Multi-Property Seasonal Calculation**

Customer subscribes to 3 base properties with 2 seasonal add-ons on December 8, 2025:

- **Property A (Topsail Beach)**: Seasonal Nov 1, 2025 - Mar 1, 2026 *(currently in season)*
- **Property B (Surf City)**: Seasonal Oct 15, 2025 - Feb 28, 2026 *(currently in season)*
- **Property C (Wilmington)**: No seasonal service

The system generates **3 phases** for the first year:

1. **Dec 8, 2025 - Feb 27, 2026**: 3 base + 2 seasonal (A & B both in season)
2. **Feb 27, 2026 - Feb 28, 2026**: 3 base + 1 seasonal (only A still in season)
3. **Feb 28, 2026 - ongoing**: 3 base properties (all seasons ended, pattern repeats next cycle)

Each phase automatically includes:
- Correct base service quantity (always 3 in this example)
- Dynamic seasonal add-on quantity based on which properties are in their windows
- Month-aligned boundaries for clean billing periods
- Prorated initial charges if signup occurs mid-month

---

**Webhook Infrastructure** (\`webhook/route.ts\`)

Implemented secure webhook handlers:
- Signature verification using Stripe webhook secrets
- Idempotent schedule creation (prevents duplicates on retries)
- Deduplication logic using event IDs
- Error handling with detailed logging
- Multiple event handlers:
  - \`invoice.paid\`: Triggers schedule attachment
  - \`customer.subscription.updated\`: Fallback schedule attachment
  - \`invoice.payment_failed\`: Error logging
  - \`subscription_schedule.created/updated\`: Audit logging

**Invoice Preview API** (\`subscription-overview/route.ts\`)

Server endpoint that:
- Fetches upcoming invoice with Stripe's preview API
- Retrieves subscription schedule with all phases
- Enriches response with price metadata (names, types, amounts)
- Handles edge cases (schedule not yet created)

**Location-Based Validation** (\`serviceAreas.ts\`)

Maps cities/zip codes to rules, validates addresses during onboarding, displays pickup schedules in real-time.`,

    results: `**Technical Achievements:**

- **Zero webhook failures**: Idempotent design handles Stripe's retry logic gracefully
- **Accurate prorations**: Server-side calculations prevent client tampering
- **Type-safe end-to-end**: TypeScript across forms, API routes, and business logic
- **Maintainable codebase**: Clear separation of concerns, extensive inline documentation
- **Production-ready patterns**: Error boundaries, loading states, optimistic UI updates

**Business Impact:**

- Automated a previously manual billing process
- Eliminated seasonal pricing errors
- Enabled customers to self-serve onboarding
- Provided transparent cost previews (reduces support inquiries)
- Built foundation for future admin dashboard

**Future Enhancements:**

The current implementation is a fully functional MVP. Planned expansions include:
- Customer authentication and self-service portal
- Admin dashboard for subscription management and analytics
- PostgreSQL integration for customer data and audit logs
- Email notifications for phase transitions
- Subscription modification flows (add/remove properties, pause service)`,
    
    keyLearnings: [
      {
        title: "Stripe Subscription Schedules are powerful but complex",
        lesson: "Careful planning of phase boundaries is critical. UTC timestamp handling requires precision to avoid billing errors and edge cases."
      },
      {
        title: "Metadata is underrated",
        lesson: "Encoding business rules in Stripe metadata eliminates database dependencies for webhook logic while maintaining flexibility for future changes."
      },
      {
        title: "Webhook idempotency is non-negotiable",
        lesson: "Stripe retries failed webhooks, so every handler must safely handle duplicate events. Use event IDs for deduplication and design for multiple invocations."
      },
      {
        title: "Client-side polling needs boundaries",
        lesson: "Implemented max attempts and stabilization detection to prevent infinite polling loops while ensuring reliable state synchronization."
      },
      {
        title: "Form state management at scale",
        lesson: "React Hook Form + Zod scales well for complex multi-step forms, but step-aware validation requires careful schema design to prevent premature error states."
      }
    ],
  },
  // Add more projects here
};

export default function ProjectCaseStudy() {
  const router = useRouter();
  const { slug } = router.query;
  
  if (!slug || typeof slug !== 'string') {
    return null;
  }

  const project = projectData[slug];

  if (!project) {
    return (
      <CaseStudyLayout>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-[#fafafa] mb-4">Project Not Found</h1>
          <Link href="/" className="text-[#10b981] hover:text-[#fafafa] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </CaseStudyLayout>
    );
  }

  return (
    <CaseStudyLayout>
      <div className="max-w-3xl space-y-16 pb-[50vh]">
        {/* Header */}
        <div className="space-y-6">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#10b981] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#fafafa] leading-tight">
              {project.title}
            </h1>
            
            {project.company && (
              <p className="text-xl text-[#9ca3af]">{project.company} · {project.timeline}</p>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[rgba(16,185,129,0.2)] text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#10b981] text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#0ea472] transition-all duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <ExternalLink size={18} />
                  Try Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[rgba(156,163,175,0.3)] text-[#9ca3af] font-medium rounded-lg hover:border-[#10b981] hover:text-[#10b981] transition-all duration-200"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* TL;DR / Quick Facts */}
        {(project.tldr || project.projectType || project.duration || project.deployment) && (
          <div className="border-l-4 border-[#10b981] bg-[rgba(16,185,129,0.05)] p-6 rounded-r-lg space-y-4">
            {project.tldr && (
              <div>
                <h3 className="text-sm font-bold text-[#10b981] uppercase tracking-wide mb-2">
                  TL;DR
                </h3>
                <p className="text-[#9ca3af] leading-relaxed">
                  {project.tldr}
                </p>
              </div>
            )}
            
            {(project.projectType || project.duration || project.deployment) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[rgba(16,185,129,0.2)]">
                {project.projectType && (
                  <div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wide mb-1">Type</div>
                    <div className="text-sm text-[#fafafa] font-semibold">{project.projectType}</div>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wide mb-1">Duration</div>
                    <div className="text-sm text-[#fafafa] font-semibold">{project.duration}</div>
                  </div>
                )}
                {project.deployment && (
                  <div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wide mb-1">Status</div>
                    <div className="text-sm text-[#10b981] font-semibold">{project.deployment}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* The Challenge */}
        <section id="challenge" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">The Challenge</h2>
          <div className="prose max-w-none [&_p]:!text-[#9ca3af] [&_p]:!leading-relaxed [&_p]:!mb-4 [&_li]:!text-[#9ca3af] [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:!text-[#fafafa] [&_h3]:!mt-8 [&_h3]:!mb-4 [&_ul]:!my-4 [&_ul]:!list-disc [&_ul]:!pl-6 [&_ol]:!my-4 [&_ol]:!list-decimal [&_ol]:!pl-6 [&_code]:!text-[#10b981] [&_code]:!bg-[rgba(16,185,129,0.1)] [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-normal [&_code]:before:!content-[''] [&_code]:after:!content-['']">
            <ReactMarkdown>{project.challenge}</ReactMarkdown>
          </div>

          {/* Technical Challenges Callout */}
          {project.technicalChallenges && project.technicalChallenges.length > 0 && (
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-bold text-[#fb923c] flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Technical Challenges
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.technicalChallenges.map((challenge, index) => (
                  <Card 
                    key={index}
                    className="bg-[rgba(251,146,60,0.08)] border-[rgba(251,146,60,0.2)] hover:border-[rgba(251,146,60,0.4)] transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="text-sm font-bold text-[#fb923c] mb-2">
                        {challenge.title}
                      </div>
                      <div className="text-xs text-[#9ca3af] leading-relaxed">
                        {challenge.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* The Approach */}
        <section id="approach" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">The Approach</h2>
          <div className="prose max-w-none [&_p]:!text-[#9ca3af] [&_p]:!leading-relaxed [&_p]:!mb-4 [&_li]:!text-[#9ca3af] [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:!text-[#fafafa] [&_h3]:!mt-8 [&_h3]:!mb-4 [&_ul]:!my-4 [&_ul]:!list-disc [&_ul]:!pl-6 [&_ol]:!my-4 [&_ol]:!list-decimal [&_ol]:!pl-6 [&_code]:!text-[#10b981] [&_code]:!bg-[rgba(16,185,129,0.1)] [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-normal [&_code]:before:!content-[''] [&_code]:after:!content-['']">
            <ReactMarkdown>{project.approach}</ReactMarkdown>
          </div>
        </section>

        {/* The Solution */}
        <section id="solution" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">The Solution</h2>
          <div className="prose max-w-none [&_p]:!text-[#9ca3af] [&_p]:!leading-relaxed [&_p]:!mb-4 [&_li]:!text-[#9ca3af] [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:!text-[#fafafa] [&_h3]:!mt-8 [&_h3]:!mb-4 [&_ul]:!my-4 [&_ul]:!list-disc [&_ul]:!pl-6 [&_ol]:!my-4 [&_ol]:!list-decimal [&_ol]:!pl-6 [&_code]:!text-[#10b981] [&_code]:!bg-[rgba(16,185,129,0.1)] [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-normal [&_code]:before:!content-[''] [&_code]:after:!content-[''] [&_hr]:!border-t-2 [&_hr]:!border-[rgba(251,146,60,0.3)] [&_hr]:!my-6">
            <ReactMarkdown>{project.solution}</ReactMarkdown>
          </div>
        </section>

        {/* The Results */}
        <section id="results" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold text-[#fafafa]">The Results</h2>
          
          {/* Key Achievements Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Card className="bg-[rgba(16,185,129,0.08)] border-[rgba(16,185,129,0.2)]">
              <CardContent className="pl-5">
                <div className="text-2xl font-bold text-[#10b981] mb-1">Zero</div>
                <div className="text-sm text-[#fafafa] font-semibold">Webhook Failures</div>
                <div className="text-xs text-[#9ca3af] mt-2">Idempotent design handles Stripe's retry logic gracefully</div>
              </CardContent>
            </Card>
            <Card className="bg-[rgba(16,185,129,0.08)] border-[rgba(16,185,129,0.2)]">
              <CardContent className="pl-5">
                <div className="text-2xl font-bold text-[#10b981] mb-1">100%</div>
                <div className="text-sm text-[#fafafa] font-semibold">Automated Billing</div>
                <div className="text-xs text-[#9ca3af] mt-2">Eliminated manual billing process and seasonal pricing errors</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="prose max-w-none [&_p]:!text-[#9ca3af] [&_p]:!leading-relaxed [&_p]:!mb-4 [&_li]:!text-[#9ca3af] [&_strong]:!text-[#fafafa] [&_strong]:!font-semibold [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:!text-[#fafafa] [&_h3]:!mt-8 [&_h3]:!mb-4 [&_ul]:!my-4 [&_ul]:!list-disc [&_ul]:!pl-6 [&_ol]:!my-4 [&_ol]:!list-decimal [&_ol]:!pl-6 [&_code]:!text-[#10b981] [&_code]:!bg-[rgba(16,185,129,0.1)] [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-normal [&_code]:before:!content-[''] [&_code]:after:!content-['']">
            <ReactMarkdown>{project.results}</ReactMarkdown>
          </div>
        </section>

        {/* Key Learnings */}
        {project.keyLearnings && project.keyLearnings.length > 0 && (
          <section id="learnings" className="scroll-mt-24 space-y-4">
            <h2 className="text-2xl font-bold text-[#fafafa] flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Key Learnings
            </h2>
            <p className="text-[#9ca3af] text-sm">
              Insights and growth from building this project
            </p>
            <div className="grid grid-cols-1 gap-4 mt-6">
              {project.keyLearnings.map((learning, index) => (
                <Card
                  key={index}
                  className="bg-[rgba(100,255,218,0.05)] border-[rgba(100,255,218,0.15)] hover:border-[rgba(100,255,218,0.3)] transition-all"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-[#10b981] font-bold text-lg mt-0.5">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="text-sm font-bold text-[#fafafa]">
                          {learning.title}
                        </div>
                        <div className="text-xs text-[#9ca3af] leading-relaxed">
                          {learning.lesson}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Back to Projects */}
        <div className="border-t border-[rgba(156,163,175,0.1)] pt-8">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-[#10b981] hover:text-[#fafafa] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
