import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductTabs from "../ProductTabs/ProductTabs";
import "./ProductDetails.css";
import { BsMoon, BsCloudSnow, BsCloudSun, BsSun, BsBoxSeam, BsArrowLeft, BsCart } from "react-icons/bs";
import { LuSunDim } from "react-icons/lu";
import { TfiTruck } from "react-icons/tfi";

import yellow1 from '../../assets/ski444.webp'; 
import yellow2 from '../../assets/ski4.webp';
import yellow3 from '../../assets/ski44.webp';
import lenses from '../../assets/image3.png';
import lens1 from '../../assets/lenses.png';
import lens2 from '../../assets/lenses1.png';
import lens3 from '../../assets/lenses2.png';
import lens4 from '../../assets/lenses3.png';
import lens5 from '../../assets/lenses4.png';
import lens6 from '../../assets/lenses5.png';

import sun from "../../assets/sun1.webp";
import sun1 from "../../assets/sun11.webp";
import sun2 from "../../assets/sun111.webp";
import sun3 from "../../assets/sun2.webp";
import sun4 from "../../assets/sun22.webp";
import sun5 from "../../assets/sun222.webp";
import sun6 from "../../assets/sun3.webp";
import sun7 from "../../assets/sun33.webp";
import sun8 from "../../assets/sun333.webp";
import sun9 from "../../assets/sun4.webp";
import sun10 from "../../assets/sun44.webp";
import sun11 from "../../assets/sun444.webp";
import sun12 from "../../assets/sun5.webp";
import sun13 from "../../assets/sun55.webp";
import sun14 from "../../assets/sun555.webp";
import sun15 from "../../assets/sun6.webp";
import sun16 from "../../assets/sun66.webp";
import sun17 from "../../assets/sun666.webp";
import sun18 from "../../assets/sun7.webp";
import sun19 from "../../assets/sun77.webp";
import sun20 from "../../assets/sun777.webp";

import sport1 from "../../assets/sport1.webp";
import sport2 from "../../assets/sport11.webp";
import sport3 from "../../assets/sport111.webp";
import sport4 from "../../assets/sport2.webp";
import sport5 from "../../assets/sport22.webp";
import sport6 from "../../assets/sport222.webp";
import sport7 from "../../assets/sport3.webp";
import sport8 from "../../assets/sport33.webp";
import sport9 from "../../assets/sport333.webp";
import sport10 from "../../assets/sport4.webp";
import sport11 from "../../assets/sport44.webp";
import sport12 from "../../assets/sport444.webp";
import sport13 from "../../assets/sport5.webp";
import sport14 from "../../assets/sport55.webp";
import sport15 from "../../assets/sport555.webp";

import basic1 from "../../assets/basic1.webp";
import basic2 from "../../assets/basic11.webp";
import basic3 from "../../assets/basic3.webp";
import basic4 from "../../assets/basic2.webp";
import basic5 from "../../assets/basic22.webp";
import basic6 from "../../assets/basic33.webp";
import basic7 from "../../assets/basic4.webp";
import basic8 from "../../assets/basic44.webp";
import basic9 from "../../assets/basic5.webp";
import basic10 from "../../assets/basic55.webp";

import ski1 from "../../assets/ski1.webp";
import ski2 from "../../assets/ski11.webp";
import ski3 from "../../assets/ski111.webp";
import ski4 from "../../assets/ski2.webp";
import ski5 from "../../assets/ski22.webp";
import ski6 from "../../assets/ski222.webp";
import ski7 from "../../assets/ski3.webp";
import ski8 from "../../assets/ski33.webp";
import ski9 from "../../assets/ski333.webp";
import ski10 from "../../assets/ski444.webp";
import ski11 from "../../assets/ski4.webp";
import ski12 from "../../assets/ski44.webp";
import ski13 from "../../assets/ski5.webp";
import ski14 from "../../assets/ski55.webp";
import ski15 from "../../assets/ski555.webp";

import down1 from "../../assets/down1.webp";
import down2 from "../../assets/down11.webp";
import down3 from "../../assets/down111.webp";
import down4 from "../../assets/down2.webp";
import down5 from "../../assets/down22.webp";
import down6 from "../../assets/down222.webp";
import down7 from "../../assets/down3.webp";
import down8 from "../../assets/down33.webp";
import down9 from "../../assets/down333.webp";

import len1 from "../../assets/len1.webp";
import len2 from "../../assets/len2.webp";
import len3 from "../../assets/len3.webp";
import len4 from "../../assets/len4.webp";
import len5 from "../../assets/len5.webp";
import len6 from "../../assets/len6.webp";
import len7 from "../../assets/len7.webp";

import acs1 from "../../assets/acs1.webp";
import acs2 from "../../assets/acs2.webp";
import acs3 from "../../assets/acs3.webp";
import acs4 from "../../assets/acs4.webp";
import acs5 from "../../assets/acs5.webp";
import acs6 from "../../assets/acs6.webp";
import acs7 from "../../assets/acs7.webp";

