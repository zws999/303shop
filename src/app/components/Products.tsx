import { motion } from "motion/react";
import { ShoppingCart, TrendingUp, Users, Heart, Gamepad2, Crown } from "lucide-react";

const products = [
  {
    title: "TikTok 1000 Followers",
    description: "Boost your TikTok presence with 1000 real followers",
    price: "€2.21",
    stock: "In Stock",
    icon: TrendingUp,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/1d91ba17-23af-4d42-861f-6dd202c2d300/public",
  },
  {
    title: "Instagram 1000 Followers",
    description: "Grow your Instagram with 1000 authentic followers",
    price: "€3.00",
    stock: "In Stock",
    icon: Users,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/00f74af9-238e-4231-b288-82ec26b77900/public",
  },
  {
    title: "NixWare 14 Days Subscription",
    description: "Get in game with advantage than others",
    price: "€4.00",
    stock: "In stock",
    icon: Users,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/4f472c6b-29ae-4a8b-3329-61312a7ef500/public",
  },
  {
    title: "FileList invitation",
    description: "FileList is a Romanian private torrent tracker specializing in general content. Established in 2007, it has amassed a substantial user base and a vast library of torrents, including movies, TV shows, music, and software",
    price: "€3.50",
    stock: "Not in stock",
    icon: Crown,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/e3712fb1-f111-4a5a-679a-5f235a668000/public",
  },
  {
    title: "Windows Activation Tool",
    description: "Windows Activation Tool is a safe tool to activate Windows/Office",
    price: "€2.50",
    stock: "In Stock",
    icon: Users,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/e3712fb1-f111-4a5a-679a-5f235a668000/public",
  },    
  {
    title: "Instagram 1000 Likes",
    description: "Get 1000 likes to boost your Instagram engagement",
    price: "€2.10",
    stock: "In Stock",
    icon: Heart,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/00f74af9-238e-4231-b288-82ec26b77900/public",
  },
    {
    title: "Midnight.im Legit Config",
    description: "The Midnight.im Legit Config is a configuration file designed for use with the Midnight.im cheat tool in Counter-Strike 2 (CS2).",
    price: "€1.00",
    stock: "In stock",
    icon: Users,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/88791510-031d-40f6-07a8-2d9b5911f100/public",
  },
  {
    title: "TikTok 1000 Likes",
    description: "Increase TikTok engagement with 1000 likes",
    price: "€2.10",
    stock: "In Stock",
    icon: Heart,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/1d91ba17-23af-4d42-861f-6dd202c2d300/public",
  },
  {
    title: "FiveM Ready Account",
    description: "Premium FiveM account ready to play",
    price: "€0.20",
    stock: "Limited",
    icon: Gamepad2,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/45514c15-e9d0-4a2d-9649-33b01b41d000/public",
  },
  {
    title: "Discord Members",
    description: "Grow your Discord server with real members",
    price: "€0.08",
    stock: "Not in stock",
    icon: Users,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/fdb30fca-c099-4a6b-24f9-592ce2398500/public",
  },
  {
    title: "Discord Decoration",
    description: "Premium Discord profile decorations",
    price: "€0.00",
    stock: "Not in stock",
    icon: Crown,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/230ed8b8-3191-47f1-3aac-258b53bce800/public",
  },
  {
    title: "Discord Nitro Boost 1 Month",
    description: "1 month of Discord Nitro premium features",
    price: "€5.50",
    stock: "In Stock",
    icon: Crown,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/b457f244-940a-40c1-93cb-81a641f15d00/public",
  },
  {
    title: "Discord Nitro Boost 3 Months",
    description: "3 months of Discord Nitro premium features",
    price: "€16.00",
    stock: "Not in stock",
    icon: Crown,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/b457f244-940a-40c1-93cb-81a641f15d00/public",
  },
  {
    title: "Discord Nitro Boost 12 Months",
    description: "Full year of Discord Nitro premium features",
    price: "€65.00",
    stock: "Not in stock",
    icon: Crown,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/b457f244-940a-40c1-93cb-81a641f15d00/public",
  },
  {
    title: "Discord Server Boost x14",
    description: "14 server boosts to level up your Discord server",
    price: "€5.00",
    stock: "Limited",
    icon: TrendingUp,
    image: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/9dacdb8d-2975-4551-680e-15c0f7075c00/public",
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
