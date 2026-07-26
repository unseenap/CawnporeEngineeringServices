import Image from "next/image";
import Link from "next/link";
import navigation from "@/data/navigation.json";
import site from "@/data/site.json";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Image src={site.logo} alt="" width={72} height={72} unoptimized />
          <h2>Your climate.<br />Our commitment.</h2>
          <p>Professional HVAC engineering from Kanpur to operating environments across India.</p>
        </div>
        <div>
          <h3>Navigate</h3>
          {navigation.primary.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.headquarters}<br />{site.coverage} operations</p>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Cawnpore Engineering Services</span>
        <span>HVAC design, delivery and lifecycle service</span>
      </div>
    </footer>
  );
}