const allProducts = [
  {
    id: "slush",
    name: "The SLUSH",
    category: "Sunglasses",
    price: "79,99 €",
    image: sun,
    thumbnails: [sun1, sun2, sun],
    description: "Premium polarized sunglasses with UV400 protection",
    features: [
      "Polarized lenses for reduced glare",
      "UV400 protection",
      "Lightweight TR90 frame",
      "Adjustable nose pads",
      "Scratch-resistant coating"
    ]
  },
  {
    id: "whoop",
    name: "The WHOOP",
    category: "Sunglasses",
    price: "69,99 €",
    image: sun3,
    thumbnails: [sun4, sun5, sun3],
    description: "Sport sunglasses with photochromatic lenses",
    features: [
      "Photochromatic lenses",
      "Impact-resistant polycarbonate",
      "Anti-slip temple tips",
      "Ventilated frame",
      "Interchangeable lenses"
    ]
  },
  {
    id: "slush-pro",
    name: "The SLUSH Pro",
    category: "Sunglasses",
    price: "89,99 €",
    image: sun6,
    thumbnails: [sun7, sun8, sun6],
    description: "Professional grade polarized sunglasses",
    features: [
      "Polarized lenses",
      "Hydrophobic coating",
      "Memory metal hinges",
      "Premium case included",
      "Lifetime warranty"
    ]
  },
  {
    id: "luna",
    name: "The Luna",
    category: "Sunglasses",
    price: "74,99 €",
    image: sun9,
    thumbnails: [sun10, sun11, sun9],
    description: "Elegant sunglasses with mirrored lenses",
    features: [
      "Mirrored lenses",
      "Ultra-lightweight frame",
      "Blue light filter",
      "Spring hinges",
      "Fashion design"
    ]
  },
  {
    id: "iris",
    name: "The Iris",
    category: "Sunglasses",
    price: "82,99 €",
    image: sun12,
    thumbnails: [sun13, sun14, sun12],
    description: "Aviation style sunglasses",
    features: [
      "G-15 lenses",
      "Metal frame",
      "Classic aviator style",
      "Glass lenses",
      "Premium packaging"
    ]
  },
  {
    id: "muse",
    name: "The MUSE",
    category: "Sunglasses",
    price: "76,99 €",
    image: sun15,
    thumbnails: [sun16, sun17, sun15],
    description: "Designer sunglasses with gradient lenses",
    features: [
      "Gradient lenses",
      "Acetate frame",
      "Hand-polished finish",
      "Customizable",
      "Signature case"
    ]
  },
  {
    id: "icon",
    name: "The Icon",
    category: "Sunglasses",
    price: "94,99 €",
    image: sun18,
    thumbnails: [sun19, sun20, sun18],
    description: "Limited edition luxury sunglasses",
    features: [
      "Carl Zeiss lenses",
      "Titanium frame",
      "Handcrafted in Italy",
      "Limited edition",
      "Presentation box"
    ]
  },
  {
    id: "rush-half",
    name: "Rush Half Frame",
    category: "Sport",
    price: "64,99 €",
    image: sport1,
    thumbnails: [sport2, sport3, sport1],
    description: "Sport glasses with half frame design",
    features: [
      "Half frame design",
      "Adjustable nose mount",
      "UV400 protection",
      "Unique size",
      "Sport-oriented"
    ]
  },
  {
    id: "rush-full",
    name: "Rush Full Frame",
    category: "Sport",
    price: "69,99 €",
    image: sport4,
    thumbnails: [sport5, sport6, sport4],
    description: "Full frame sport glasses",
    features: [
      "Full frame protection",
      "Wraparound design",
      "Anti-fog coating",
      "Ventilation system",
      "Sport strap included"
    ]
  },
  {
    id: "charge-full",
    name: "Charge Full Frame",
    category: "Sport",
    price: "72,99 €",
    image: sport7,
    thumbnails: [sport8, sport9, sport7],
    description: "High-performance sport glasses",
    features: [
      "Aerodynamic design",
      "Hydrophobic coating",
      "Interchangeable lenses",
      "Adjustable temples",
      "Carrying case"
    ]
  },
  {
    id: "rush-photochromatic",
    name: "Rush Half Frame Photochromatic",
    category: "Sport",
    price: "79,99 €",
    image: sport10,
    thumbnails: [sport11, sport12, sport10],
    description: "Photochromatic sport glasses",
    features: [
      "Photochromatic lenses",
      "Light adjusting",
      "Half frame design",
      "All-weather use",
      "Impact resistant"
    ]
  },
  {
    id: "hawk",
    name: "The Hawk",
    category: "Sport",
    price: "84,99 €",
    image: sport13,
    thumbnails: [sport14, sport15, sport13],
    description: "Premium sport glasses",
    features: [
      "4 frame colors available",
      "Polarized lenses",
      "Premium materials",
      "Enhanced ventilation",
      "Professional grade"
    ]
  },
  {
    id: "falcon",
    name: "The Falcon",
    category: "Sport",
    price: "89,99 €",
    image: sport1,
    thumbnails: [sport2, sport3, sport1],
    description: "Advanced sport glasses",
    features: [
      "3 frame colors available",
      "Multi-layer lenses",
      "Enhanced peripheral vision",
      "Quick lens change system",
      "Competition ready"
    ]
  },
  {
    id: "mtb-pro",
    name: "MTB Pro",
    category: "Cycling",
    price: "75,99 €",
    image: basic1,
    thumbnails: [basic2, basic1, basic1],
    description: "Professional mountain bike glasses",
    features: [
      "Impact resistant lenses",
      "Ventilation system",
      "Adjustable nose bridge",
      "Sweat-resistant coating",
      "Quick lens change"
    ]
  },
  {
    id: "road-elite",
    name: "Road Elite",
    category: "Cycling",
    price: "69,99 €",
    image: basic4,
    thumbnails: [basic5, basic4, basic4],
    description: "Road cycling glasses",
    features: [
      "Aerodynamic design",
      "Lightweight frame",
      "UV400 protection",
      "Anti-fog coating",
      "Carrying case included"
    ]
  },
  {
    id: "trail-master",
    name: "Trail Master",
    category: "Cycling",
    price: "72,99 €",
    image: basic3,
    thumbnails: [basic6, basic3, basic3],
    description: "Trail riding glasses",
    features: [
      "Wraparound protection",
      "Enhanced peripheral vision",
      "Interchangeable lenses",
      "Adjustable temples",
      "Durable construction"
    ]
  },
  {
    id: "urban-rider",
    name: "Urban Rider",
    category: "Cycling",
    price: "65,99 €",
    image: basic7,
    thumbnails: [basic8, basic7, basic7],
    description: "Urban cycling glasses",
    features: [
      "Stylish design",
      "Lightweight construction",
      "Scratch-resistant lenses",
      "Comfort fit",
      "Everyday use"
    ]
  },
  {
    id: "gravel-explorer",
    name: "Gravel Explorer",
    category: "Cycling",
    price: "79,99 €",
    image: basic9,
    thumbnails: [basic10, basic9, basic9],
    description: "Gravel riding glasses",
    features: [
      "All-weather performance",
      "Photochromatic lenses",
      "Dust protection",
      "Adjustable nose pads",
      "Premium materials"
    ]
  },
  {
    id: "alpine-pro",
    name: "Alpine Pro",
    category: "Ski",
    price: "129,99 €",
    image: ski1,
    thumbnails: [ski2, ski3, ski1],
    description: "Professional alpine skiing goggles",
    features: [
      "Spherical lenses",
      "Anti-fog coating",
      "Triple layer foam",
      "Wide field of view",
      "UV400 protection"
    ]
  },
  {
    id: "freeride-elite",
    name: "Freeride Elite",
    category: "Ski",
    price: "139,99 €",
    image: ski4,
    thumbnails: [ski5, ski6, ski4],
    description: "Freeride skiing goggles",
    features: [
      "Cylindrical lenses",
      "Quick lens change system",
      "Enhanced ventilation",
      "Helmet compatible",
      "All-weather performance"
    ]
  },
  {
    id: "slalom-race",
    name: "Slalom Race",
    category: "Ski",
    price: "149,99 €",
    image: ski7,
    thumbnails: [ski8, ski9, ski7],
    description: "Competition ski goggles",
    features: [
      "Aerodynamic design",
      "High contrast lenses",
      "Competition strap",
      "Peripheral vision optimized",
      "Professional grade"
    ]
  },
  {
    id: "powder-master",
    name: "Powder Master",
    category: "Ski",
    price: "134,99 €",
    image: ski10,
    thumbnails: [ski11, ski12, ski10],
    description: "Powder skiing goggles",
    features: [
      "Extra-wide view",
      "Anti-fog ventilation",
      "Thermal insulation",
      "Snow-specific lenses",
      "Comfort fit"
    ]
  },
  {
    id: "backcountry-x",
    name: "Backcountry X",
    category: "Ski",
    price: "159,99 €",
    image: ski13,
    thumbnails: [ski14, ski15, ski13],
    description: "Backcountry skiing goggles",
    features: [
      "Photochromatic lenses",
      "Lightweight construction",
      "Enhanced durability",
      "All-mountain performance",
      "Premium accessories"
    ]
  },
  {
    id: "dh-extreme",
    name: "DH Extreme",
    category: "MTB",
    price: "119,99 €",
    image: down1,
    thumbnails: [down2, down3, down1],
    description: "Downhill mountain bike goggles",
    features: [
      "Impact resistant",
      "Wide field of view",
      "Quick lens change",
      "Helmet integration",
      "Ventilation system"
    ]
  },
  {
    id: "enduro-pro",
    name: "Enduro Pro",
    category: "MTB",
    price: "109,99 €",
    image: down4,
    thumbnails: [down5, down6, down4],
    description: "Enduro riding goggles",
    features: [
      "Medium field of view",
      "Anti-fog coating",
      "Adjustable strap",
      "Dust protection",
      "Lightweight"
    ]
  },
  {
    id: "xc-light",
    name: "XC Light",
    category: "MTB",
    price: "99,99 €",
    image: down7,
    thumbnails: [down8, down9, down7],
    description: "Cross-country goggles",
    features: [
      "Lightweight design",
      "Enhanced ventilation",
      "Quick lens access",
      "Sweat management",
      "All-day comfort"
    ]
  },
  {
    id: "polarized-pro",
    name: "Polarized PRO",
    category: "Lenses",
    price: "49,99 €",
    image: len1,
    thumbnails: [len1, len1, len1],
    description: "Premium polarized replacement lenses",
    features: [
      "99% glare reduction",
      "UV400 protection",
      "Scratch resistant",
      "Easy installation",
      "Compatibility guarantee"
    ]
  },
  {
    id: "photochromatic",
    name: "Photochromatic",
    category: "Lenses",
    price: "59,99 €",
    image: len2,
    thumbnails: [len2, len2, len2],
    description: "Light-adjusting lenses",
    features: [
      "Auto-adjusting tint",
      "All-weather use",
      "Fast transition",
      "Clear to dark",
      "Premium quality"
    ]
  },
  {
    id: "mirror-coated",
    name: "Mirror Coated",
    category: "Lenses",
    price: "44,99 €",
    image: len3,
    thumbnails: [len3, len3, len3],
    description: "Mirrored replacement lenses",
    features: [
      "Mirrored finish",
      "Style enhancement",
      "Glare reduction",
      "Durable coating",
      "Easy to clean"
    ]
  },
  {
    id: "blue-light-filter",
    name: "Blue Light Filter",
    category: "Lenses",
    price: "34,99 €",
    image: len4,
    thumbnails: [len4, len4, len4],
    description: "Blue light filtering lenses",
    features: [
      "Reduces eye strain",
      "Blocks harmful blue light",
      "Clear vision",
      "Digital screen protection",
      "Comfort all day"
    ]
  },
  {
    id: "night-vision",
    name: "Night Vision",
    category: "Lenses",
    price: "39,99 €",
    image: len5,
    thumbnails: [len5, len5, len5],
    description: "Yellow tint for low light",
    features: [
      "Enhanced contrast in low light",
      "Reduces glare at night",
      "Improves depth perception",
      "Perfect for dusk/dawn",
      "Clear vision in fog"
    ]
  },
  {
    id: "anti-fog",
    name: "Anti-Fog",
    category: "Lenses",
    price: "27,99 €",
    image: len6,
    thumbnails: [len6, len6, len6],
    description: "Anti-fog coating lenses",
    features: [
      "Prevents fogging",
      "Long-lasting coating",
      "Easy to clean",
      "Works in humid conditions",
      "Perfect for sports"
    ]
  },
  {
    id: "clear-lens",
    name: "Clear Lens",
    category: "Lenses",
    price: "27,99 €",
    image: len7,
    thumbnails: [len7, len7, len7],
    description: "Clear protective lenses",
    features: [
      "100% clear vision",
      "Impact protection",
      "UV400 protection",
      "Dust and wind protection",
      "Indoor and outdoor use"
    ]
  },
  {
    id: "falcon-lens-1",
    name: "The FALCON Lens",
    category: "Lenses",
    price: "29,99 €",
    image: lens1,
    thumbnails: [lens1, lens1, lens1],
    description: "Black (polarized, Cat. 4)",
    features: [
      "Polarized lenses for reduced glare",
      "UV400 protection",
      "Cat. 4 filter category",
      "Compatible with The FALCON",
      "Easy installation"
    ]
  },
  {
    id: "falcon-lens-2",
    name: "The FALCON Lens",
    category: "Lenses",
    price: "29,99 €",
    image: lens2,
    thumbnails: [lens2, lens2, lens2],
    description: "Blue (polarized, Cat. 3)",
    features: [
      "Polarized lenses for reduced glare",
      "UV400 protection",
      "Cat. 3 filter category",
      "Compatible with The FALCON",
      "Easy installation"
    ]
  },
  {
    id: "falcon-lens-3",
    name: "The FALCON Lens",
    category: "Lenses",
    price: "29,99 €",
    image: lens3,
    thumbnails: [lens3, lens3, lens3],
    description: "Red (polarized, Cat. 2)",
    features: [
      "Polarized lenses for reduced glare",
      "UV400 protection",
      "Cat. 2 filter category",
      "Compatible with The FALCON",
      "Easy installation"
    ]
  },
  {
    id: "falcon-lens-4",
    name: "The FALCON Lens",
    category: "Lenses",
    price: "29,99 €",
    image: lens4,
    thumbnails: [lens4, lens4, lens4],
    description: "Orange (non-polarized, Cat. 1)",
    features: [
      "Non-polarized lenses",
      "UV400 protection",
      "Cat. 1 filter category",
      "Compatible with The FALCON",
      "Easy installation"
    ]
  },
  {
    id: "falcon-lens-5",
    name: "The FALCON Lens",
    category: "Lenses",
    price: "29,99 €",
    image: lens5,
    thumbnails: [lens5, lens5, lens5],
    description: "Purple-Green (non-polarized Cat. 1)",
    features: [
      "Non-polarized lenses",
      "UV400 protection",
      "Cat. 1 filter category",
      "Compatible with The FALCON",
      "Easy installation"
    ]
  },
  {
    id: "falcon-lens-6",
    name: "The FALCON Lens",
    category: "Lenses",
    price: "24,99 €",
    image: lens6,
    thumbnails: [lens6, lens6, lens6],
    description: "Red (polarized, Cat. 2)",
    features: [
      "Polarized lenses for reduced glare",
      "UV400 protection",
      "Cat. 2 filter category",
      "Compatible with The FALCON",
      "Easy installation"
    ]
  },
  {
    id: "premium-case",
    name: "Premium Case",
    category: "Accessories",
    price: "29,99 €",
    image: acs1,
    thumbnails: [acs1, acs1, acs1],
    description: "Hard case for eyewear protection",
    features: [
      "Hard shell protection",
      "Soft interior lining",
      "Compact design",
      "Travel ready",
      "Lifetime warranty"
    ]
  },
  {
    id: "lens-cleaner",
    name: "Lens Cleaner",
    category: "Accessories",
    price: "14,99 €",
    image: acs2,
    thumbnails: [acs2, acs2, acs2],
    description: "Professional lens cleaning kit",
    features: [
      "Anti-fog solution",
      "Microfiber cloth",
      "Streak-free formula",
      "Safe for all lenses",
      "Portable size"
    ]
  },
  {
    id: "strap-set",
    name: "Strap Set",
    category: "Accessories",
    price: "19,99 €",
    image: acs3,
    thumbnails: [acs3, acs3, acs3],
    description: "Replacement straps for goggles",
    features: [
      "Quick release buckle",
      "Adjustable length",
      "Sweat resistant",
      "Multiple colors",
      "Easy installation"
    ]
  },
  {
    id: "nose-pads",
    name: "Nose Pads",
    category: "Accessories",
    price: "9,99 €",
    image: acs4,
    thumbnails: [acs4, acs4, acs4],
    description: "Replacement nose pads",
    features: [
      "Soft silicone material",
      "Comfortable fit",
      "Easy to replace",
      "Multiple sizes",
      "Hypoallergenic"
    ]
  },
  {
    id: "temple-tips",
    name: "Temple Tips",
    category: "Accessories",
    price: "7,99 €",
    image: acs5,
    thumbnails: [acs5, acs5, acs5],
    description: "Replacement temple tips",
    features: [
      "Anti-slip design",
      "Comfortable fit",
      "Easy installation",
      "Durable material",
      "Improves grip"
    ]
  },
  {
    id: "carrying-bag",
    name: "Carrying Bag",
    category: "Accessories",
    price: "5,99 €",
    image: acs6,
    thumbnails: [acs6, acs6, acs6],
    description: "Soft carrying bag",
    features: [
      "Soft microfiber lining",
      "Compact design",
      "Protects from scratches",
      "Lightweight",
      "Perfect for travel"
    ]
  },
  {
    id: "microfiber-cloth",
    name: "Microfiber Cloth",
    category: "Accessories",
    price: "4,99 €",
    image: acs7,
    thumbnails: [acs7, acs7, acs7],
    description: "Cleaning microfiber cloth",
    features: [
      "Streak-free cleaning",
      "Soft and gentle",
      "Reusable",
      "Washable",
      "Perfect for all lenses"
    ]
  },
  {
    id: "default",
    name: "THE TROOP EVO",
    category: "Sport",
    price: "79,99 €",
    image: yellow1,
    thumbnails: [yellow1, yellow2, yellow3],
    description: "Swiss-Engineered sport glasses",
    features: [
      "Swiss-Engineered TR 90 Material",
      "Lightweight",
      "Ultra-Flexible Frame",
      "Shockproof",
      "Magnetic Lens Replacement System",
      "Super Anti-Fog Technology"
    ]
  }
];

