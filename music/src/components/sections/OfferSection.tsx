import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PiMusicNotesSimpleFill, PiChalkboardTeacherFill } from "react-icons/pi"; // Just examples, swap as needed


type SectionProps = {
  id?: string;
};

export default function OfferSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="py-20 px-6 [@media(min-width:795px)]:px-12 bg-gradient-to-b from-indigo-100 via-rose-100 to-white text-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl [@media(min-width:795px)]:text-5xl font-bold text-center mb-16">
          Ready to Take the Next Step?
        </h2>

        <div className="grid [@media(min-width:795px)]:grid-cols-2 divide-y [@media(min-width:795px)]:divide-y-0 [@media(min-width:795px)]:divide-x divide-neutral-300">
          <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-6">
            <PiChalkboardTeacherFill className="text-4xl text-orange-500" />
            <h3 className="text-2xl [@media(min-width:795px)]:text-3xl font-bold">
              Interested in Saxophone Lessons?
            </h3>
            <p className="text-md [@media(min-width:795px)]:text-lg text-muted-foreground">
              Whether you're just starting out or looking to go deeper, <br/>I'll help tailor a
              practice path to your goals.
            </p>
            <Button asChild className="text-lg font-medium">
              <Link href="/saxophone-lessons">Learn About Lessons</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-10 text-center space-y-6">
            <PiMusicNotesSimpleFill className="text-4xl text-rose-500" />
            <h3 className="text-2xl [@media(min-width:795px)]:text-3xl font-bold">
              Want to Hear My Work?
            </h3>
            <p className="text-md [@media(min-width:795px)]:text-lg text-muted-foreground">
              Explore my music and recent collaborations.<br/> This is the kind of fun I like to have.
            </p>
            <Button asChild className="text-lg font-medium">
              <Link href="/music">Listen to Music</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}