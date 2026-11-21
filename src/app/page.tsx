import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { WhoCanJoin } from "@/components/home/WhoCanJoin";
import { DurationCert } from "@/components/home/DurationCert";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/common/JsonLd";
import { businessInfo } from "@/data/business";
import { faqsData } from "@/data/faqs";

export default function HomePage() {
  // Schema.org LocalBusiness / EducationalOrganization structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: businessInfo.legalName,
    alternateName: businessInfo.name,
    description:
      "Technical training institute in Vikhroli East, Mumbai specialising in CNC and VMC machine operating, manual programming, and CAD/CAM software.",
    url: "https://jayrishengineering.com",
    telephone: businessInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.address.line1}, ${businessInfo.address.line2}`,
      addressLocality: businessInfo.address.area,
      addressRegion: businessInfo.address.city,
      postalCode: businessInfo.address.pincode,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.lat,
      longitude: businessInfo.coordinates.lng
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "09:00",
        closes: "21:30"
      }
    ],
    sameAs: [businessInfo.googleBusinessProfileUrl]
  };

  // Schema.org FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <HeroSection />
      <IntroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <WhoCanJoin />
      <DurationCert />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