const getProductById = (id) => {
  const product = allProducts.find(p => p.id === id);
  return product || allProducts.find(p => p.id === "default");
};

const getSimilarProducts = (currentProductId, currentCategory) => {
  return allProducts
    .filter(product => product.id !== currentProductId && product.category === currentCategory)
    .slice(0, 3);
};

const getVisibilityInfo = (productCategory, productName) => {
  const visibilityData = {
    Sunglasses: {
      levels: [0, 0, 0, 100, 80],
      description: "Optimal for sunny weather",
      bestCondition: 3
    },
    Sport: {
      levels: [20, 40, 80, 100, 60],
      description: "Universal for active sports",
      bestCondition: 3
    },
    Cycling: {
      levels: [30, 50, 100, 90, 40],
      description: "Best for mixed conditions",
      bestCondition: 2
    },
    Ski: {
      levels: [10, 100, 80, 60, 90],
      description: "Optimal for snow conditions",
      bestCondition: 1
    },
    MTB: {
      levels: [30, 40, 100, 80, 50],
      description: "Best for mixed conditions",
      bestCondition: 2
    },
    Lenses: getLensVisibilityInfo(productName),
    Accessories: {
      levels: [0, 0, 0, 0, 0],
      description: "Accessories don't affect visibility",
      bestCondition: -1
    }
  };

  return visibilityData[productCategory] || {
    levels: [50, 50, 50, 50, 50],
    description: "Universal visibility",
    bestCondition: 2
  };
};

