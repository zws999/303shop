import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";

export function FloatingBuyButton() {
  return (
    <motion.a
      href="https://303.mysellauth.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulsing Glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Button */}
      <div className="relative px-6 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-2xl">
        <div className="flex items-center gap-2 text-white font-bold">
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Buy Now</span>
        </div>
      </div>
    </motion.a>
  );
}
