type SectionProps = {
  id?: string; // Optional for anchor linking
};

export default function BioSection({ id }: SectionProps) {
  return (
    <section id={id} className="py-20 px-6 md:px-12 bg-gradient-to-b from-orange-100 via-rose-50 to-orange-50 text-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Hi, I’m Jason.</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          I’m a saxophonist, composer, and educator based in Wilmington, NC. With over 30 years of playing experience and nearly 20 years of teaching, I help students of all levels find joy and purpose in their music practice.
        </p>
      </div>
    </section>
  );
}

      