const getLensVisibilityInfo = (lensName) => {
  const lensVisibilityData = {
    "Polarized PRO": {
      levels: [0, 0, 0, 100, 90],
      description: "Best for sunny and glacier conditions",
      bestCondition: 3
    },
    "Photochromatic": {
      levels: [40, 70, 100, 100, 90],
      description: "Auto-adjusts to all conditions",
      bestCondition: 2
    },
    "Mirror Coated": {
      levels: [0, 0, 0, 100, 80],
      description: "Optimal for bright sunny conditions",
      bestCondition: 3
    },
    "Blue Light Filter": {
      levels: [80, 60, 70, 30, 20],
      description: "Best for indoor and digital use",
      bestCondition: 0
    },
    "Night Vision": {
      levels: [100, 90, 70, 10, 20],
      description: "Optimal for low light and night",
      bestCondition: 0
    },
    "Anti-Fog": {
      levels: [70, 100, 90, 60, 80],
      description: "Best for humid and snowy conditions",
      bestCondition: 1
    },
    "Clear Lens": {
      levels: [100, 80, 90, 50, 60],
      description: "Perfect for indoor and low light",
      bestCondition: 0
    },
    "The FALCON Lens": {
      levels: [0, 0, 0, 100, 80],
      description: "Polarized lenses for sunny conditions",
      bestCondition: 3
    },
    default: {
      levels: [50, 50, 50, 50, 50],
      description: "Universal visibility",
      bestCondition: 2
    }
  };

  for (const [key, data] of Object.entries(lensVisibilityData)) {
    if (lensName.toLowerCase().includes(key.toLowerCase())) {
      return data;
    }
  }

  return lensVisibilityData.default;
};

