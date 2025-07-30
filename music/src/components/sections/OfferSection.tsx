import { Button } from "@/components/ui/button";
type SectionProps = {
  id?: string; // Optional for anchor linking
};

export default function OfferSection({ id }: SectionProps) {
  return (
    <section id={id} className="py-20 px-6 md:px-12 bg-gradient-to-b from-orange-50 via-rose-50 to-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Interested in Saxophone Lessons?</h3>
          <p className="text-md md:text-lg mb-6">
            Whether you’re just starting out or looking to go deeper, I’ll help tailor a practice path to your goals.
          </p>
          <Button asChild className="text-base font-medium">
            <a href="/lessons">Learn About Lessons</a>
          </Button>
        </div>
        <div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Want to Hear My Work?</h3>
          <p className="text-md md:text-lg mb-6">
            Explore my music and recent collaborations—from solo saxophone to full compositions.
          </p>
          <Button asChild className="text-base font-medium">
            <a href="/music">Listen to Music</a>
          </Button>
        </div>
      </div>
    </section>
    //   <section
    //     id={id}
    //     className="relative w-full px-6 py-24 md:py-32 bg-background text-foreground"
    //   >
    //     {/* Offer Grid */}
    // <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
    //   <div className="bg-card rounded-2xl shadow-md p-6">
    //     <h3 className="text-xl font-semibold mb-2">🎷 Private Lessons</h3>
    //     <p className="text-muted-foreground">
    //       Alto & tenor saxophone for all ages and levels
    //     </p>
    //   </div>
    //   <div className="bg-card rounded-2xl shadow-md p-6">
    //     <h3 className="text-xl font-semibold mb-2">🧠 Creative Coaching</h3>
    //     <p className="text-muted-foreground">
    //       Improvisation, theory, and musical mindset
    //     </p>
    //   </div>
    //   <div className="bg-card rounded-2xl shadow-md p-6">
    //     <h3 className="text-xl font-semibold mb-2">🌎 Remote & In-Person</h3>
    //     <p className="text-muted-foreground">
    //       Available locally in Wilmington or online worldwide
    //     </p>
    //   </div>
    // </div>
    // </section>
  );
}
