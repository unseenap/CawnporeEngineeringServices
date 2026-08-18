import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function EnquiryBand() {
  return (
    <section className="corp-enquiry">
      <div className="site-container corp-enquiry-inner">
        <div><span>Request a quote</span><h2>Tell us what the building needs.</h2></div>
        <p>Share your location, building type and operating requirement through the complete project form.</p>
        <Link className="button button-primary" href="/contact#request-a-quote">Request a quote <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
