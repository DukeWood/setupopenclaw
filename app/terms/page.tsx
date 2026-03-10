import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — SetupOpenClaw",
  description:
    "Terms of Service for SetupOpenClaw managed AI assistant deployment services by Innovatorly Ltd.",
  alternates: {
    canonical: "https://setupopenclaw.pro/terms",
  },
};

export default function TermsOfService() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-navy-600 dark:text-emerald-400 hover:underline mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-12">
          Last updated: 10 March 2026
        </p>

        {/* 1. Introduction */}
        <Section title="1. Introduction">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the
            SetupOpenClaw managed AI assistant deployment service
            (&quot;Service&quot;) provided by Innovatorly Ltd
            (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;), a company registered in England and Wales.
          </p>
          <p>
            SetupOpenClaw deploys and configures OpenClaw AI assistants for UK
            businesses. Our website is located at{" "}
            <a
              href="https://setupopenclaw.pro"
              className="text-navy-600 dark:text-emerald-400 hover:underline"
            >
              setupopenclaw.pro
            </a>
            .
          </p>
        </Section>

        {/* 2. Acceptance of Terms */}
        <Section title="2. Acceptance of Terms">
          <p>
            By booking a service, making a payment, or otherwise engaging with
            SetupOpenClaw, you (&quot;Client&quot;, &quot;you&quot;, or
            &quot;your&quot;) agree to be bound by these Terms. If you are
            entering into these Terms on behalf of a business or organisation,
            you represent that you have the authority to bind that entity to
            these Terms.
          </p>
          <p>
            If you do not agree to these Terms, please do not use our Service.
          </p>
        </Section>

        {/* 3. Service Description */}
        <Section title="3. Service Description">
          <p>
            SetupOpenClaw provides a one-time, managed deployment service for
            OpenClaw AI assistants. We set up, configure, secure, and integrate
            your AI assistant on your own infrastructure. This is not a
            subscription service — it is a one-time professional setup
            engagement.
          </p>
          <p>Our Service includes:</p>
          <ul>
            <li>
              Deployment of the OpenClaw AI assistant on client-owned
              infrastructure (VPS or Mac Mini)
            </li>
            <li>Security hardening and access configuration</li>
            <li>
              Integration configuration with your existing tools and workflows
            </li>
            <li>
              A 14-day hypercare period following deployment (see Section 6)
            </li>
            <li>Documentation and handover of credentials and configuration</li>
          </ul>
          <p>Our Service does not include:</p>
          <ul>
            <li>
              Ongoing managed hosting or infrastructure maintenance beyond the
              hypercare period
            </li>
            <li>
              Development of custom software, bespoke AI models, or custom
              integrations beyond standard OpenClaw capabilities
            </li>
            <li>
              Provision of hardware — the Client is responsible for procuring
              their own Mac Mini or VPS
            </li>
            <li>
              Third-party subscription fees (e.g., AI provider API costs,
              hosting fees, domain registration)
            </li>
          </ul>
        </Section>

        {/* 4. Service Delivery & Scope */}
        <Section title="4. Service Delivery & Scope">
          <p>
            Services are booked via our Google Calendar appointment scheduling
            system. Upon booking and payment, we will contact you to arrange
            access and confirm the scope of work.
          </p>
          <p>
            Delivery timelines depend on the service tier selected and the
            complexity of your integration requirements. We will provide
            estimated timelines at the point of engagement.
          </p>
          <p>
            Any work requested beyond the agreed scope constitutes additional
            work and will be quoted separately. Additional agents beyond those
            included in your chosen tier are charged at £350 per agent
            (excluding VAT).
          </p>
        </Section>

        {/* 5. Pricing & Payment */}
        <Section title="5. Pricing & Payment">
          <p>Our current service tiers and pricing are as follows:</p>
          <ul>
            <li>
              <strong>Hosted Setup:</strong> £770 — deployment on a
              client-provided VPS
            </li>
            <li>
              <strong>Mac Mini Remote:</strong> £1,100 — remote deployment on a
              client-owned Mac Mini
            </li>
            <li>
              <strong>Mac Mini In-Person:</strong> £2,200 — in-person deployment
              on a client-owned Mac Mini
            </li>
            <li>
              <strong>Additional Agents:</strong> £350 per agent
            </li>
          </ul>
          <p>
            All prices are quoted in British Pounds Sterling (GBP) and are
            exclusive of Value Added Tax (VAT). VAT will be added at the
            applicable rate where required by law.
          </p>
          <p>
            Payment is due in full prior to commencement of the Service unless
            otherwise agreed in writing. These are one-time fees — there are no
            recurring subscriptions or ongoing charges from SetupOpenClaw.
          </p>
        </Section>

        {/* 6. 14-Day Hypercare Period */}
        <Section title="6. 14-Day Hypercare Period">
          <p>
            All service tiers include a 14-day hypercare period commencing upon
            completion of the initial deployment. During this period, we will:
          </p>
          <ul>
            <li>
              Monitor the deployment for stability and correct operation
            </li>
            <li>Resolve any issues arising from the initial setup</li>
            <li>
              Make reasonable adjustments to the configuration as needed
            </li>
            <li>
              Provide priority support via email or agreed communication channels
            </li>
          </ul>
          <p>
            The hypercare period does not cover issues caused by Client
            modifications to the deployment, third-party service outages, or
            changes to the Client&apos;s infrastructure made without prior
            consultation.
          </p>
        </Section>

        {/* 7. Client Responsibilities */}
        <Section title="7. Client Responsibilities">
          <p>To enable us to deliver the Service, you agree to:</p>
          <ul>
            <li>
              Provide timely access to your infrastructure (VPS credentials, Mac
              Mini access, network configuration) as reasonably required
            </li>
            <li>
              Ensure your infrastructure meets the minimum requirements
              communicated during the scoping process
            </li>
            <li>
              Designate a point of contact who has authority to make decisions
              regarding the deployment
            </li>
            <li>
              Respond to reasonable requests for information within a timely
              manner
            </li>
            <li>
              Maintain the security of credentials and access details shared
              with us during the engagement
            </li>
            <li>
              Procure and maintain any required third-party services (hosting,
              API keys, domain names)
            </li>
          </ul>
          <p>
            Delays caused by the Client&apos;s failure to meet these
            responsibilities may result in extended delivery timelines and are
            not the responsibility of SetupOpenClaw.
          </p>
        </Section>

        {/* 8. Intellectual Property */}
        <Section title="8. Intellectual Property">
          <p>
            OpenClaw is open-source software. Your use of OpenClaw is governed
            by its own open-source licence. SetupOpenClaw does not claim
            ownership of the OpenClaw software.
          </p>
          <p>
            You retain full ownership of your data, content, and any
            intellectual property you provide to us during the engagement. We
            claim no rights over your business data or AI-generated outputs.
          </p>
          <p>
            Any configuration scripts, deployment templates, or proprietary
            tooling developed by SetupOpenClaw remain the intellectual property
            of Innovatorly Ltd. You are granted a non-exclusive, perpetual
            licence to use such materials solely for operating your deployed
            OpenClaw instance.
          </p>
        </Section>

        {/* 9. Data Protection & Security */}
        <Section title="9. Data Protection & Security">
          <p>
            We take data protection seriously and operate in accordance with the
            UK General Data Protection Regulation (UK GDPR) and the Data
            Protection Act 2018.
          </p>
          <p>Key principles of our approach:</p>
          <ul>
            <li>
              <strong>We do not store your data.</strong> Your AI assistant is
              deployed on your own infrastructure. Your business data, AI
              conversations, and generated content remain on your systems at all
              times.
            </li>
            <li>
              <strong>Temporary access only.</strong> We require access to your
              infrastructure solely for the purpose of performing the deployment.
              This access is revoked or handed back to you upon completion.
            </li>
            <li>
              <strong>No data transfer.</strong> We do not transfer, copy, or
              retain any of your business data on our systems.
            </li>
            <li>
              <strong>Security hardening.</strong> Our deployment process
              includes security hardening as standard, helping to protect your
              data from unauthorised access.
            </li>
          </ul>
          <p>
            You remain the data controller for all personal data processed by
            your OpenClaw deployment. You are responsible for ensuring your use
            of the AI assistant complies with applicable data protection
            legislation.
          </p>
        </Section>

        {/* 10. Limitation of Liability */}
        <Section title="10. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Innovatorly Ltd shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including but not limited to loss of profits, data,
            or business opportunities, arising out of or in connection with the
            Service.
          </p>
          <p>
            Our total aggregate liability in respect of any and all claims
            arising out of or in connection with the Service shall not exceed the
            total fees paid by you for the Service giving rise to the claim.
          </p>
          <p>
            Nothing in these Terms excludes or limits our liability for death or
            personal injury caused by negligence, fraud or fraudulent
            misrepresentation, or any other liability that cannot be excluded or
            limited by English law.
          </p>
          <p>
            We do not warrant that the OpenClaw software or any third-party
            services will be error-free, uninterrupted, or free of
            vulnerabilities. AI-generated outputs should be reviewed by the
            Client before reliance or use in critical decisions.
          </p>
        </Section>

        {/* 11. Cancellation & Refunds */}
        <Section title="11. Cancellation & Refunds">
          <p>
            We stand behind our work with a 100% satisfaction guarantee. If you
            are not satisfied with the deployment, we will work with you to
            resolve any issues during the 14-day hypercare period at no
            additional cost.
          </p>
          <p>
            <strong>Before work commences:</strong> You may cancel your booking
            at any time before work has commenced for a full refund.
          </p>
          <p>
            <strong>After work has commenced:</strong> If you wish to cancel
            after work has begun, refunds will be assessed on a case-by-case
            basis, taking into account the work already completed. We will
            endeavour to reach a fair resolution.
          </p>
          <p>
            <strong>Consumer rights:</strong> If you are a consumer within the
            meaning of the Consumer Rights Act 2015, your statutory rights are
            not affected by these Terms.
          </p>
        </Section>

        {/* 12. Third-Party Services */}
        <Section title="12. Third-Party Services">
          <p>
            The Service involves the use of and integration with third-party
            services, which may include but are not limited to:
          </p>
          <ul>
            <li>
              <strong>OpenClaw:</strong> Open-source AI assistant software,
              governed by its own licence
            </li>
            <li>
              <strong>AI providers:</strong> Such as OpenAI, Anthropic, or other
              large language model providers, governed by their respective terms
              of service
            </li>
            <li>
              <strong>Hosting providers:</strong> VPS providers or other
              infrastructure services selected by the Client
            </li>
            <li>
              <strong>Integration services:</strong> Email providers, calendar
              systems, CRM platforms, and other tools as configured
            </li>
          </ul>
          <p>
            SetupOpenClaw is not responsible for the availability, performance,
            security, or terms of any third-party service. Your use of
            third-party services is subject to the respective provider&apos;s
            own terms and conditions.
          </p>
        </Section>

        {/* 13. Changes to Terms */}
        <Section title="13. Changes to Terms">
          <p>
            We reserve the right to update these Terms at any time. Material
            changes will be communicated via our website. The &quot;Last
            updated&quot; date at the top of this page indicates when these Terms
            were last revised.
          </p>
          <p>
            Continued use of the Service after changes are posted constitutes
            acceptance of the revised Terms.
          </p>
        </Section>

        {/* 14. Governing Law */}
        <Section title="14. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of England and Wales. Any disputes arising under or in
            connection with these Terms shall be subject to the exclusive
            jurisdiction of the courts of England and Wales.
          </p>
        </Section>

        {/* 15. Contact Information */}
        <Section title="15. Contact Information">
          <p>
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <ul>
            <li>
              <strong>Company:</strong> Innovatorly Ltd
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://setupopenclaw.pro"
                className="text-navy-600 dark:text-emerald-400 hover:underline"
              >
                setupopenclaw.pro
              </a>
            </li>
            <li>
              <strong>Registered in:</strong> England and Wales
            </li>
          </ul>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-navy-600 [&_a]:dark:text-emerald-400 [&_a]:hover:underline">
        {children}
      </div>
    </section>
  );
}
