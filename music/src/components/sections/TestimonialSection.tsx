// import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Scott B.",
      text: "There's no one out there with more enthusiasm for teaching than he has. Jason's greatest strength, perhaps, is his ability to find a way to make improvisation attainable.",
    },
    {
      name: "Alex D.",
      text: "Jason is an excellent teacher who knows how to explain things clearly and patiently. He takes the time to understand his student goals and needs, and then tailor his lessons accordingly.",
    },
    {
      name: "Max M.",
      text: "The language of music isn’t bound to instrument...the tools Jason has given me have helped me develop my own practices and even my own career.",
    },
    {
      name: "Pam M.",
      text: "I have been a student of Jason's for almost 5 years and have learned so much. He is thorough, patient, and inspiring.",
    },
    {
      name: "Don K.",
      text: "When I'm out jamming, what I learn in my lessons comes through in my performances and helps to make them shine. Whether you are a beginner (as I was on the sax in 2017) or an experienced student, if you want to learn, Jason will have your back.",
    },
  ];

  return (
   
    <section className="py-20 px-6 md:px-12 text-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          What Students Are Saying
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="text-left px-4">
                <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-2">
                  “{t.text}”
                </blockquote>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">— {t.name}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-start gap-2 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
