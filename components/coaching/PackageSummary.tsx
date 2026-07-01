"use client";

import { useMemo, useState } from "react";
import { coachingContent } from "@/data/coachingContent";
import { coachingPackages } from "@/data/coachingPackages";

function DetailList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="mt-4 grid gap-2.5 text-[15px] leading-7 text-[#EAF2FF] sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PackageSummary() {
  const { packages } = coachingContent;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const visiblePackages = useMemo(
    () => coachingPackages.filter((pkg) => pkg.isPublic && pkg.showOnLanding),
    [],
  );

  return (
    <section id="goi-coach" className="dark-section py-14 text-white sm:py-[72px] lg:py-[92px]">
      <div className="section-shell">
        <div className="mb-8 w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">
            {packages.eyebrow}
          </p>
          <h2 className="mt-4 text-[28px] font-semibold leading-tight text-white sm:text-[38px]">
            {packages.title}
          </h2>
          <p className="mt-4 w-full text-[18px] font-semibold leading-8 text-gold-300/90 sm:text-[19px]">
            {packages.subheading}
          </p>
          <p className="mt-4 w-full text-[18px] leading-8 text-[#EAF2FF] sm:text-[19px]">
            {packages.description}
          </p>
        </div>

        <div className="space-y-6 lg:space-y-7">
          {visiblePackages.map((pkg) => {
            const isExpanded = expandedId === pkg.id;

            return (
              <article
                key={pkg.id}
                className={`electric-card rounded-[24px] p-5 sm:p-6 lg:p-7 ${
                  pkg.accent
                    ? "border-gold-400/40"
                    : ""
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_250px] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300/85">
                        {pkg.groupLabel}
                      </p>
                      {pkg.badge ? (
                        <span className="rounded-full border border-gold-300/25 bg-gold-300/10 px-3 py-1 text-xs font-semibold text-gold-300">
                          {pkg.badge}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 text-[22px] font-semibold leading-tight text-white sm:text-[26px]">
                      {pkg.name}
                    </h3>
                    <p className="mt-2 text-base font-semibold leading-7 text-gold-300">
                      {pkg.positioning}
                    </p>
                    <p className="mt-3 max-w-3xl text-[16px] leading-7 text-[#EAF2FF]">
                      {pkg.compactAudience}
                    </p>
                    <p className="mt-4 text-[15px] font-semibold leading-6 text-slate-100">
                      {pkg.compactMeta}
                    </p>
                  </div>

                  <div className="grid gap-3 lg:justify-items-end">
                    <p className="text-xl font-bold leading-tight text-white sm:text-[26px] lg:text-right">
                      {pkg.price}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row lg:w-full lg:flex-col">
                      <a
                        href="#dang-ky"
                        className="gold-button inline-flex justify-center rounded-full px-5 py-3 text-sm"
                      >
                        {pkg.cta}
                      </a>
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : pkg.id)}
                        className="outline-button inline-flex justify-center rounded-full px-5 py-3 text-sm font-bold"
                      >
                        {isExpanded ? packages.collapseToggle : packages.detailToggle}
                      </button>
                    </div>
                  </div>
                </div>

                {isExpanded ? (
                  <div className="mt-6 border-t border-[rgba(0,163,255,0.18)] pt-6">
                    <div className="grid gap-7 lg:grid-cols-2">
                      <div>
                        <h4 className="text-base font-semibold text-gold-300">
                          {pkg.detailAudienceTitle}
                        </h4>
                        {pkg.detailAudienceIntro ? (
                          <p className="mt-3 text-[15px] leading-7 text-[#EAF2FF]">
                            {pkg.detailAudienceIntro}
                          </p>
                        ) : null}
                        <DetailList items={pkg.fitItems} />
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-gold-300">
                          {pkg.includedTitle}
                        </h4>
                        <DetailList items={pkg.includedItems} />
                        {pkg.toolsItems ? (
                          <div className="mt-5">
                            <p className="text-sm font-semibold text-gold-300/90">
                              {pkg.toolsTitle}
                            </p>
                            {pkg.toolsIntro ? (
                              <p className="mt-2 text-[15px] leading-7 text-[#EAF2FF]">
                                {pkg.toolsIntro}
                              </p>
                            ) : null}
                            <DetailList items={pkg.toolsItems} />
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-gold-300">
                          {pkg.expectedResultTitle}
                        </h4>
                        <p className="mt-3 text-[15px] leading-7 text-[#EAF2FF]">
                          {pkg.expectedResult}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-gold-300">
                          {pkg.roleTitle ?? packages.labels.role}
                        </h4>
                        {pkg.role ? (
                          <div className="mt-3 space-y-3 text-[15px] leading-7 text-[#EAF2FF]">
                            {pkg.role.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        ) : null}
                        {pkg.costNote ? (
                          <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#EAF2FF]">
                            <p className="font-semibold text-gold-300/90">{pkg.costTitle}</p>
                            {pkg.costNote.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
