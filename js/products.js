/* Azéle product catalog — single source of truth for shop, product & home pages */

const PRODUCTS = [
  {
    slug: "rani-haar",
    name: "Rani Haar",
    category: "necklaces",
    categoryLabel: "Necklace",
    price: 3999,
    image: "images/rani-haar.jpg",
    tag: "Bestseller",
    short: "A regal five-layer haar cascading in Kundan florets and pearl tassels.",
    description: "Our most-loved bridal statement piece. Five layers of hand-set Kundan florets fall in a graduated cascade, finished with delicate pearl drops that catch the light with every movement. Rooted in traditional craftsmanship, the Rani Haar is built for the moments that call for a little more drama — sangeet nights, receptions, or any occasion where you're the centre of attention.",
    meta: { material: "Gold-plated brass, Kundan stones, pearls", closure: "Adjustable dori tie-back", care: "Store flat, avoid perfume contact" }
  },
  {
    slug: "emerald-pearl-choker",
    name: "Emerald Pearl Choker",
    category: "chokers",
    categoryLabel: "Choker Set",
    price: 1999,
    image: "images/emerald-pearl-choker.jpg",
    tag: "Set",
    short: "Emerald-green Kundan centrepieces framed in pearls, with matching earrings.",
    description: "A double-row pearl choker punctuated with emerald-hued Kundan stones, paired with matching drop earrings. The deep green against warm gold gives this set a jewel-box richness that pairs beautifully with both pastels and jewel-toned outfits alike. Complete set includes choker + earrings.",
    meta: { material: "Gold-plated brass, Kundan glass stones, pearls", closure: "Adjustable hook clasp", care: "Store flat, avoid perfume contact" }
  },
  {
    slug: "fiora-earring",
    name: "Fiora Earring",
    category: "earrings",
    categoryLabel: "Earrings",
    price: 899,
    image: "images/fiora-earring.jpg",
    short: "Kundan floret jhumkas with cascading pearl tassels.",
    description: "A classic floret-topped jhumka in warm gold, set with sparkling Kundan stones and finished with delicate pearl tassels that brush the shoulder. Lightweight enough for an evening of dancing, ornate enough to be the only jewellery you need.",
    meta: { material: "Gold-plated brass, Kundan stones, pearls", closure: "Push-back with hook", care: "Keep dry, store in pouch" }
  },
  {
    slug: "aurelle-pearl-choker",
    name: "Aurelle Pearl Choker",
    category: "chokers",
    categoryLabel: "Choker Set",
    price: 2499,
    image: "images/aurelle-pearl-choker.jpg",
    tag: "Set",
    short: "A wide Kundan-and-pearl collar with matching chandbali earrings.",
    description: "Aurelle is a full, wide-collar choker built from rows of Kundan stones and pearl detailing, paired with matching chandbali-style earrings. It sits beautifully at the collarbone and is substantial enough to anchor an entire bridal or festive look on its own.",
    meta: { material: "Gold-plated brass, Kundan stones, pearls", closure: "Adjustable hook clasp", care: "Store flat, avoid perfume contact" }
  },
  {
    slug: "pearl-halo-earring",
    name: "Pearl Halo Earring",
    category: "earrings",
    categoryLabel: "Earrings",
    price: 849,
    image: "images/pearl-halo-earring.jpg",
    short: "An oval pearl halo crowning a delicate jhumka bell.",
    description: "A softer take on the jhumka — an oval pearl-halo stud sits above a delicate gold bell, with a single pearl chain trailing below. Understated enough for daily festive wear, detailed enough to feel special.",
    meta: { material: "Gold-plated brass, pearls", closure: "Push-back with hook", care: "Keep dry, store in pouch" }
  },
  {
    slug: "celeste-earring",
    name: "Celeste Earring",
    category: "earrings",
    categoryLabel: "Earrings",
    price: 879,
    image: "images/celeste-earring.jpg",
    short: "Mirror-cut studs over pearl-trimmed jhumka bells.",
    description: "Celeste pairs a clean mirror-cut rectangular stud with a pearl-edged jhumka bell and long trailing chain — a modern silhouette with traditional detailing at its core. A versatile piece that moves easily between festive and everyday occasions.",
    meta: { material: "Gold-plated brass, mirror stones, pearls", closure: "Push-back with hook", care: "Keep dry, store in pouch" }
  },
  {
    slug: "pearl-drop-bracelet",
    name: "Pearl Drop Bracelet",
    category: "bracelets",
    categoryLabel: "Bracelet",
    price: 599,
    image: "images/pearl-drop-bracelet.jpg",
    short: "Opal-hued drops framed with tiny pearl clusters, on a fine gold chain.",
    description: "Soft opalescent drops alternate with clusters of tiny pearls along a fine gold chain — delicate enough for daily wear, detailed enough to catch a second glance. Pairs beautifully stacked with the Fleur Crystal or Blush Clover bracelet.",
    meta: { material: "Gold-plated brass, glass stones, pearls", closure: "Lobster clasp, adjustable", care: "Water resistant, tarnish resistant" }
  },
  {
    slug: "blush-clover-bracelet",
    name: "Blush Clover Bracelet",
    category: "bracelets",
    categoryLabel: "Bracelet",
    price: 609,
    image: "images/blush-clover-bracelet.jpg",
    short: "Clover-shaped clusters of crystal and pearl in a row.",
    description: "A dainty line of clover-shaped clusters, each set with crystal and pearl, linked along a fine gold chain. Light enough to layer, pretty enough to wear alone.",
    meta: { material: "Gold-plated brass, crystals, pearls", closure: "Lobster clasp, adjustable", care: "Water resistant, tarnish resistant" }
  },
  {
    slug: "fleur-crystal-bracelet",
    name: "Fleur Crystal Bracelet",
    category: "bracelets",
    categoryLabel: "Bracelet",
    price: 589,
    image: "images/fleur-crystal-bracelet.jpg",
    short: "Diamond-cut crystal florets bordered in seed pearls.",
    description: "Faceted crystal florets, each bordered in tiny seed pearls, link together into a bracelet with serious sparkle. A refined everyday-luxury piece that photographs beautifully in any light.",
    meta: { material: "Gold-plated brass, crystals, pearls", closure: "Lobster clasp, adjustable", care: "Water resistant, tarnish resistant" }
  },
  {
    slug: "crystal-bloom-ring",
    name: "Crystal Bloom Ring",
    category: "rings",
    categoryLabel: "Ring",
    price: 499,
    image: "images/crystal-bloom-ring.jpg",
    short: "A full crystal-petal bloom set in warm gold.",
    description: "An oversized floral bloom built entirely from faceted crystal petals, set in warm gold. A true statement ring that needs nothing else around it.",
    meta: { material: "Gold-plated brass, crystals", fit: "Adjustable band, one size fits most", care: "Keep dry, avoid harsh chemicals" }
  },
  {
    slug: "crimson-pearl-ring",
    name: "Crimson Pearl Ring",
    category: "rings",
    categoryLabel: "Ring",
    price: 509,
    image: "images/crimson-pearl-ring.jpg",
    short: "A deep-red emerald-cut stone framed in a halo of pearls.",
    description: "A bold, deep-crimson emerald-cut centre stone set in gold, surrounded by a full halo of tiny pearls. Rich, jewel-toned, and made to be noticed.",
    meta: { material: "Gold-plated brass, glass stone, pearls", fit: "Adjustable band, one size fits most", care: "Keep dry, avoid harsh chemicals" }
  },
  {
    slug: "petalia-ring",
    name: "Petalia Ring",
    category: "rings",
    categoryLabel: "Ring",
    price: 499,
    image: "images/petalia-ring.jpg",
    short: "A bloom of elegance, crafted to shine.",
    description: "Layered rows of clear crystal petals build into a full, faceted bloom — Petalia catches light from every angle. A striking everyday-statement ring that pairs beautifully with the rest of the Kundan edit.",
    meta: { material: "Gold-plated brass, crystals", fit: "Adjustable band, one size fits most", care: "Keep dry, avoid harsh chemicals" }
  },
  {
    slug: "pearl-drop-haathphool",
    name: "Pearl Drop Haathphool",
    category: "haathphool",
    categoryLabel: "Haathphool",
    price: 1099,
    image: "images/pearl-drop-haathphool.jpg",
    short: "A floret chain of Kundan and pearl, from ring to wrist.",
    description: "A traditional hand-harness linking a floret-set Kundan and pearl chain from a ring to a beaded bracelet band. Finished with a delicate extension chain for a secure, comfortable fit on any hand size — perfect for bridal parties and festive dressing.",
    meta: { material: "Gold-plated brass, Kundan stones, pearls", fit: "Adjustable ring & wrist chain", care: "Store flat, handle gently" }
  },
  {
    slug: "florae-haathphool",
    name: "Florae Haathphool",
    category: "haathphool",
    categoryLabel: "Haathphool",
    price: 1089,
    image: "images/florae-haathphool.jpg",
    short: "Floret links leading to a bold square-cut crystal cascade.",
    description: "Florae pairs delicate floret-and-pearl links with a bold cascade of square-cut crystal stones down the back of the hand — a striking mix of dainty and dramatic in one piece.",
    meta: { material: "Gold-plated brass, crystals, pearls", fit: "Adjustable ring & wrist chain", care: "Store flat, handle gently" }
  },
  {
    slug: "petalia-drop-haathphool",
    name: "Petalia Drop Haathphool",
    category: "haathphool",
    categoryLabel: "Haathphool",
    price: 1099,
    image: "images/petalia-drop-haathphool.jpg",
    short: "Kundan florets flowing into a square-crystal wrist cascade.",
    description: "A hand-harness in two acts: soft floret and pearl clusters along the fingers, opening into a bold line of square Kundan stones along the wrist. Detailed, adjustable, and made for a full bridal hand look.",
    meta: { material: "Gold-plated brass, Kundan stones, pearls", fit: "Adjustable ring & wrist chain", care: "Store flat, handle gently" }
  }
];

