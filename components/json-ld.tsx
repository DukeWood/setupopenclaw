const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://innovatorly.ai/#organization",
      name: "Innovatorly Ltd",
      url: "https://innovatorly.ai",
      subOrganization: {
        "@type": "Organization",
        "@id": "https://setupopenclaw.pro/#brand",
        name: "SetupOpenClaw",
        url: "https://setupopenclaw.pro",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://setupopenclaw.pro/#website",
      name: "SetupOpenClaw",
      url: "https://setupopenclaw.pro",
      publisher: {
        "@id": "https://innovatorly.ai/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://setupopenclaw.pro/#service",
      name: "SetupOpenClaw",
      description:
        "Managed OpenClaw AI assistant deployment for UK teams. We handle installation, security hardening, integration configuration, and ongoing support so your team can focus on work.",
      serviceType: "AI Assistant Deployment",
      provider: {
        "@id": "https://innovatorly.ai/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      audience: {
        "@type": "BusinessAudience",
        name: "UK businesses with 4-50 employees",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 4,
          maxValue: 50,
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SetupOpenClaw Service Tiers",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Hosted Setup",
            description:
              "Cloud-hosted OpenClaw deployment on a VPS. Fully remote setup.",
            price: "770",
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Mac Mini Remote",
            description:
              "OpenClaw deployed on your Mac Mini, configured remotely.",
            price: "1100",
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Mac Mini In-Person",
            description:
              "OpenClaw deployed on your Mac Mini with in-person setup in Leeds & West Yorkshire.",
            price: "2200",
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://setupopenclaw.pro/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is OpenClaw?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OpenClaw is an open-source AI executive assistant that connects to your tools (email, calendar, Slack, etc.) and automates workflows. It's built for teams who want AI that actually does work, not just answers questions.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need technical knowledge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not at all. That's the whole point of SetupOpenClaw \u2014 we handle every technical detail. You just tell us what you want your AI assistant to do.",
          },
        },
        {
          "@type": "Question",
          name: "Can you set this up remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our Hosted Setup and Mac Mini Remote tiers are fully remote. We can deploy for teams anywhere in the UK (and worldwide). Only the Mac Mini In-Person tier requires Leeds & West Yorkshire proximity.",
          },
        },
        {
          "@type": "Question",
          name: "Is this related to the OpenAI acquisition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. OpenClaw is an independent open-source project. It uses various AI models and is not owned by or affiliated with OpenAI.",
          },
        },
        {
          "@type": "Question",
          name: "Can I set up OpenClaw myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely \u2014 it's open source. But most teams find that security hardening, integration configuration, and ongoing maintenance take significantly more time than expected. We do it in hours with enterprise-grade security.",
          },
        },
        {
          "@type": "Question",
          name: "What if something goes wrong?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During the 14-day hypercare period, we actively monitor and fix any issues. After that, we offer support packages. Plus, every installation includes audit trails and monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "What infrastructure do I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Hosted Setup: nothing \u2014 we deploy to a cloud VPS (~\u00a35-10/mo). For Mac Mini tiers: a Mac Mini (~\u00a3500). We handle all software configuration.",
          },
        },
        {
          "@type": "Question",
          name: "Can I have multiple agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Each additional agent is \u00a3350. Teams often run separate agents for different departments or workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Is my data secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We use Docker sandboxing, Composio middleware, OAuth token management, audit trails, and read-only defaults. Your data stays on your infrastructure \u2014 we never store it.",
          },
        },
        {
          "@type": "Question",
          name: "What about ongoing maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OpenClaw requires minimal maintenance after setup. We provide documentation for common tasks. For hands-off operation, ask about our maintenance packages.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://setupopenclaw.pro/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://setupopenclaw.pro",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SetupOpenClaw",
        },
      ],
    },
  ],
};

const jsonLdString = JSON.stringify(structuredData);

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Safe: jsonLdString is a hardcoded static constant, not user input
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
}
