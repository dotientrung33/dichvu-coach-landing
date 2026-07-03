"use client";

import { useEffect, useState } from "react";
import { coachingContent } from "@/data/coachingContent";
import { communityGallery } from "@/data/communityGallery";
import { coachingPartners } from "@/data/coachingPartners";
import ImageWithFallback from "./ImageWithFallback";
import TestimonialsSection from "./TestimonialsSection";

const AUTOPLAY_MS = 4000;

function getVisibleItems<T>(items: T[], startIndex: number, visibleCount: number) {
  if (items.length === 0) {
    return [];
  }

  const count = Math.min(items.length, Math.max(1, visibleCount));

  return Array.from({ length: count }, (_, offset) => {
    return items[(startIndex + offset) % items.length];
  });
}

function useResponsiveItemsPerSlide(config: {
  mobile: number;
  tablet: number;
  desktop: number;
}) {
  const [itemsPerSlide, setItemsPerSlide] = useState(config.mobile);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(config.desktop);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(config.tablet);
      } else {
        setItemsPerSlide(config.mobile);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, [config.desktop, config.mobile, config.tablet]);

  return itemsPerSlide;
}

function useSlidingIndex(itemCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex((index) => {
      if (itemCount === 0) {
        return 0;
      }

      return index % itemCount;
    });
  }, [itemCount]);

  useEffect(() => {
    if (itemCount <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % itemCount);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(interval);
  }, [itemCount]);

  const goToPrevious = () => {
    if (itemCount <= 1) {
      return;
    }

    setCurrentIndex((index) => (index - 1 + itemCount) % itemCount);
  };

  const goToNext = () => {
    if (itemCount <= 1) {
      return;
    }

    setCurrentIndex((index) => (index + 1) % itemCount);
  };

  const selectIndex = (index: number) => {
    if (itemCount === 0) {
      return;
    }

    setCurrentIndex(index % itemCount);
  };

  return {
    currentIndex,
    goToPrevious,
    goToNext,
    selectIndex,
  };
}