const STACKS = [
  {
    slug: "boss-girl-stack",
    name: "The Boss Girl Stack",
    tagline: "Power. Grace. Gold.",
    image: "images/stack-boss-girl.jpg",
    description: "Bold snake motifs, sculptural bands and a chain bracelet layered for a hand that means business. Statement rings that still feel wearable at your desk or on a night out.",
    features: ["Statement yet wearable", "Tarnish resistant", "Water resistant", "Everyday luxury"]
  },
  {
    slug: "girl-brunch-stack",
    name: "The Girl Brunch Stack",
    tagline: "Good food. Good mood. Great rings.",
    image: "images/stack-girl-brunch.jpg",
    description: "Swirled gold bands, a fine crystal ring and a floral charm bracelet — easy, pretty layering built for long Sunday brunches and the photos that come after.",
    features: ["Lightweight layering", "Mix & match", "Tarnish resistant", "Everyday luxury"]
  },
  {
    slug: "coffee-run-stack",
    name: "The Coffee Run Stack",
    tagline: "Minimal, gold, effortless.",
    image: "images/stack-coffee-run.jpg",
    description: "A leaf band, a hammered dome ring, a floral textured band and a single pearl-drop bracelet — quiet, minimal pieces designed to be worn every single day without a second thought.",
    features: ["Tarnish resistant", "Water resistant", "Everyday luxury"]
  }
];

function formatPrice(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

const WHATSAPP_NUMBER = "918081482055";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productWhatsappLink(product) {
  return whatsappLink(`Hi Azéle! I'd love to know more about the ${product.name} (${formatPrice(product.price)}).`);
}
