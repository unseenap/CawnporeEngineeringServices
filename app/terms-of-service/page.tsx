import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Website Terms of Service",
  description: "Terms governing the use of the Cawnpore Engineering Services website and its informational content.",
  alternates: { canonical: "/terms-of-service" },
};

const sections = [
  {
    id: "website-purpose",
    title: "Website purpose",
    content: <p>This website provides general information about Cawnpore Engineering Services, its capabilities, industries, completed-work evidence and ways to request a conversation. Using the website means you accept these website terms.</p>,
  },
  {
    id: "technical-information",
    title: "Technical information",
    content: <><p>Website content is provided for general awareness and initial project discussion. It is not a substitute for a site survey, engineering calculation, approved drawing, equipment selection, statutory review or project-specific professional advice.</p><p>HVAC requirements depend on building use, occupancy, climate, loads, operating conditions, applicable standards and site constraints. Do not rely on general website content as a final design or safety instruction.</p></>,
  },
  {
    id: "quotes-and-engagements",
    title: "Enquiries, quotes and engagements",
    content: <p>Submitting an enquiry does not create a contract, professional appointment or obligation to provide services. Any scope, price, schedule, warranty or performance commitment applies only when recorded in a separate written proposal or agreement accepted by the relevant parties.</p>,
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: <p>You must not misuse the website, attempt unauthorized access, disrupt its operation, submit unlawful or misleading material, impersonate another person, introduce malicious code or use automated methods that place an unreasonable load on the service.</p>,
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: <p>Unless otherwise stated, the website design, CES branding, original text and CES-owned project media are protected by applicable intellectual-property rights. You may view and share normal page links, but you may not republish or commercially reuse protected material without permission.</p>,
  },
  {
    id: "third-party-services",
    title: "Third-party services and links",
    content: <p>The website may use or link to services operated by other organizations, including Vercel, Formspree, Google Analytics, WhatsApp and social platforms. CES does not control every third-party service and is not responsible for its independent availability, content or privacy practices.</p>,
  },
  {
    id: "availability-and-liability",
    title: "Availability and liability",
    content: <><p>CES aims to keep website information accurate and available but does not promise uninterrupted access or that every item will always be complete, current or error-free.</p><p>To the extent permitted by applicable law, CES is not responsible for indirect loss arising solely from reliance on general website information or temporary website unavailability. Nothing in these terms excludes responsibility that cannot legally be excluded.</p></>,
  },
  {
    id: "changes-and-law",
    title: "Changes and applicable law",
    content: <p>CES may update the website and these terms when services, content or requirements change. These terms are governed by the laws applicable in India, subject to any rights or jurisdiction that applicable law requires.</p>,
  },
];

export default function TermsOfServicePage() {
  return <LegalPage title="Website terms" summary="The conditions that apply when you use CES website information and enquiry services." effectiveDate="28 August 2026" sections={sections} />;
}