function SliderControls({
  label,
  currentIndex,
  itemCount,
  onPrevious,
  onNext,
  onSelect,
}: {
  label: string;
  currentIndex: number;
  itemCount: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  if (itemCount <= 1) {
    return null;
  }

  return (
    <div className="mt-5 flex items-center justify-between gap-4">
      <div className="flex gap-2">
        <button
          type="button"
          aria-label={`${label} trước`}
          onClick={onPrevious}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/30 bg-[#071B3F]/75 text-lg font-semibold text-gold-300 hover:border-gold-300/60 hover:bg-gold-300/10"
        >
          {"<"}
        </button>
        <button
          type="button"
          aria-label={`${label} sau`}
          onClick={onNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/30 bg-[#071B3F]/75 text-lg font-semibold text-gold-300 hover:border-gold-300/60 hover:bg-gold-300/10"
        >
          {">"}
        </button>
      </div>

      <div className="flex gap-2">
        {Array.from({ length: itemCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${label} ${index + 1}`}
            onClick={() => onSelect(index)}
            className={`h-2.5 rounded-full transition duration-200 ${
              index === currentIndex
                ? "w-8 bg-gold-400"
                : "w-2.5 bg-white/35 hover:bg-white/65"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CommunityGallerySection() {
  const { community } = coachingContent;
  const galleryItemsPerSlide = useResponsiveItemsPerSlide({
    mobile: 1,
    tablet: 2,
    desktop: 3,
  });
  const partnerItemsPerSlide = useResponsiveItemsPerSlide({
    mobile: 2,
    tablet: 3,
    desktop: 5,
  });

  const gallerySlider = useSlidingIndex(communityGallery.length);
  const partnerSlider = useSlidingIndex(coachingPartners.length);
  const activeGalleryItems = getVisibleItems(
    communityGallery,
    gallerySlider.currentIndex,
    galleryItemsPerSlide,
  );
  const activePartnerItems = getVisibleItems(
    coachingPartners,
    partnerSlider.currentIndex,
    partnerItemsPerSlide,
  );

  return (
    <section
      className="py-12 text-white sm:py-16 lg:py-[76px]"
      style={{
        background:
          "radial-gradient(circle at 78% 18%, rgba(0,163,255,0.15), transparent 28%), linear-gradient(135deg, #04122C 0%, #072A63 45%, #04122C 100%)",
      }}
    >
      <div className="section-shell">
        <div className="mb-9 w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-400">
            {community.eyebrow}
          </p>
          <h2 className="mt-4 max-w-5xl text-[28px] font-semibold leading-tight text-white md:text-[32px] lg:text-[36px]">
            {community.title}
          </h2>
          <p className="mt-4 max-w-6xl text-[17px] leading-8 text-[#EAF2FF] sm:text-[18px]">
            {community.description}
          </p>
        </div>

        <div className="rounded-[28px] border border-[rgba(245,199,106,0.20)] bg-[#071B3F]/58 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-5 lg:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-[20px] font-semibold leading-7 text-white">
              {community.partnerTitle}
            </h3>
            <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-gold-300 sm:inline">
              {partnerSlider.currentIndex + 1} / {coachingPartners.length}
            </span>
          </div>

          <div
            className="grid gap-3 transition-all duration-500 ease-out sm:gap-4"
            style={{
              gridTemplateColumns: `repeat(${Math.max(activePartnerItems.length, 1)}, minmax(0, 1fr))`,
            }}
          >
            {activePartnerItems.map((partner, index) => (
              <div
                key={`${partner.logo}-${index}`}
                className="flex h-24 items-center justify-center rounded-[18px] border border-[#D7E0EF] bg-[#FFFDF7] p-4 shadow-[0_10px_26px_rgba(0,0,0,0.16)] sm:h-28"
              >
                <ImageWithFallback
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 w-full object-contain"
                  fallbackClassName="h-14 w-full"
                />
              </div>
            ))}
          </div>

          <SliderControls
            label={community.partnerTitle}
            currentIndex={partnerSlider.currentIndex}
            itemCount={coachingPartners.length}
            onPrevious={partnerSlider.goToPrevious}
            onNext={partnerSlider.goToNext}
            onSelect={partnerSlider.selectIndex}
          />
        </div>

        <div className="mt-10 lg:mt-16">
          <div className="mb-6">
            <h3 className="text-[22px] font-semibold leading-tight text-white md:text-[24px] lg:text-[28px]">
              {community.galleryTitle}
            </h3>
            <p className="mt-3 max-w-6xl text-[16px] leading-8 text-[#EAF2FF] sm:text-[17px]">
              {community.galleryDescription}
            </p>
          </div>

          <div
            className="grid gap-5 transition-all duration-500 ease-out lg:gap-7"
            style={{
              gridTemplateColumns: `repeat(${Math.max(activeGalleryItems.length, 1)}, minmax(0, 1fr))`,
            }}
          >
            {activeGalleryItems.map((image, index) => (
              <figure
                key={`${image.image}-${index}`}
                className="overflow-hidden rounded-[28px] border border-[rgba(245,199,106,0.18)] bg-[linear-gradient(180deg,#071B3F_0%,#04122C_100%)] shadow-[0_18px_46px_rgba(0,0,0,0.24)]"
              >
                <div className="aspect-[4/3] bg-[#061A45]">
                  <ImageWithFallback
                    src={image.image}
                    alt={image.caption}
                    className="h-full w-full object-cover"
                    fallbackClassName="h-full w-full"
                  />
                </div>
                <figcaption className="min-h-[78px] px-5 py-4 text-[15px] font-semibold leading-7 text-[#EAF2FF]">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <SliderControls
            label={community.galleryTitle}
            currentIndex={gallerySlider.currentIndex}
            itemCount={communityGallery.length}
            onPrevious={gallerySlider.goToPrevious}
            onNext={gallerySlider.goToNext}
            onSelect={gallerySlider.selectIndex}
          />
        </div>

        <TestimonialsSection variant="embedded" />
      </div>
    </section>
  );
}
