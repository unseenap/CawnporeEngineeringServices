"use client";

import Image from "next/image";

export type BrandScrollerItem = {
  client: string;
  sector: string;
  image: string;
};

type BrandScrollerProps = {
  brands: BrandScrollerItem[];
  reverse?: boolean;
  duration?: number;
};

export function BrandScroller({ brands, reverse = false, duration = 46 }: BrandScrollerProps) {
  return (
    <div
      className="ces-brand-scroller group"
      style={{ "--brand-duration": `${duration}s` } as React.CSSProperties}
      aria-label="CES project clients"
    >
      <div className={`ces-brand-track${reverse ? " is-reverse" : ""}`}>
        {[0, 1].map((group) => (
          <div className="ces-brand-group" aria-hidden={group === 1} key={group}>
            {brands.map((brand) => (
              <article className="ces-brand-item" key={`${group}-${brand.client}`}>
                <div><Image src={brand.image} alt={group === 0 ? `${brand.client} official logo` : ""} fill unoptimized sizes="176px" /></div>
                <span>{brand.client}</span>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandScrollerReverse(props: Omit<BrandScrollerProps, "reverse">) {
  return <BrandScroller {...props} reverse />;
}
