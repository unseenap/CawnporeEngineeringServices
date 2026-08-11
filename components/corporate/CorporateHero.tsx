import Image from "next/image";

type Props = { label: string; title: string; description: string; image: string };

export function CorporateHero({ label, title, description, image }: Props) {
  return (
    <section className="corp-page-hero">
      <Image src={image} alt="" fill priority unoptimized sizes="100vw" />
      <div className="corp-page-hero-shade" />
      <div className="site-container corp-page-hero-copy">
        <span>{label}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
