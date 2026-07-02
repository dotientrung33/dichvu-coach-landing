"use client";

import { useMemo, useState } from "react";
import { coachingContent } from "@/data/coachingContent";
import { coachingPackages, type CoachingPackage } from "@/data/coachingPackages";
import { contactInfo } from "@/data/contact";

const primaryPackageIds = [
  "goi-kham-pha",
  "goi-thau-hieu-chuyen-sau",
  "combo-gia-dinh-thau-hieu",
];

const bridgePackageIds = [
  "goi-dinh-huong-ve-lo-trinh",
  "goi-vung-vang-ben-bi-6-thang",
];

const vipPackageId = "goi-dong-hanh-vip-1-1";
const sessionPackageId = "phien-coaching-chuyen-sau";

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

function PackagePrice({ pkg }: { pkg: CoachingPackage }) {
  return (
    <div className="grid gap-1 lg:justify-items-end">
      {pkg.originalPrice ? (
        <p className="text-base font-semibold leading-tight text-[#AFC2E6] line-through lg:text-right">
          {pkg.originalPrice}
        </p>
      ) : null}
      <p className="text-xl font-bold leading-tight text-white sm:text-[26px] lg:text-right">
        {pkg.price}
      </p>
    </div>
  );
}

function PackageCard({
  pkg,
  expandedId,
  setExpandedId,
}: {
  pkg: CoachingPackage;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}) {
  const { packages } = coachingContent;
  const isExpanded = expandedId === pkg.id;

  return (
    <article
      className={`electric-card rounded-[24px] p-5 sm:p-6 lg:p-7 ${
        pkg.accent ? "border-gold-400/40" : ""
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
          <PackagePrice pkg={pkg} />
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

            <div className="lg:col-span-2">
              <h4 className="text-base font-semibold text-gold-300">
                {pkg.expectedResultTitle}
              </h4>
              <p className="mt-3 text-[15px] leading-7 text-[#EAF2FF]">
                {pkg.expectedResult}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function VipCard({
  pkg,
  expandedId,
  setExpandedId,
}: {
  pkg: CoachingPackage;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}) {
  const { packages } = coachingContent;
  const isExpanded = expandedId === pkg.id;

  return (
    <article className="electric-card rounded-[24px] border-gold-400/30 p-5 sm:p-6 lg:p-7">
      <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300/85">
            {pkg.groupLabel}
          </p>
          <h3 className="mt-3 text-[22px] font-semibold leading-tight text-white sm:text-[26px]">
            {pkg.name}
          </h3>
          <p className="mt-3 text-[16px] leading-7 text-[#EAF2FF]">
            {pkg.compactAudience}
          </p>
          <p className="mt-4 text-[15px] font-semibold leading-6 text-gold-300/90">
            {pkg.compactMeta}
          </p>
        </div>

        <div className="grid gap-3 lg:justify-items-end">
          <p className="text-xl font-bold leading-tight text-white sm:text-[26px] lg:text-right">
            {pkg.price}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:w-full lg:flex-col">
            <a
              href={contactInfo.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button inline-flex justify-center rounded-full px-5 py-3 text-sm"
            >
              Trao đổi qua Zalo
            </a>
            <a
              href={contactInfo.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button inline-flex justify-center rounded-full px-5 py-3 text-sm font-bold"
            >
              Nhắn Messenger
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
        {pkg.detailAudienceIntro ? (
          <p className="max-w-4xl text-[15px] leading-7 text-[#EAF2FF]">
            {pkg.detailAudienceIntro}
          </p>
        ) : null}
        <div className="mt-5 grid gap-7 lg:grid-cols-2">
          <div>
            <h4 className="text-base font-semibold text-gold-300">
              {pkg.detailAudienceTitle}
            </h4>
            <DetailList items={pkg.fitItems} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-gold-300">
              {pkg.includedTitle}
            </h4>
            <DetailList items={pkg.includedItems} />
          </div>
        </div>
        {pkg.note ? (
          <p className="mt-6 rounded-2xl border border-gold-300/20 bg-[#071B3F]/60 px-4 py-4 text-[15px] font-semibold leading-7 text-[#EAF2FF]">
            {pkg.note}
          </p>
        ) : null}
        {pkg.expectedResult ? (
          <div className="mt-6 rounded-2xl border border-gold-300/20 bg-[#071B3F]/60 px-4 py-4">
            <h4 className="text-base font-semibold text-gold-300">
              {pkg.expectedResultTitle}
            </h4>
            <p className="mt-2 text-[15px] leading-7 text-[#EAF2FF]">
              {pkg.expectedResult}
            </p>
          </div>
        ) : null}
      </div>
      ) : null}
    </article>
  );
}

function SessionCard({
  pkg,
  expandedId,
  setExpandedId,
}: {
  pkg: CoachingPackage;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}) {
  const { packages } = coachingContent;
  const isExpanded = expandedId === pkg.id;

  return (
    <article className="electric-card rounded-[24px] p-5 sm:p-6 lg:p-7">
      <div className="grid gap-6 lg:grid-cols-[1fr_250px] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300/85">
            {pkg.groupLabel}
          </p>
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
          <PackagePrice pkg={pkg} />
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
            <DetailList items={pkg.fitItems} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-gold-300">
              {pkg.includedTitle}
            </h4>
            <DetailList items={pkg.includedItems} />
          </div>
        </div>
      </div>
      ) : null}
    </article>
  );
}

export default function PackageSummary() {
  const { packages } = coachingContent;
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const packageMap = useMemo(
    () => new Map(coachingPackages.map((pkg) => [pkg.id, pkg])),
    [],
  );

  const primaryPackages = primaryPackageIds
    .map((id) => packageMap.get(id))
    .filter((pkg): pkg is CoachingPackage => Boolean(pkg));

  const bridgePackages = bridgePackageIds
    .map((id) => packageMap.get(id))
    .filter((pkg): pkg is CoachingPackage => Boolean(pkg));

  const vipPackage = packageMap.get(vipPackageId);
  const sessionPackage = packageMap.get(sessionPackageId);

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
          {primaryPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          ))}

          <div className="rounded-[20px] border border-[rgba(0,163,255,0.18)] bg-[#071B3F]/55 px-4 py-4 transition duration-200 hover:border-gold-300/25 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:px-5">
            <div className="mb-4 max-w-3xl sm:mb-0">
              <h3 className="text-base font-semibold leading-6 text-white">
                {packages.moreHeading}
              </h3>
              <p className="mt-1.5 text-[15px] leading-7 text-[#EAF2FF]">
                {packages.moreIntro}
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-6 text-gold-300/80">
                {packages.moreNote}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowMoreOptions((current) => !current)}
              className="outline-button inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold sm:w-auto"
            >
              {showMoreOptions ? packages.lessToggle : packages.moreToggle}
            </button>
          </div>

          {showMoreOptions
            ? bridgePackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  expandedId={expandedId}
                  setExpandedId={setExpandedId}
                />
              ))
            : null}

          {vipPackage ? (
            <VipCard
              pkg={vipPackage}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          ) : null}

          {sessionPackage ? (
            <SessionCard
              pkg={sessionPackage}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
