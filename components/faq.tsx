import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is OpenClaw?",
    answer:
      "OpenClaw is an open-source AI executive assistant that connects to your tools (email, calendar, Slack, etc.) and automates workflows. It's built for teams who want AI that actually does work, not just answers questions.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all. That's the whole point of SetupOpenClaw — we handle every technical detail. You just tell us what you want your AI assistant to do.",
  },
  {
    question: "Can you set this up remotely?",
    answer:
      "Yes. Our Hosted Setup and Mac Mini Remote tiers are fully remote. We can deploy for teams anywhere in the UK (and worldwide). Only the Mac Mini In-Person tier requires Leeds & West Yorkshire proximity.",
  },
  {
    question: "Is this related to the OpenAI acquisition?",
    answer:
      "No. OpenClaw is an independent open-source project. It uses various AI models and is not owned by or affiliated with OpenAI.",
  },
  {
    question: "Can I set up OpenClaw myself?",
    answer:
      "Absolutely — it's open source. But most teams find that security hardening, integration configuration, and ongoing maintenance take significantly more time than expected. We do it in hours with enterprise-grade security.",
  },
  {
    question: "What if something goes wrong?",
    answer:
      "During the 14-day hypercare period, we actively monitor and fix any issues. After that, we offer support packages. Plus, every installation includes audit trails and monitoring.",
  },
  {
    question: "What infrastructure do I need?",
    answer:
      "For Hosted Setup: nothing — we deploy to a cloud VPS (~£5-10/mo). For Mac Mini tiers: a Mac Mini (~£500). We handle all software configuration.",
  },
  {
    question: "Can I have multiple agents?",
    answer:
      "Yes. Each additional agent is £350. Teams often run separate agents for different departments or workflows.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use Docker sandboxing, Composio middleware, OAuth token management, audit trails, and read-only defaults. Your data stays on your infrastructure — we never store it.",
  },
  {
    question: "What about ongoing maintenance?",
    answer:
      "OpenClaw requires minimal maintenance after setup. We provide documentation for common tasks. For hands-off operation, ask about our maintenance packages.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Frequently asked <span className="text-gradient-brand">questions</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
