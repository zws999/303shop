import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Alex Rivera",
    role: "Content Creator",
    rating: 5,
    text: "Absolutely incredible service! The delivery was instant and the quality exceeded my expectations. My Discord community has never been more active.",
    avatar: "AR",
  },
  {
    name: "Sarah Chen",
    role: "Community Manager",
    rating: 5,
    text: "303 Shop is my go-to for all digital services. The checkout process is smooth, support is responsive, and I've never had a single issue.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Gaming Streamer",
    rating: 5,
    text: "Best marketplace I've used. The FiveM account was exactly what I needed and the social growth services helped me reach new audiences.",
    avatar: "MJ",
  },
  {
    name: "Emma Davis",
    role: "Social Media Influencer",
    rating: 5,
    text: "Premium quality products at fair prices. The Instagram and TikTok services are legit and helped boost my engagement significantly.",
    avatar: "ED",
  },
  {
    name: "Jake Thompson",
    role: "Discord Server Owner",
    rating: 5,
    text: "The server boosts and member services are top-tier. Trusted service that delivers exactly what they promise. Highly recommend!",
    avatar: "JT",
  },
  {
    name: "Olivia Martinez",
    role: "Digital Entrepreneur",
    rating: 5,
    text: "Fast, secure, and reliable. 303 Shop has become an essential tool for growing my online presence. The quality is unmatched.",
    avatar: "OM",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Trusted by Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our customers are saying about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="relative h-full p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{review.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">{review.avatar}</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.role}</div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
