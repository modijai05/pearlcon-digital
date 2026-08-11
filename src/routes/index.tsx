import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Clients } from "@/components/site/Clients";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { FloatingContact } from "@/components/site/FloatingContact";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { MediaCoverage, SocialPresence } from "@/components/site/MediaAndSocial";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Atmosphere, ScrollProgress, SectionSeam } from "@/components/site/primitives";
import { CONTACT, FAQS } from "@/lib/site-data";

const TITLE = "PEARLCON DIGITAL — PR & Digital Growth Agency, Jaipur";
const DESCRIPTION =
  "Reputation. Visibility. Growth. PEARLCON DIGITAL is a 360° PR and digital marketing agency in Jaipur delivering nationwide media coverage, social media, content and paid campaigns.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "PEARLCON DIGITAL",
          slogan: "Reputation. Visibility. Growth.",
          description: DESCRIPTION,
          telephone: CONTACT.phoneDisplay,
          email: CONTACT.emailDisplay,
          areaServed: "IN",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Atmosphere />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SectionSeam />
        <Process />
        <Clients />
        <Work />
        <SectionSeam flip />
        <MediaCoverage />
        <SocialPresence />
        <CaseStudy />
        <SectionSeam />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
