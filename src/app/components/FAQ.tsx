import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How fast is delivery?",
    answer: "Most products are delivered instantly to your email or account within minutes of purchase. Some services may take up to 24 hours depending on the type of product.",
  },
  {
    question: "Are payments secure?",
    answer: "Absolutely! We use industry-standard encryption and secure payment gateways to protect your information. All transactions are processed through trusted payment providers.",
  },
  {
    question: "Do products include support?",
    answer: "Yes! All products come with customer support. If you have any issues or questions, our team is available via Discord and email to help you.",
  },
  {
    question: "How do I receive my order?",
    answer: "After purchase, you'll receive an email with your product details and instructions. For digital services, access information will be sent to your registered email address.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Common Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 transition-opacity duration-500 ${openIndex === i ? 'opacity-20' : 'group-hover:opacity-10'}`}></div>

              <div className={`relative rounded-xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border transition-all duration-300 ${openIndex === i ? 'border-cyan-500/30' : 'border-white/10'}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === i ? "auto" : 0,
                    opacity: openIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
