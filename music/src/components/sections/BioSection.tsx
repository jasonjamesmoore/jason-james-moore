type SectionProps = {
  id?: string; // Optional for anchor linking
};

export default function BioSection({ id }: SectionProps) {
  return (
    <section id={id} className="py-20 px-6 md:px-12 text-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Hi, I’m Jason.</h2>
        <h4 className="text-2xl md:text-3xl mb-6">I’m a saxophonist, composer, and educator based in Wilmington, NC.</h4>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          With over 30 years of playing experience and more than two decades of teaching, <br/>I help students of all levels find joy and purpose in their music practice.
        </p>
      </div>
    </section>
  );
}

      