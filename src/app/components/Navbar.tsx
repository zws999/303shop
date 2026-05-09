import { motion } from "motion/react";
import { ShoppingCart, MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-lg opacity-50"></div>
              <span className="relative text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                303 Shop
              </span>
            </div>
          </motion.div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Products", "Status"].map((item) => (
              <motion.a
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://303.mysellauth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2 rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-cyan-500 to-purple-500 transition-opacity"></div>
              <span className="relative flex items-center gap-2 text-white font-semibold text-sm">
                <ShoppingCart className="w-4 h-4" />
                Buy Now
              </span>
            </motion.a>

            <motion.a
              href="https://discord.gg/gEBSeqjfKR"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2 text-white font-medium text-sm">
                <MessageCircle className="w-4 h-4" />
                Discord
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
