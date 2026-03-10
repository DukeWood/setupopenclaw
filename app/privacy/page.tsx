import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | SetupOpenClaw",
  description:
    "Privacy Policy for SetupOpenClaw managed AI assistant deployment services by Innovatorly Ltd. GDPR compliant, UK data protection.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-navy-600 dark:text-emerald-400 hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          Last updated: 10 March 2026
        </p>

        {/* 1. Introduction & Data Controller */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            1. Introduction &amp; Data Controller
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            This Privacy Policy explains how Innovatorly Ltd (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and
            protects your personal data when you visit our website at
            setupopenclaw.pro (&ldquo;the Website&rdquo;) or use our
            SetupOpenClaw managed deployment service (&ldquo;the Service&rdquo;).
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Innovatorly Ltd is the data controller for the purposes of the UK
            General Data Protection Regulation (UK GDPR) and the Data Protection
            Act 2018. We are registered in England and Wales.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            We are committed to protecting your privacy and ensuring your
            personal data is handled in accordance with applicable data
            protection legislation.
          </p>
        </section>

        {/* 2. What Data We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            2. What Data We Collect
          </h2>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
            2.1 Website Visitors
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            When you visit our Website, the following data may be automatically
            collected through our hosting provider (Vercel):
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mb-6 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URL</li>
            <li>Pages visited and time spent on each page</li>
            <li>Date and time of access</li>
          </ul>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
            2.2 Booking &amp; Contact
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            When you book a consultation via our Google Calendar scheduling link,
            you provide:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mb-6 space-y-1">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Any additional information you choose to include in the booking notes</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            This data is processed and stored by Google as part of Google
            Calendar Appointment Scheduling. Please refer to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 dark:text-emerald-400 hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>{" "}
            for details on how Google handles your data.
          </p>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
            2.3 Service Delivery
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            During the setup and hypercare period of our Service, we may require
            temporary access to your systems (e.g. your VPS or Mac Mini) in
            order to deploy and configure your OpenClaw AI assistant. This access
            is limited to the scope and duration agreed in your service
            agreement. We do not retain copies of any data from your systems
            after the engagement is complete.
          </p>
        </section>

        {/* 3. How We Use Your Data */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            3. How We Use Your Data
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            We use the data we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
            <li>
              To deliver, maintain, and improve the Website and its performance
            </li>
            <li>
              To process and manage your booking and consultation requests
            </li>
            <li>
              To deliver the SetupOpenClaw deployment service as agreed with you
            </li>
            <li>
              To communicate with you regarding your booking or service delivery
            </li>
            <li>
              To comply with legal obligations
            </li>
            <li>
              To protect the security and integrity of the Website and our
              systems
            </li>
          </ul>
        </section>

        {/* 4. Legal Basis for Processing */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            4. Legal Basis for Processing (UK GDPR Article 6)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            We process your personal data on the following legal bases:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
            <li>
              <strong className="text-slate-900 dark:text-white">
                Contractual necessity (Article 6(1)(b)):
              </strong>{" "}
              Processing is necessary to perform the service you have engaged us
              for, including booking consultations and delivering the
              SetupOpenClaw deployment service.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Legitimate interests (Article 6(1)(f)):
              </strong>{" "}
              We process basic website visitor data for the legitimate interests
              of maintaining site security, analysing site performance, and
              improving our services. We have assessed that these interests do
              not override your rights and freedoms.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Legal obligation (Article 6(1)(c)):
              </strong>{" "}
              We may process data where necessary to comply with legal
              obligations, such as tax and accounting requirements.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Consent (Article 6(1)(a)):
              </strong>{" "}
              Where applicable, we obtain your consent before processing data
              for purposes not covered by the above bases. You may withdraw
              consent at any time.
            </li>
          </ul>
        </section>

        {/* 5. Data Retention */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            5. Data Retention
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            We retain personal data only for as long as necessary to fulfil the
            purposes for which it was collected:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
            <li>
              <strong className="text-slate-900 dark:text-white">
                Website analytics data:
              </strong>{" "}
              Retained by Vercel in accordance with their data retention
              policies.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Booking data:
              </strong>{" "}
              Retained in Google Calendar for the duration of our business
              relationship. You may request deletion at any time.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Service delivery access:
              </strong>{" "}
              Temporary access to your systems is revoked upon completion of
              setup and the hypercare period. No client data is retained by us.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Business records:
              </strong>{" "}
              Invoices and contractual records are retained for a minimum of 6
              years to comply with UK tax and accounting obligations.
            </li>
          </ul>
        </section>

        {/* 6. Data We Do NOT Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            6. Data We Do NOT Collect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            SetupOpenClaw is a deployment service. A core principle of our
            offering is that{" "}
            <strong className="text-slate-900 dark:text-white">
              your data stays on your infrastructure
            </strong>
            . To be clear:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
            <li>
              We do <strong className="text-slate-900 dark:text-white">not</strong>{" "}
              store, copy, or retain your business data
            </li>
            <li>
              We do <strong className="text-slate-900 dark:text-white">not</strong>{" "}
              store or have ongoing access to AI conversations processed by your
              OpenClaw assistant
            </li>
            <li>
              We do <strong className="text-slate-900 dark:text-white">not</strong>{" "}
              store your customers&apos; data
            </li>
            <li>
              We do <strong className="text-slate-900 dark:text-white">not</strong>{" "}
              maintain persistent access to your systems after the engagement is
              complete
            </li>
            <li>
              This Website does <strong className="text-slate-900 dark:text-white">not</strong>{" "}
              have user accounts, login systems, or collect passwords
            </li>
          </ul>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            All data processed by your OpenClaw AI assistant after deployment
            remains exclusively on your client-owned infrastructure (your VPS or
            Mac Mini). We have no access to it.
          </p>
        </section>

        {/* 7. Third-Party Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            7. Third-Party Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            We use the following third-party services in connection with the
            Website and our Service:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
            <li>
              <strong className="text-slate-900 dark:text-white">
                Vercel
              </strong>{" "}
              &mdash; Website hosting and content delivery. Vercel may collect
              standard web server logs.{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 dark:text-emerald-400 hover:underline"
              >
                Vercel Privacy Policy
              </a>
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Google Calendar (Appointment Scheduling)
              </strong>{" "}
              &mdash; Used for booking consultations. Google processes your name
              and email when you book.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 dark:text-emerald-400 hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                AI Model Providers
              </strong>{" "}
              &mdash; The OpenClaw assistant deployed on your infrastructure may
              connect to third-party AI model providers (e.g. Anthropic,
              OpenAI). These connections are configured on{" "}
              <em>your</em> infrastructure and governed by your own agreements
              with those providers. Innovatorly Ltd is not a party to those
              data-processing relationships after deployment.
            </li>
          </ul>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            We do not sell, trade, or rent your personal data to any third party.
          </p>
        </section>

        {/* 8. Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            8. Cookies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            This Website is a static marketing site and uses minimal cookies:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
            <li>
              <strong className="text-slate-900 dark:text-white">
                Essential cookies:
              </strong>{" "}
              Vercel may set cookies necessary for the functioning of the
              website, including security and performance cookies.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Theme preference:
              </strong>{" "}
              A local storage entry may be used to remember your light/dark mode
              preference.
            </li>
          </ul>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            We do not use advertising cookies, tracking pixels, or third-party
            analytics cookies. You can control cookie behaviour through your
            browser settings.
          </p>
        </section>

        {/* 9. Your Rights Under GDPR */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            9. Your Rights Under UK GDPR
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Under the UK GDPR, you have the following rights in relation to your
            personal data:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
            <li>
              <strong className="text-slate-900 dark:text-white">
                Right of access
              </strong>{" "}
              &mdash; You may request a copy of the personal data we hold about
              you.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Right to rectification
              </strong>{" "}
              &mdash; You may request that we correct inaccurate or incomplete
              data.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Right to erasure
              </strong>{" "}
              &mdash; You may request that we delete your personal data, subject
              to legal retention requirements.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Right to restrict processing
              </strong>{" "}
              &mdash; You may request that we limit the processing of your data
              in certain circumstances.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Right to data portability
              </strong>{" "}
              &mdash; You may request your data in a structured, commonly used,
              machine-readable format.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Right to object
              </strong>{" "}
              &mdash; You may object to processing based on legitimate interests.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">
                Rights related to automated decision-making
              </strong>{" "}
              &mdash; We do not use automated decision-making or profiling.
            </li>
          </ul>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            To exercise any of these rights, please contact us using the details
            in Section 13. We will respond to your request within one month, as
            required by law.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            If you are not satisfied with how we handle your request, you have
            the right to lodge a complaint with the{" "}
            <a
              href="https://ico.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 dark:text-emerald-400 hover:underline"
            >
              Information Commissioner&apos;s Office (ICO)
            </a>
            , the UK&apos;s supervisory authority for data protection.
          </p>
        </section>

        {/* 10. Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            10. Data Security
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            We take appropriate technical and organisational measures to protect
            your personal data, including:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
            <li>
              HTTPS encryption for all data transmitted between your browser and
              our Website
            </li>
            <li>
              Secure, authenticated access when connecting to your systems
              during service delivery
            </li>
            <li>
              Prompt revocation of access credentials upon completion of the
              engagement
            </li>
            <li>
              Use of reputable, security-audited hosting and third-party
              services
            </li>
          </ul>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            While we strive to use commercially acceptable means to protect your
            personal data, no method of transmission over the Internet or
            electronic storage is 100% secure. We cannot guarantee absolute
            security.
          </p>
        </section>

        {/* 11. Children's Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            11. Children&apos;s Privacy
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Our Website and Service are not directed at individuals under the age
            of 18. We do not knowingly collect personal data from children. If
            you believe that we have inadvertently collected personal data from a
            child, please contact us immediately and we will take steps to delete
            that data.
          </p>
        </section>

        {/* 12. Changes to This Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            12. Changes to This Policy
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            We may update this Privacy Policy from time to time to reflect
            changes to our practices, services, or legal requirements. Any
            changes will be posted on this page with an updated &ldquo;Last
            updated&rdquo; date. We encourage you to review this page
            periodically. Your continued use of the Website or Service after any
            changes constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* 13. Contact Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            13. Contact Information
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            If you have any questions about this Privacy Policy, wish to exercise
            your data protection rights, or have concerns about how your data is
            handled, please contact us:
          </p>
          <div className="text-slate-600 dark:text-slate-400 space-y-1">
            <p>
              <strong className="text-slate-900 dark:text-white">
                Innovatorly Ltd
              </strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:privacy@setupopenclaw.pro"
                className="text-navy-600 dark:text-emerald-400 hover:underline"
              >
                privacy@setupopenclaw.pro
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://setupopenclaw.pro"
                className="text-navy-600 dark:text-emerald-400 hover:underline"
              >
                setupopenclaw.pro
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
