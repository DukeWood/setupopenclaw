import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { BuiltFor } from "@/components/built-for";
import { AlwaysOn } from "@/components/always-on";
import { WhatIsAgent } from "@/components/what-is-agent";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { WhyHireUs } from "@/components/why-hire-us";
import { Security } from "@/components/security";
import { Pricing } from "@/components/pricing";
import { Guarantees } from "@/components/guarantees";
import { AfterPurchase } from "@/components/after-purchase";
import { FAQ } from "@/components/faq";
import { Cities } from "@/components/cities";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Integrations />
      <BuiltFor />
      <AlwaysOn />
      <WhatIsAgent />
      <HowItWorks />
      <Testimonials />
      <WhyHireUs />
      <Security />
      <Pricing />
      <Guarantees />
      <AfterPurchase />
      <FAQ />
      <Cities />
      <Footer />
    </main>
  );
}
