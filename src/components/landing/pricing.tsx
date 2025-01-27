"use client";

import { FaMicrophone } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";

import { PricingSection } from "@/components/ui/pricing-section";

const defaultTiers = [
  {
    name: "Free",
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Explore your top listening for free.",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-gray-500/30 blur-2xl rounded-full" />
        <FaMicrophone className="w-7 h-7 relative z-10 text-gray-500 animate-[float_3s_ease-in-out_infinite]" />
      </div>
    ),
    features: [
      {
        name: "Top Tracks",
        description: "See your top tracks of the year.",
        included: true,
      },
      {
        name: "Top Artists",
        description: "Discover your favorite artists.",
        included: true,
      },
      {
        name: "Listening Minutes",
        description: "Check your total listening time.",
        included: true,
      },
      {
        name: "Basic Visualizations",
        description: "Share basic Wrapped stats.",
        included: false,
      },
    ],
  },
  {
    name: "Premium",
    price: {
      monthly: 15,
      yearly: 150,
    },
    description: "Unlock advanced insights and exclusive.",
    highlight: true,
    badge: "Most Popular",
    icon: (
      <div className="relative">
        <RiFlashlightFill className="w-7 h-7 relative z-10" />
      </div>
    ),
    features: [
      {
        name: "Advanced Analytics",
        description: "Get detailed listening insights.",
        included: true,
      },
      {
        name: "Custom Playlists",
        description: "Generate playlists from your stats.",
        included: true,
      },
      {
        name: "Exclusive Visualizations",
        description: "Access premium graphics.",
        included: true,
      },
      {
        name: "Year-over-Year Comparisons",
        description: "Compare your yearly stats.",
        included: true,
      },
    ],
  },
];

function PricingSections() {
  return <PricingSection tiers={defaultTiers} />;
}

export { PricingSections };
