type SectionProps = {
  id?: string; // Optional for anchor linking
};

export default function Section1({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative w-full px-6 py-24 md:py-32 bg-background text-foreground"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Section 1 Title</h2>
        <p className="text-lg text-muted-foreground">
          This is a placeholder for Section 1 content. You can customize this with
          images, text, CTAs, etc.
        </p>
      </div>
    </section>
  );
}
