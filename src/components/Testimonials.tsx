"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn } from "./FadeIn";

const fakeTestimonials = [
  {
    quote: "The team at Faull's is always so helpful and knowledgeable. They make getting my monthly medication a breeze. The delivery service is a lifesaver!",
    name: "Aisha B.",
    location: "Parow North",
  },
  {
    quote: "I uploaded my script online and it was ready for collection in no time. Fantastic service and very friendly staff. Highly recommended!",
    name: "Michael V.",
    location: "Glenlily",
  },
  {
    quote: "As an elderly resident, their curbside pickup is incredibly convenient and safe. I appreciate the care they take with every order.",
    name: "Mrs. Peterson",
    location: "Oostersee",
  },
   {
    quote: "The pharmacist took the time to explain my new medication thoroughly. You don't get that kind of personal service just anywhere.",
    name: "David L.",
    location: "Clamhall",
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our (Demo) Customers Say
          </h2>
        </FadeIn>
        <FadeIn>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {fakeTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex-grow flex flex-col justify-center p-6">
                        {/* THIS IS THE CORRECTED LINE: */}
                        <blockquote className="text-muted-foreground italic mb-4">
                          {testimonial.quote}
                        </blockquote>
                        <p className="font-bold text-right mt-auto">- {testimonial.name}</p>
                        <p className="text-sm text-muted-foreground text-right">{testimonial.location}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
