import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function EnquiryBand() {
  return (
    <section className="corp-enquiry">
      <div className="site-container corp-enquiry-inner">
        <div><span>Have an HVAC requirement?</span><h2>Let us plan the right next step.</h2></div>
        <p>Share your location, building type and operating need. Our team will respond with a practical path forward.</p>
        <Link className="button button-primary" href="/contact#request-a-quote">Send an enquiry <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
