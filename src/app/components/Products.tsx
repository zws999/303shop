import { motion } from "motion/react";
import { ShoppingCart, TrendingUp, Users, Heart, Gamepad2, Crown } from "lucide-react";

const products = [
  {
    title: "TikTok 1000 Followers",
    description: "Boost your TikTok presence with 1000 real followers",
    price: "$9.99",
    stock: "In Stock",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1776926092709-26e7af3035b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "Instagram 1000 Followers",
    description: "Grow your Instagram with 1000 authentic followers",
    price: "$12.99",
    stock: "In Stock",
    icon: Users,
    image: "https://images.unsplash.com/photo-1774998056075-1ed863dfbe08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "Instagram 1000 Likes",
    description: "Get 1000 likes to boost your Instagram engagement",
    price: "$7.99",
    stock: "In Stock",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1774998056014-4687d889c2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "TikTok 1000 Likes",
    description: "Increase TikTok engagement with 1000 likes",
    price: "$6.99",
    stock: "In Stock",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1771875797343-81b2beb5e7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "FiveM Ready Account",
    description: "Premium FiveM account ready to play",
    price: "$24.99",
    stock: "Limited",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1762278804729-13d330fad71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "Discord Members",
    description: "Grow your Discord server with real members",
    price: "$15.99",
    stock: "In Stock",
    icon: Users,
    image: "https://images.unsplash.com/photo-1741447096161-a6b4e3398d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "Discord Decoration",
    description: "Premium Discord profile decorations",
    price: "$4.99",
    stock: "In Stock",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "Discord Nitro Boost 1 Month",
    description: "1 month of Discord Nitro premium features",
    price: "$9.99",
    stock: "In Stock",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1741447096164-bbdfb14f0124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "Discord Nitro Boost 3 Months",
    description: "3 months of Discord Nitro premium features",
    price: "$24.99",
    stock: "In Stock",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1771875802948-0d0f3424fe6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "Discord Nitro Boost 12 Months",
    description: "Full year of Discord Nitro premium features",
    price: "$89.99",
    stock: "In Stock",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1761319659783-cceb1973d6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    title: "Discord Server Boost x14",
    description: "14 server boosts to level up your Discord server",
    price: "$49.99",
    stock: "Limited",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1762278804855-ebc8fbbc3105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 overflow-hidden">
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
              Premium Products
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Handpicked digital services designed for modern creators and communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative h-full p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 p-3 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                    <product.icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Stock Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/30">
                    <span className="text-xs text-cyan-400 font-semibold">{product.stock}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>

                  <motion.a
                    href="https://303.mysellauth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
