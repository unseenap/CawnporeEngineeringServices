import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Cawnpore Engineering Services handles website analytics and information submitted through its enquiry form.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: <><p>CES collects information you choose to submit through the enquiry form, including your name, phone number, email address, organization, location, project type, project stage, service interest, preferred timeline and project description.</p><p>We may also receive basic technical and usage information such as pages viewed, approximate location, device type, browser type, referral source and interactions with phone, email or WhatsApp links.</p></>,
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    content: <><p>Submitted information is used to understand your requirement, respond to your enquiry, prepare a relevant technical or commercial conversation and maintain necessary business records.</p><p>Aggregated website-usage information helps us understand which pages are useful and improve website performance, navigation and content.</p></>,
  },
  {
    id: "service-providers",
    title: "Service providers",
    content: <><p>The website is hosted through Vercel. Enquiry submissions are processed through Formspree, and website usage is measured with Google Analytics 4. These providers may process limited information according to their own privacy terms and security practices.</p><p>CES does not intentionally send enquiry names, phone numbers, email addresses or message contents to Google Analytics.</p></>,
  },
  {
    id: "cookies-and-analytics",
    title: "Cookies and analytics",
    content: <p>Google Analytics may use cookies or similar technologies to distinguish visits and prepare aggregated usage reports. Browser settings, privacy tools or content blockers may allow you to limit these technologies. Essential website functions should remain available if analytics is blocked.</p>,
  },
  {
    id: "sharing-and-retention",
    title: "Sharing and retention",
    content: <><p>CES does not sell personal information. Information may be shared with service providers that support website hosting, form delivery or analytics, or when disclosure is required by law.</p><p>Enquiry information is retained only for as long as reasonably needed to respond, manage a potential or active business relationship, maintain records and meet legal obligations.</p></>,
  },
  {
    id: "your-choices",
    title: "Your choices",
    content: <p>You may ask CES to review, correct or delete information you previously submitted, subject to applicable recordkeeping and legal requirements. Send a request to <a href={`mailto:${site.email}`}>{site.email}</a>. We may need to confirm enough information to identify the relevant record.</p>,
  },
  {
    id: "security-and-updates",
    title: "Security and policy updates",
    content: <><p>CES uses reasonable organizational and technical measures intended to protect submitted information. No internet transmission or storage method can be guaranteed completely secure.</p><p>This policy may be updated when website services, providers or legal requirements change. The effective date on this page will be revised when a material update is published.</p></>,
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy policy" summary="How CES handles website analytics and the information you choose to submit." effectiveDate="28 August 2026" sections={sections} />;
}
