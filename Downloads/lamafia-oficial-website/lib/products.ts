export type Product = {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
  affiliateUrl: string
  platform: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Smartwatch Elite Pro",
    description: "Relogio inteligente premium com monitor cardiaco, GPS integrado e design sofisticado em aco inoxidavel.",
    price: "R$ 899,90",
    image: "/images/products/smartwatch.jpg",
    category: "Tecnologia",
    affiliateUrl: "https://www.amazon.com.br",
    platform: "Amazon",
    featured: true,
  },
  {
    id: "2",
    name: "Headphone Wireless Noir",
    description: "Fone de ouvido bluetooth com cancelamento de ruido ativo, som Hi-Fi e ate 40h de bateria.",
    price: "R$ 649,90",
    image: "/images/products/headphones.jpg",
    category: "Tecnologia",
    affiliateUrl: "https://www.amazon.com.br",
    platform: "Amazon",
    featured: true,
  },
  {
    id: "3",
    name: "Oculos de Sol Prestige",
    description: "Oculos de sol com armacao metalica dourada, lentes polarizadas e protecao UV400.",
    price: "R$ 299,90",
    image: "/images/products/sunglasses.jpg",
    category: "Acessorios",
    affiliateUrl: "https://shopee.com.br",
    platform: "Shopee",
    featured: true,
  },
  {
    id: "4",
    name: "Carteira Couro Premium",
    description: "Carteira em couro legitimo com acabamento artesanal, compartimentos para cartoes e ziper dourado.",
    price: "R$ 189,90",
    image: "/images/products/wallet.jpg",
    category: "Acessorios",
    affiliateUrl: "https://shopee.com.br",
    platform: "Shopee",
  },
  {
    id: "5",
    name: "Sneaker Urban Gold",
    description: "Tenis premium com design moderno, detalhes em dourado e solado em gel para maximo conforto.",
    price: "R$ 459,90",
    image: "/images/products/sneakers.jpg",
    category: "Calcados",
    affiliateUrl: "https://www.mercadolivre.com.br",
    platform: "Mercado Livre",
    featured: true,
  },
  {
    id: "6",
    name: "Mochila Executive Black",
    description: "Mochila em couro sintetico premium, compartimento para notebook, hardware dourado e forro anti-furto.",
    price: "R$ 349,90",
    image: "/images/products/backpack.jpg",
    category: "Acessorios",
    affiliateUrl: "https://www.amazon.com.br",
    platform: "Amazon",
  },
  {
    id: "7",
    name: "Perfume Essence Noir",
    description: "Fragancia exclusiva com notas de amadeirado, baunilha e ambar. Longa duracao e presenca marcante.",
    price: "R$ 279,90",
    image: "/images/products/perfume.jpg",
    category: "Beleza",
    affiliateUrl: "https://www.mercadolivre.com.br",
    platform: "Mercado Livre",
    featured: true,
  },
  {
    id: "8",
    name: "Speaker Bluetooth Lux",
    description: "Caixa de som portatil com design premium, som 360 graus, a prova d'agua e 20h de bateria.",
    price: "R$ 399,90",
    image: "/images/products/speaker.jpg",
    category: "Tecnologia",
    affiliateUrl: "https://shopee.com.br",
    platform: "Shopee",
  },
]

export const categories = [...new Set(products.map((p) => p.category))]
