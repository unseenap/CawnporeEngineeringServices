"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import services from "@/data/services.json";

type Status = "idle" | "opening" | "ready";

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const [status, setStatus] = useState<Status>("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry: ${form.get("service")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nPhone: ${form.get("phone")}\nEmail: ${form.get("email")}\nCompany: ${form.get("company")}\nCity / State: ${form.get("location")}\nBuilding / project type: ${form.get("projectType")}\nProject stage: ${form.get("stage")}\nPreferred timeline: ${form.get("timeline")}\nService: ${form.get("service")}\n\nRequirement:\n${form.get("message")}`
    );
    setStatus("opening");
    window.location.href = `mailto:aditya@ceservices.co.in?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("ready"), 500);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          <span>Full name</span>
          <input name="name" minLength={2} maxLength={80} required autoComplete="name" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" required autoComplete="tel" inputMode="tel" />
        </label>
      </div>
      <div className="field-row">
        <label>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" />
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
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>I agree that CES may use these details to respond to my enquiry.</span>
      </label>
      <button className="button button-primary" type="submit" disabled={status === "opening"}>
        {status === "opening" ? "Opening email" : "Prepare quote request"} <ArrowRight size={18} />
      </button>
      <p className="form-note" aria-live="polite">
        {status === "ready"
          ? "Your email application should now contain the prepared enquiry. Review it and press Send."
          : "Submitting prepares an email in your email application. No details are stored by this website."}
      </p>
    </form>
  );
}