const showToast = (message, type = 'success', duration = 1500) => {
  const existingToasts = document.querySelectorAll('.toast-notification');
  existingToasts.forEach(toast => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  });

  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  
  let icon;
  switch(type) {
    case 'success':
      icon = '✓';
      break;
    case 'error':
      icon = '✗';
      break;
    case 'info':
      icon = 'ℹ';
      break;
    case 'warning':
      icon = '⚠';
      break;
    default:
      icon = 'ℹ';
  }
  
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-content">${message}</div>
    <button class="toast-close">×</button>
    <div class="toast-progress">
      <div class="toast-progress-bar" style="animation-duration: ${duration}ms"></div>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  });
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, duration);
  
  return toast;
};

export default function ProductDetails({ onBack, productId: propProductId }) {
  const navigate = useNavigate();
  const { id: paramProductId } = useParams();
  const productId = propProductId || paramProductId || "default";
  
  const product = getProductById(productId);
  const similarProducts = getSimilarProducts(productId, product.category);
  
  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const topRef = useRef(null);

  const visibilityInfo = getVisibilityInfo(product.category, product.name);

  useEffect(() => {
    setMainImage(product.image);
    
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [productId, product.image]);

  const handleThumbClick = (image) => {
    setMainImage(image);
  };

  const handleSimilarProductClick = (similarProductId) => {
    navigate(`/product/${similarProductId}`);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = async (e) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const isAuthorized = localStorage.getItem('isAuthorized') === 'true';
    
    if (!isLoggedIn || !isAuthorized) {
      showToast("Please login to add items to cart!", 'error');
      return;
    }
    
    setIsAddingToCart(true);
    
    const priceNumber = parseFloat(product.price.replace(',', '.').replace(' €', ''));
    
    const productData = {
      id: product.id,
      name: product.name,
      price: priceNumber,
      variant: "",
      quantity: quantity,
      image: product.image
    };
    
    const addToCartEvent = new CustomEvent('add-to-cart', {
      detail: {
        productData: productData,
        quantity: quantity
      }
    });
    window.dispatchEvent(addToCartEvent);
    
    if (window.globalCart && window.globalCart.addItem) {
      window.globalCart.addItem(productData, quantity);
    }
    
    const clickPosition = {
      x: e.clientX || e.pageX || 0,
      y: e.clientY || e.pageY || 0
    };
    
    const animateEvent = new CustomEvent('animate-cart', {
      detail: {
        productName: product.name,
        position: clickPosition
      }
    });
    window.dispatchEvent(animateEvent);
    
    setTimeout(() => {
      const openCartEvent = new CustomEvent('open-cart');
      window.dispatchEvent(openCartEvent);
    }, 300);
    
    setTimeout(() => {
      showToast(`${quantity} ${product.name} added to cart!\nTotal: ${(priceNumber * quantity).toFixed(2)}€`);
      setIsAddingToCart(false);
    }, 500);
  };
  
  const handleBuyNow = async (e) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const isAuthorized = localStorage.getItem('isAuthorized') === 'true';
    
    if (!isLoggedIn || !isAuthorized) {
      showToast("Please login to make a purchase!", 'error');
      return;
    }
    
    setIsAddingToCart(true);
    
    const priceNumber = parseFloat(product.price.replace(',', '.').replace(' €', ''));
    const total = priceNumber * quantity;
    
    const productData = {
      id: product.id,
      name: product.name,
      price: priceNumber,
      variant: "",
      quantity: quantity,
      image: product.image
    };
    
    const addToCartEvent = new CustomEvent('add-to-cart', {
      detail: {
        productData: productData,
        quantity: quantity
      }
    });
    window.dispatchEvent(addToCartEvent);
    
    if (window.globalCart && window.globalCart.addItem) {
      window.globalCart.addItem(productData, quantity);
    }
    
    const clickPosition = {
      x: e.clientX || e.pageX || 0,
      y: e.clientY || e.pageY || 0
    };
    
    const animateEvent = new CustomEvent('animate-cart', {
      detail: {
        productName: product.name,
        position: clickPosition
      }
    });
    window.dispatchEvent(animateEvent);
    
    setTimeout(() => {
      const openCartEvent = new CustomEvent('open-cart');
      window.dispatchEvent(openCartEvent);
    }, 300);
    
    const orderId = `NO-${Date.now().toString().slice(-8)}`;
    const orderDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    setTimeout(() => {
      const orderMessage = `ORDER PLACED SUCCESSFULLY!\n\nProduct: ${product.name}\nQuantity: ${quantity}\nTotal: ${total.toFixed(2)}€\nOrder ID: ${orderId}\nDate: ${orderDate}\n\nThank you for your purchase!`;
      showToast(orderMessage, 'success', 2000);
      
      const savedOrders = JSON.parse(localStorage.getItem('nakedOpticsOrders') || '[]');
      savedOrders.push({
        orderId: orderId,
        date: new Date().toISOString(),
        items: [productData],
        total: total.toFixed(2)
      });
      localStorage.setItem('nakedOpticsOrders', JSON.stringify(savedOrders));
      
      setIsAddingToCart(false);
    }, 500);
  };
  
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const priceNumber = parseFloat(product.price.replace(',', '.').replace(' €', ''));

  const calculateBarWidth = () => {
    if (visibilityInfo.bestCondition === -1) return '0%';
    if (visibilityInfo.bestCondition === 0) return '20%';
    if (visibilityInfo.bestCondition === 1) return '40%';
    if (visibilityInfo.bestCondition === 2) return '60%';
    if (visibilityInfo.bestCondition === 3) return '80%';
    if (visibilityInfo.bestCondition === 4) return '100%';
    return '50%';
  };

  return (
    <section className="product-page" ref={topRef}>
      <div className="product-header">
        <button className="product-back-btn" onClick={handleBackClick}>
          <BsArrowLeft />
          <span>Go Back</span>
        </button>
      </div>

      <div className="product-container">
        <div className="product-left">
          <div className="thumbs">
            {product.thumbnails.map((thumb, index) => (
              <img 
                key={index}
                src={thumb} 
                alt={`${product.name} view ${index + 1}`} 
                className={`thumb ${mainImage === thumb ? 'active' : ''}`}
                onClick={() => handleThumbClick(thumb)}
                loading="lazy"
              />
            ))}
          </div>

          <div className="main-image">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="main-product-image" 
              loading="lazy"
            />
          </div>

          <div className="visibility">
            <p className="visibility-title">
              Best visibility on this condition:
            </p>

            <div className="visibility-bar">
              <span 
                className="active" 
                style={{ width: calculateBarWidth() }}
              />
            </div>

            <div className="visibility-icons">
              {[
                { icon: <BsMoon />, text: "Night / Indoor", level: visibilityInfo.levels[0] },
                { icon: <BsCloudSnow />, text: "Snow / Fog", level: visibilityInfo.levels[1] },
                { icon: <BsCloudSun />, text: "Cloudy Mixed", level: visibilityInfo.levels[2] },
                { icon: <LuSunDim />, text: "Sunny Day", level: visibilityInfo.levels[3] },
                { icon: <BsSun />, text: "Glacier Sun", level: visibilityInfo.levels[4] }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`vis-item ${visibilityInfo.bestCondition === index ? 'active' : ''}`}
                  title={`Effectiveness: ${item.level}%`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                  {item.level > 0 && (
                    <span className="visibility-percent">{item.level}%</span>
                  )}
                </div>
              ))}
            </div>
            
            {visibilityInfo.description && (
              <p className="visibility-description">
                {visibilityInfo.description}
              </p>
            )}
          </div>
        </div>
        
        <div className="product-right">
          <div className={`category-badge ${product.category}`}>
            {product.category}
          </div>
          
          <h1 className="product-title">{product.name}</h1>

          <p className="product-price">{product.price}</p>

          <p className="product-description">{product.description}</p>

          <ul className="product-features">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="similar-products-block">
            <p className="similar-products-title">More from {product.category}</p>
            <div className="similar-products-grid">
              {similarProducts.length > 0 ? (
                similarProducts.map((similarProduct) => (
                  <div 
                    key={similarProduct.id}
                    className="similar-product-card"
                    onClick={() => handleSimilarProductClick(similarProduct.id)}
                  >
                    <div className="similar-product-image-container">
                      <img 
                        src={similarProduct.image} 
                        alt={similarProduct.name}
                        className="similar-product-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="similar-product-info">
                      <h4 className="similar-product-name">{similarProduct.name}</h4>
                      <p className="similar-product-description">
                        {similarProduct.description}
                      </p>
                      <p className="similar-product-price">{similarProduct.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-similar-products">
                  <p>No other products in this category yet.</p>
                </div>
              )}
            </div>
          </div>

          <div className="quantity-selector">
            <p className="quantity-title">Quantity</p>
            <div className="quantity-controls">
              <button 
                className="quantity-btn" 
                onClick={() => handleQuantityChange('decrement')}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button 
                className="quantity-btn" 
                onClick={() => handleQuantityChange('increment')}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="add-to-cart-section">
            <button 
              className="add-to-cart-btn" 
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              <BsCart />
              <span>{isAddingToCart ? 'Adding...' : 'Add to Cart'}</span>
            </button>
            
            <button 
              className="buy-now-btn"
              onClick={handleBuyNow}
              disabled={isAddingToCart}
            >
              <span>{isAddingToCart ? 'Processing...' : 'Buy Now'}</span>
            </button>
            
            <p className="cart-total">Total: {(priceNumber * quantity).toFixed(2)} €</p>
          </div>

          <div className="combo active">
            <p className="combo-title">{product.name}</p>
            <p className="combo-desc">Mask + Protection case</p>
            <p className="combo-price">{product.price}</p>
          </div>

          <div className="combo">
            <p className="combo-title">{product.name} + Extra Lens</p>
            <p className="combo-desc">
              Mask + Protection case + Extra lens
            </p>
            <p className="combo-price old">{(priceNumber + 20).toFixed(2).replace('.', ',')} €</p>
            <p className="combo-price">{(priceNumber + 15).toFixed(2).replace('.', ',')} €</p>
          </div>

          <div className="accessory">
            <input type="checkbox" id="lenses-case" />
            <div className="accessory-info">
              <label htmlFor="lenses-case" className="accessory-title">Lenses case</label>
              <p className="accessory-desc">
                Want to carry more lenses without ruining them?
              </p>
            </div>
            <div className="accessory-image-price">
              <img 
                src={lenses} 
                alt="Lenses case" 
                className="lenses-case-image" 
                loading="lazy"
              />
              <div className="accessory-price-block">
                <span className="accessory-price-old">12,99 €</span>
                <span className="accessory-price">9,75 €</span>
              </div>
            </div>
          </div>

          <div className="shipping-guarantee">
            <div className="shipping-item">
              <TfiTruck />
              <span>Free shipping from 100€</span>
            </div>
            <div className="shipping-item">
              <BsBoxSeam />
              <span>30 days money back guarantee</span>
            </div>
          </div>

          <div className="product-meta">
            <div className="meta-item">
              <span className="meta-label">Category:</span>
              <span className="meta-value">{product.category}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">SKU:</span>
              <span className="meta-value">{product.id.toUpperCase()}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">In Stock:</span>
              <span className="meta-value in-stock">Available</span>
            </div>
          </div>
        </div>
      </div>
      
      <ProductTabs product={product} />
    </section>
  );
}