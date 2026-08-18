"use client";

import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import services from "@/data/services.json";

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const [state, handleSubmit] = useForm("xrpzogob");

  if (state.succeeded) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle size={34} weight="fill" />
        <div>
          <strong>Thank you. Your enquiry has been sent.</strong>
          <p>Our team will review the project information and contact you using the details provided.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          <span>Full name</span>
          <input name="name" minLength={2} maxLength={80} required autoComplete="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" required autoComplete="tel" inputMode="tel" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </label>
      </div>
      <div className="field-row">
        <label>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label>
          <span>Company or organization</span>
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <label>
        <span>City and state</span>
        <input name="location" required autoComplete="address-level2" />
      </label>
      <div className="field-row">
        <label>
          <span>Building or project type</span>
          <input name="projectType" required placeholder="Hospital, factory, office..." />
        </label>
        <label>
          <span>Current project stage</span>
          <select name="stage" required defaultValue="">
            <option value="">Select a stage</option>
            <option value="planning">Planning / concept</option>
            <option value="design">Design development</option>
            <option value="tender">Tender / procurement</option>
            <option value="execution">Execution / installation</option>
            <option value="operational">Operating building</option>
          </select>
        </label>
      </div>
      <label>
        <span>Service interest</span>
        <select name="service" required defaultValue={requestedService}>
          <option value="">Select a service</option>
          {services.map((service) => <option value={service.id} key={service.id}>{service.title}</option>)}
          <option value="general">General enquiry</option>
        </select>
      </label>
      <label>
        <span>Preferred timeline</span>
        <select name="timeline" required defaultValue="">
          <option value="">Select a timeline</option>
          <option value="urgent">Urgent operating issue</option>
          <option value="1-month">Within one month</option>
          <option value="1-3-months">One to three months</option>
          <option value="3-plus-months">More than three months</option>
          <option value="exploring">Exploring options</option>
        </select>
      </label>
      <label>
        <span>Tell us about the requirement</span>
        <textarea name="message" minLength={20} maxLength={2000} required rows={6} />
        <ValidationError prefix="Requirement" field="message" errors={state.errors} />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>I agree that CES may use these details to respond to my enquiry.</span>
      </label>
      <ValidationError prefix="Submission" errors={state.errors} />
      <button className="button button-primary" type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending enquiry" : "Send enquiry"} <ArrowRight size={18} />
      </button>
      <p className="form-note" aria-live="polite">
        Your details are submitted securely through Formspree and used only to respond to this enquiry.
      </p>
    </form>
  );
}
