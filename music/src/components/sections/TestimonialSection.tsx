// import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";


export function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Jason helped me unlock a tone and phrasing I didn’t think I was capable of. Every lesson is equal parts inspiring and practical.",
    },
    {
      name: "David L.",
      text: "I’ve worked with a lot of teachers, but Jason’s experience and clarity of communication really stand out. Highly recommended!",
    },
    {
      name: "Emily R.",
      text: "What I love most about working with Jason is how invested he is in your growth. He meets you where you are and makes the process fun.",
    },
  ];

  return (
    <div className="w-full max-w-md">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="text-left px-4">
              <blockquote className="text-base italic leading-relaxed mb-2 text-white">
                “{t.text}”
              </blockquote>
              <p className="text-white text-sm font-medium">— {t.name}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-start gap-2 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}