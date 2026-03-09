import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SetupOpenClaw",
  description: "Managed OpenClaw AI assistant deployment for UK teams",
  provider: {
    "@type": "Organization",
    name: "Innovatorly Ltd",
    url: "https://innovatorly.ai",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Hosted Setup",
      price: "770",
      priceCurrency: "GBP",
    },
    {
      "@type": "Offer",
      name: "Mac Mini Remote",
      price: "1100",
      priceCurrency: "GBP",
    },
    {
      "@type": "Offer",
      name: "Mac Mini In-Person",
      price: "2200",
      priceCurrency: "GBP",
    },
  ],
};

export function JsonLd() {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(structuredData)}
    </Script>
  );
}
