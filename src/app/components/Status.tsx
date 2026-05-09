import { motion } from "motion/react";
import { CheckCircle2, Activity, Server, Zap } from "lucide-react";

const systems = [
  {
    name: "Payment Systems",
    status: "Online",
    icon: CheckCircle2,
  },
  {
    name: "Delivery Systems",
    status: "Online",
    icon: Zap,
  },
  {
    name: "API Systems",
    status: "Stable",
    icon: Activity,
  },
  {
    name: "Store",
    status: "Operational",
    icon: Server,
  },
];

export function Status() {
  return (
    <section id="status" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              System Status
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Real-time monitoring of all our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {systems.map((system, i) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="relative p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/20">
                      <system.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{system.name}</h3>
                      <p className="text-sm text-gray-400">All systems operational</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.6, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-3 h-3 rounded-full bg-green-500"
                    ></motion.div>
                    <span className="text-green-400 font-semibold">{system.status}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Last updated: {new Date().toLocaleString()}
        </motion.div>
      </div>
    </section>
  );
}
