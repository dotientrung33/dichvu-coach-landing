"use client";

import { PointerEvent, useEffect, useMemo, useState } from "react";
import { coachingContent } from "@/data/coachingContent";
import { testimonials } from "@/data/testimonials";

function getInitials(name: string) {
  return name
    .replace(/^(Anh|Chị)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function Avatar({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-[#06122B] text-xl font-bold text-gold-400 shadow-[0_14px_32px_rgba(0,0,0,0.28)] sm:h-28 sm:w-28">
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-24 w-24 shrink-0 rounded-full border-[5px] border-white object-cover shadow-[0_14px_32px_rgba(0,0,0,0.28)] sm:h-28 sm:w-28"
    />
  );
}

export default function TestimonialsSection() {
  const { testimonials: content } = coachingContent;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);

  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth < 768) {
        setPerPage(1);
      } else if (window.innerWidth < 1024) {
        setPerPage(2);
      } else {
        setPerPage(3);
      }
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  useEffect(() => {
    if (isPaused || testimonials.length <= perPage) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, perPage]);

  const visibleTestimonials = useMemo(() => {
    if (testimonials.length <= perPage) {
      return testimonials;
    }

    return Array.from({ length: perPage }, (_, offset) => {
      return testimonials[(currentIndex + offset) % testimonials.length];
    });
  }, [currentIndex, perPage]);

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart === null || testimonials.length <= perPage) {
      setDragStart(null);
      return;
    }

    const delta = dragStart - event.clientX;

    if (Math.abs(delta) > 42) {
      setCurrentIndex((index) => {
        if (delta > 0) {
          return (index + 1) % testimonials.length;
        }

        return (index - 1 + testimonials.length) % testimonials.length;
      });
    }

    setDragStart(null);
  };

  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <section
      className="relative overflow-hidden bg-[#020817] py-12 text-white sm:py-16 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,163,255,0.08) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(0,163,255,0.16), transparent 30%), radial-gradient(circle at 10% 80%, rgba(0,75,180,0.18), transparent 34%), linear-gradient(135deg, #04122C 0%, #061A45 45%, #020817 100%)",
        backgroundSize: "56px 56px, 56px 56px, auto, auto, auto",
      }}
    >
      <div className="section-shell relative">
        <div className="mb-9 w-full text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-tight text-white sm:text-[40px] lg:text-[42px]">
            {content.title}
          </h2>
          <p className="mt-4 w-full text-[17px] leading-8 text-white/86 sm:text-[18px]">
            {content.description}
          </p>
        </div>

        <div
          className="grid min-h-[400px] touch-pan-y gap-5 pt-8 transition-all duration-[600ms] ease-out md:min-h-[420px] md:gap-7 lg:min-h-[440px] lg:gap-8"
          style={{ gridTemplateColumns: `repeat(${visibleTestimonials.length}, minmax(0, 1fr))` }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setDragStart(null);
          }}
          onPointerDown={(event) => setDragStart(event.clientX)}
          onPointerUp={handlePointerEnd}
          onPointerCancel={() => setDragStart(null)}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={`relative rounded-[30px] border border-white/35 bg-white px-6 pb-7 pt-20 text-[#06122B] shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:px-7 sm:pb-8 sm:pt-[88px] ${
                index === 1 ? "lg:mt-8" : ""
              }`}
            >
              <div className="absolute -top-10 left-7 sm:-top-12 sm:left-8">
                <Avatar name={testimonial.name} src={testimonial.avatar} />
              </div>

              <div className="absolute right-7 top-5 text-[64px] font-serif leading-none text-gold-500/85 sm:right-8 sm:top-7">
                &rdquo;
              </div>

              <div className="pr-10">
                <h3 className="text-xl font-bold leading-tight text-[#06122B]">
                  {testimonial.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#405170]">
                  {testimonial.role}
                </p>
                <p className="mt-3 inline-flex rounded-full bg-[#003B9A]/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#003B9A]">
                  {testimonial.tag}
                </p>
              </div>

              <div
                aria-label={content.ratingLabel}
                className="mt-4 flex gap-1 text-[17px] text-gold-500"
              >
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>

              <p className="mt-5 text-[16px] leading-7 text-[#1F2D46] sm:text-[17px]">
                {testimonial.feeling}
              </p>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2.5">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`${content.title} ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300 ${
                index === currentIndex ? "w-9 bg-gold-400" : "w-3 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
