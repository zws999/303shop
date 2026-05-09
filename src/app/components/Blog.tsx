import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "How to Grow a Discord Community",
    excerpt: "Proven strategies to build and engage a thriving Discord server from scratch",
    date: "May 8, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1741447096161-a6b4e3398d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    title: "Best Social Growth Strategies in 2026",
    excerpt: "Latest trends and techniques for authentic social media growth",
    date: "May 5, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1774998056075-1ed863dfbe08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    title: "Building Premium Online Communities",
    excerpt: "Expert tips for creating engaged and valuable digital communities",
    date: "May 1, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 overflow-hidden">
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
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tips, guides, and strategies for digital success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative h-full rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
