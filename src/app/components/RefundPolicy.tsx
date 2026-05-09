import { motion } from "motion/react";
import { XCircle, AlertTriangle, Shield, MessageCircle } from "lucide-react";

export function RefundPolicy() {
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
            <XCircle className="w-12 h-12 text-red-400" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Refund Policy
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
          {/* NO REFUNDS POLICY */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl blur opacity-30"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-red-900/20 to-purple-900/20 border border-red-500/30">
              <h2 className="text-3xl font-black text-white mb-4 flex items-center gap-3">
                <XCircle className="w-8 h-8 text-red-400" />
                NO REFUNDS POLICY
              </h2>
              <p className="text-white text-xl font-bold leading-relaxed">
                All purchases made through 303 Services / 303 Shop are final.
              </p>
            </div>
          </div>

          {/* We do NOT offer refunds */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-4">
                We do <span className="text-red-400 font-bold">NOT</span> offer refunds, returns, or exchanges under any circumstances, including but not limited to:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Accidental purchases</li>
                <li>Change of mind</li>
                <li>Incorrect product selection</li>
                <li>Lack of compatibility</li>
                <li>User error</li>
                <li>Failure to read product descriptions</li>
                <li>Dissatisfaction after delivery</li>
                <li>Account bans or external platform restrictions</li>
                <li>Digital product usage issues caused by third-party software or services</li>
              </ul>
            </div>
          </div>

          {/* Digital Product Notice */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                Digital Product Notice
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Because our products are digital and/or instantly delivered, they cannot be returned once accessed, downloaded, delivered, or used.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By purchasing from 303 Services / 303 Shop, you acknowledge and agree that:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside mt-4">
                <li>You understand what you are purchasing</li>
                <li>You waive any right to chargebacks or refund claims</li>
                <li>You are responsible for verifying compatibility and requirements before purchase</li>
              </ul>
            </div>
          </div>

          {/* Fraud & Chargebacks */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl blur opacity-20"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-red-900/10 to-purple-900/10 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Fraud & Chargebacks
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Any fraudulent chargeback attempts may result in:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Permanent suspension from our services</li>
                <li>Blacklisting</li>
                <li>Reporting relevant transaction information to payment processors or fraud prevention systems</li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                Support
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you experience technical issues with a purchased product, we may provide assistance at our discretion, but this does not guarantee a refund.
              </p>
            </div>
          </div>

          {/* Agreement */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30">
              <p className="text-white text-lg font-bold text-center leading-relaxed">
                By completing a purchase on 303 Services / 303 Shop, you fully agree to this Refund Policy.
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
