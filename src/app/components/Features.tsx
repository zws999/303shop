import { motion } from "motion/react";
import { Zap, Shield, Award, Clock, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Receive your products within 1-24 hours of purchase",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Protected transactions with industry-standard encryption",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the highest quality digital products and services",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Shop anytime, anywhere with round-the-clock access",
  },
  {
    icon: TrendingUp,
    title: "Trusted Marketplace",
    description: "Reliable digital marketplace for modern communities",
  },
  {
    icon: Sparkles,
    title: "Smooth Experience",
    description: "Seamless checkout and delivery process",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the difference with premium features designed for excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative h-full p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-xl opacity-20"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-500/20">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
