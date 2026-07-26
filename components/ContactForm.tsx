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
      `Name: ${form.get("name")}\nPhone: ${form.get("phone")}\nEmail: ${form.get("email")}\nCompany: ${form.get("company")}\nCity / State: ${form.get("location")}\nService: ${form.get("service")}\n\nRequirement:\n${form.get("message")}`
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
      <label>
        <span>Service interest</span>
        <select name="service" required defaultValue={requestedService}>
          <option value="">Select a service</option>
          {services.map((service) => <option value={service.id} key={service.id}>{service.title}</option>)}
          <option value="general">General enquiry</option>
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
        {status === "opening" ? "Opening email" : "Prepare enquiry"} <ArrowRight size={18} />
      </button>
      <p className="form-note" aria-live="polite">
        {status === "ready"
          ? "Your email application should now contain the prepared enquiry. Review it and press Send."
          : "Submitting prepares an email in your email application. No details are stored by this website."}
      </p>
    </form>
  );
}
