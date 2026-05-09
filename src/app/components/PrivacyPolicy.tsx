import { motion } from "motion/react";
import { ShieldCheck, Database, Lock, Users, FileText, AlertCircle } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <ShieldCheck className="w-12 h-12 text-cyan-400" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-400 text-lg">303 Services / 303 Shop</p>
          <p className="text-gray-500 text-sm mt-2">Last Updated: May 9, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Introduction */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                Welcome to 303 Services/Shop. By using our website, products, or services, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-cyan-400" />
                1. Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect the following information when you use our services:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Email address</li>
                <li>Username or account information</li>
                <li>Payment-related information processed securely through third-party payment providers</li>
                <li>Device/browser information</li>
                <li>Order history and purchased products</li>
                <li>Messages sent through support or contact forms</li>
              </ul>
              <p className="text-cyan-400 font-semibold mt-4">
                We do not store sensitive payment information such as full credit card details.
              </p>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your information may be used to:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Process and deliver digital products or services</li>
                <li>Provide customer support</li>
                <li>Prevent fraud, abuse, or unauthorized access</li>
                <li>Improve website performance and user experience</li>
                <li>Send important updates regarding purchases or services</li>
              </ul>
            </div>
          </div>

          {/* Digital Products */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                3. Digital Products
              </h2>
              <p className="text-gray-300 leading-relaxed">
                303 Shop primarily sells digital products and online services. Due to the nature of digital content, products may become instantly accessible after purchase.
              </p>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may use trusted third-party services including:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Payment processors</li>
                <li>Hosting providers</li>
                <li>Analytics services</li>
                <li>Authentication systems</li>
              </ul>
              <p className="text-gray-300 mt-4">
                These services may process limited user data required for functionality and security.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-cyan-400" />
                5. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We take reasonable measures to protect user data from unauthorized access, misuse, or disclosure. However, no online service can guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Account Responsibility */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-cyan-400" />
                6. Account Responsibility
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Users are responsible for maintaining the confidentiality of their account information. Sharing accounts, abusing services, or attempting unauthorized access may result in suspension or termination.
              </p>
            </div>
          </div>

          {/* Changes to This Policy */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-cyan-400" />
                7. Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to update or modify this Privacy Policy at any time without prior notice. Continued use of our services means you accept any updated terms.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                For support or legal inquiries, contact us through the official support channels listed on our platform.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold hover:scale-105 transition-transform"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </section>
  );
}
