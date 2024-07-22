import { defineConfig } from "vocs";

export default defineConfig({
  description: "A modular Bitcoin Rollup-as-a-Service with a Decentralised verifier network & MPC-TSS Bridge",
  logoUrl: {
    light: "/logo/logo-light.png",
    dark: "/logo/logo-dark.png",
  },
  ogImageUrl: "https://surge-docs.vercel.app/surge-docs.png",
  font: {
    google: "Inter",
  },
  topNav: [{ text: "surge.build", link: "https://www.surge.build/" }],
  theme: {
    // accentColor: "#f56949"
    accentColor: "#f4431b",
  },
  title: "Surge Docs",
  sidebar: {
    "/": [
      {
        text: "OVERVIEW",
        items: [
          {
            text: "Introduction",
            link: "/overview/introduction",
          },
          {
            text: "Why Surge?",
            link: "/overview/why-surge",
          },
        ],
      },
      {
        text: "BASICS",
        items: [
          {
            text: "Understanding the Rollups",
            link: "/basics/understanding-the-rollups",
          },
          {
            text: "Journey of Rollups on Bitcoin",
            link: "/basics/journey-of-rollups-on-bitcoin",
          },
        ],
      },
      {
        text: "SURGE BUILDING BLOCKS",
        items: [
          {
            text: "🌟 Architecture",
            link: "/surge-building-blocks/architecture",
          },
          {
            text: "Superstack",
            link: "/surge-building-blocks/superstack",
          },
          {
            text: "↳ MPC TSS Bridge",
            link: "/surge-building-blocks/mpc-tss-bridge",
          },
          {
            text: "↳ ZKP Verifier Network",
            link: "/surge-building-blocks/zkp-verifier-network",
          },
          {
            text: "↳ Utilities",
            collapsed: true,
            items: [
              {
                text: " Overview",
                link: "/surge-building-blocks/utilities/overview",
              },
              {
                text: " Native Stable Coins",
                link: "/surge-building-blocks/utilities/native-stable-coins",
              },
              {
                text: " Oracles & Indexers",
                link: "/surge-building-blocks/utilities/oracles-and-indexers",
              },
              {
                text: " Bridge Ordinals and Runes",
                link: "/surge-building-blocks/utilities/bridge-ordinals-and-runes",
              },
            ],
          },
          {
            text: "↳ Customizations",
            collapsed: true,
            items: [
              {
                text: " Decentralized Sequencer",
                link: "/surge-building-blocks/customizations/decentralized-sequencer",
              },
              {
                text: " Native Gas Token",
                link: "/surge-building-blocks/customizations/native-gas-token",
              },
              {
                text: " Alternative Data Availability",
                link: "/surge-building-blocks/customizations/alternative-data-availability",
              },
            ],
          },
          // commenting this as of now since we 'll be adding this in future
          // {
          //   text: "#️⃣ Bitcoin ZK Rollups",
          //   link: "/surge-building-blocks/bitcoin-zk-rollups",
          // },
        ],
      },
      {
        text: "MORE READ",
        items: [
          {
            text: "Upcoming Bitcoin L2's",
            link: "/more-read/upcoming-bitcoin-l2s",
          },
          {
            text: "Bitcoin as a Settlement Layer",
            collapsed: true,
            items: [
              {
                text: "Overview",
                link: "/basics/bitcoin-as-a-settlement-layer/overview",
              },
              {
                text: "Finality",
                link: "/basics/bitcoin-as-a-settlement-layer/finality",
              },
              {
                text: "Shared Security",
                collapsed: true,
                items: [
                  {
                    text: "Bitcoin Shared Security",
                    link: "/basics/bitcoin-as-a-settlement-layer/shared-security/bitcoin-shared-security",
                  },
                  {
                    text: "Shared Security Protocol",
                    link: "/basics/bitcoin-as-a-settlement-layer/shared-security/shared-security-protocol",
                  },
                ],
              },
              {
                text: "BitVM",
                link: "/basics/bitcoin-as-a-settlement-layer/bitvm",
              },
            ],
          },
          {
            text: "Attempts to Scale Bitcoin",
            link: "/basics/attempts-to-scale-bitcoin",
          },
          {
            text: "How RaaS Interface will Evolve?",
            link: "/more-read/how-raas-interface-will-evolve",
          },
          // {
          //   text: "Bitcoin Scaling Trilemma",
          //   link: "/more-read/bitcoin-scaling-trilemma",
          // },
          // {
          //   text: "How does a Bitcoin Transaction Work?",
          //   link: "/more-read/how-does-a-bitcoin-transaction-work",
          // },
          // {
          //   text: "Advantages of Choosing MPC TSS Over Alternative Methods",
          //   link: "/more-read/advantages-of-choosing-mpc-tss-over-alternative-methods",
          // },
        ],
      },
      {
        text: "USERS TOOLING",
        items: [
          {
            text: "Node Setup Guide",
            link: "/users-tooling/node-setup-guide",
          },
          {
            text: "Run a Validator Node",
            link: "/users-tooling/run-a-validator-node",
          },
        ],
      },
      {
        text: "RESOURCES",
        items: [
          {
            text: "Quick Links",
            link: "/resources/quick-links",
          },
          {
            text: "Branding and Logos",
            link: "/resources/branding-and-logos",
          },
          {
            text: "Community Guidelines",
            link: "/resources/community-guidelines",
          },
        ],
      },
    ],
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/surgebuild/",
    },
    {
      icon: "x",
      link: "https://x.com/surgebuild",
    },
    {
      icon: "telegram",
      link: "https://t.me/surgebuild",
    },
  ],
});
