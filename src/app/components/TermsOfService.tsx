import { motion } from "motion/react";
import { FileText, Calendar, Shield, CreditCard, Truck, Clock } from "lucide-react";

export function TermsOfService() {
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
            <FileText className="w-12 h-12 text-cyan-400" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Effective Date: 03.03.2025 📅</p>
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
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to <span className="text-cyan-400 font-semibold">303 Services/Shop</span> 🌟, where we offer high-quality products/services. By accessing or using our website or services, you agree to comply with and be bound by the following Terms of Service (TOS). Please read these terms carefully before using our services. 📖
              </p>
            </div>
          </div>

          {/* Acceptance of Terms */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By using our website 🌐, purchasing products 🛍️, or accessing any content or services provided by <span className="text-cyan-400 font-semibold">303 Services/Shop</span>, you agree to the terms and conditions set forth in this agreement. If you do not agree to these terms, please refrain from using our services. 🚫
              </p>
            </div>
          </div>

          {/* User Eligibility */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Eligibility</h2>
              <p className="text-gray-300 leading-relaxed">
                You must be at least <span className="text-cyan-400 font-semibold">14 years old</span> 👶 to use our services and make purchases. By using our services, you represent and warrant that you meet this age requirement. ✅
              </p>
            </div>
          </div>

          {/* Account Responsibility */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">4. Account Responsibility</h2>
              <p className="text-gray-300 leading-relaxed">
                To purchase products or services 🛒, you may need to create an account 📝. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. If you believe your account has been compromised, please contact us immediately. 🔒
              </p>
            </div>
          </div>

          {/* Orders and Payment */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-cyan-400" />
                5. Orders and Payment
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By placing an order with us 🛍️, you are making an offer to purchase products or services subject to the availability and acceptance of your order.
              </p>
              <div className="space-y-2">
                <p className="text-white font-semibold">Payment Methods Accepted: 💳</p>
                <p className="text-gray-300">PaysafeCard, PayPal, Revolut, Bitcoin</p>
                <p className="text-gray-300 mt-4">
                  All payments must be made in full at the time of purchase. If there are any issues with your payment, we will notify you immediately. 🚨
                </p>
              </div>
            </div>
          </div>

          {/* Shipping and Delivery */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Truck className="w-6 h-6 text-cyan-400" />
                6. Shipping and Delivery
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We will ship products 🚚 to you soon as possible.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Estimated Delivery Time:</p>
                    <p className="text-gray-300">1 Hour - 24 Hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Fees:</p>
                    <p className="text-gray-300">There is a 1%-10% Fee</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">
                  Please note, <span className="text-cyan-400 font-semibold">303 Services/Shop</span> is not responsible for any delays caused by local time zone or unforeseen events. ⏳
                </p>
              </div>
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
