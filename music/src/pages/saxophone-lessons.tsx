import Head from "next/head";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function LessonsPage() {
  return (
    <>
      <Head>
        <title>Saxophone Lessons | Wilmington NC & Online</title>
        <meta
          name="description"
          content="Explore saxophone lessons: tone, improvisation, technique, theory. Private lessons, group sessions, and monthly mentorship available."
        />
      </Head>

      <section className="px-6 py-20 md:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left text content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              PRACTICE WITH ME
            </h1>
            <ul className="list-disc list-inside text-lg text-neutral-700 space-y-1">
              <li>1:1 Private Lessons</li>
              <li>Group Classes</li>
              <li>Monthly Mentorship</li>
            </ul>
            <p className="text-lg">
              I teach saxophone lessons at my home studio in Wilmington, NC and
              over the internet via Zoom. These lessons are for you if you are:
            </p>
            <ul className="list-disc list-inside text-lg text-neutral-700 space-y-1">
              <li>
                <strong>Ready</strong> to jump right into ongoing, meaningful
                lessons.
              </li>
              <li>
                <strong>Curious</strong> about growing as a musician with
                reflection and support.
              </li>
              <li>
                <strong>Motivated</strong> to practice and see progress between
                sessions.
              </li>
              <li>
                <strong>Interested</strong> in building confidence and playing
                with others.
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <ChevronDown />
              <h2 className="text-3xl text-amber-400 text-shadow-black text-shadow-md">Schedule Lessons Below</h2>
              <ChevronDown />
            </div>
          </div>

          {/* Right image */}
          <div className="w-full flex justify-center overflow-hidden">
            <Image
              src="/JasonBW.jpeg"
              alt="Jason James Moore playing saxophone"
              className="rounded-lg shadow-lg object-cover max-w-sm w-full"
              width={903}
              height={1208}
            />
          </div>
        </div>

        {/* Accordion Component */}
        <div className="max-w-5xl mx-auto mt-16 border-t-2 border-b-2 border-neutral-300 py-6">
          <Collapsible className="group">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CollapsibleTrigger className="text-4xl cursor-pointer flex items-center gap-2 hover:text-amber-400 hover:text-shadow-black hover:text-shadow-md transition-colors duration-200">
                    <ChevronRight className="transition-transform duration-300 h-8 w-8 group-data-[state=open]:rotate-90" />
                    Common topics of study:
                  </CollapsibleTrigger>
                </TooltipTrigger>
                <TooltipContent>Click to explore topics!</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Collapsible Content goes here */}
            <CollapsibleContent className="mt-4">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Tone Production</strong> (embouchure, air speed, long
                  tones, etc.) - We chose saxophone lessons because we enjoy the
                  sounds the instrument can make. Practicing this one aspect of
                  playing alone will improve the whole experience!
                </li>
                <li>
                  How to Learn and Memorize Songs and their Chord progressions!
                </li>
                <li>Scale Studies - singing and playing</li>
                <li>Groove!</li>
                <li>Creating a relationship with Diatonic Harmony</li>
                <li>
                  Improvising and Playing over Drones for harmonic context
                </li>
                <li>
                  Experiencing first, then Explaining - Music Theory describes
                  sound
                </li>
                <li>Writing solo etudes over jazz standards</li>
                <li>Breathing Exercises</li>
                <li>Transcribing</li>
                <li>Developing personal vocabulary</li>
                <li>Classical Saxophone literature</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Scheduler Embed */}
        <div className="mt-20 tidycal-embed-wrapper max-w-5xl mx-auto">
          <iframe
            src="https://tidycal.com/moorejasonj"
            title="Schedule saxophone lessons"
            className="w-full h-[1000px] border-0"
            scrolling="no"
          />
        </div>
      </section>
    </>
  );
}
