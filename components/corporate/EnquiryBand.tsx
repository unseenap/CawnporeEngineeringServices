import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";

export function EnquiryBand() {
  return (
    <section className="corp-enquiry">
      <div className="site-container corp-enquiry-form-layout">
        <div className="corp-enquiry-copy">
          <span>Request a quote</span>
          <h2>Tell us what the building needs.</h2>
          <p>Share the location, building use, required service, project stage and timeline. The details are sent directly to our team through Formspree.</p>
        </div>
        <div className="corp-enquiry-form-panel">
          <h3>Project information</h3>
          <p>Complete the form for a technical and commercial follow-up.</p>
          <Suspense fallback={<div className="contact-form" aria-label="Loading quote form" />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
