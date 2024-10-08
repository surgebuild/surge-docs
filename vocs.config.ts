import { defineConfig } from "vocs";

export default defineConfig({
  description:
    "A modular Bitcoin Rollup-as-a-Service with a Decentralised verifier network & MPC-TSS Bridge",
  logoUrl: {
    light: "/logo/logo-light.png",
    dark: "/logo/logo-dark.png",
  },
  ogImageUrl: "https://surge-docs.vercel.app/surge-docs.png",
  font: {
    google: "Inter",
  },
  topNav: [
    // { text: "Introduction", link: "/overview/introduction" },
    { text: "Blog", link: "https://surge.build/blog" },
    { text: "Website", link: "https://www.surge.build/" },
  ],
  theme: {
    // accentColor: "#f56949"
    accentColor: "#f4431b",
    // colorScheme: "dark",
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
            text: "Surge Stack",
            link: "/overview/surge-stack",
          },
          {
            text: "Why Surge?",
            link: "/overview/why-surge",
          },
        ],
      },
      // {
      //   text: "BASICS",
      //   items: [
      //     {
      //       text: "Understanding the Rollups",
      //       link: "/basics/understanding-the-rollups",
      //     },
      //     {
      //       text: "Evolution of Rollups on Bitcoin",
      //       link: "/basics/journey-of-rollups-on-bitcoin",
      //     },
      //   ],
      // },

      {
        text: "METALAYER",
        items: [
          {
            text: "⚡ Surge Network",
            link: "/metalayer/overview",
          },
          {
            text: "↳ Verifiers",
            link: "/metalayer/verifier",
          },
          {
            text: "↳ Signers",
            link: "/metalayer/signer",
          },
          {
            text: "↳ Indexer",
            link: "/metalayer/indexer/overview",
          },
          // {
          //   text: "↳ Indexer",
          //   collapsed: true,
          //   items: [
          //     {
          //       text: " Overview",
          //       link: "/metalayer/indexer/overview",
          //     },
          //     {
          //       text: " StableCoin",
          //       link: "/metalayer/indexer/native-stable-coins",
          //     },
          //     {
          //       text: " Oracles & Indexers",
          //       link: "/metalayer/indexer/oracles-and-indexers",
          //     },
          //     {
          //       text: " Bridge Ordinals and Runes",
          //       link: "/metalayer/indexer/bridge-ordinals-and-runes",
          //     },
          //   ],
          // },
        ],
      },
      // {
      //   text: "RDK",
      //   items: [
      //     {
      //       text: "⭐ Architecture",
      //       link: "/surge-building-blocks/architecture",
      //     },
      //     {
      //       text: "Multi VM Execution Support",
      //       link: "/surge-building-blocks/multi-vm",
      //     },
      //     {
      //       text: "Rollup Frameworks",
      //       link: "/surge-building-blocks/rollup-frameworks",
      //     },
      //     {
      //       text: "High Availability Sequencer",
      //       link: "/surge-building-blocks/high-availability-sequencer",
      //     },
      //     {
      //       text: "Customizations",
      //       collapsed: true,
      //       items: [
      //         {
      //           text: "Decentralized Sequencer",
      //           link: "/surge-building-blocks/customizations/decentralized-sequencer",
      //         },
      //         {
      //           text: " Native Gas Token",
      //           link: "/surge-building-blocks/customizations/native-gas-token",
      //         },
      //         {
      //           text: " Alternative Data Availability",
      //           link: "/surge-building-blocks/customizations/alternative-data-availability",
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        text: "MORE READ",
        items: [
          {
            text: "Bitcoin L2 Landscape",
            link: "/more-read/upcoming-bitcoin-l2s",
          },
          // {
          //   text: "Bitcoin as a Settlement Layer",
          //   collapsed: true,
          //   items: [
          //     {
          //       text: "Overview",
          //       link: "/basics/bitcoin-as-a-settlement-layer/overview",
          //     },
          //     {
          //       text: "Finality",
          //       link: "/basics/bitcoin-as-a-settlement-layer/finality",
          //     },
          //     {
          //       text: "Shared Security",
          //       collapsed: true,
          //       items: [
          //         {
          //           text: "Bitcoin Shared Security",
          //           link: "/basics/bitcoin-as-a-settlement-layer/shared-security/bitcoin-shared-security",
          //         },
          //         {
          //           text: "Shared Security Protocol",
          //           link: "/basics/bitcoin-as-a-settlement-layer/shared-security/shared-security-protocol",
          //         },
          //       ],
          //     },
          //     {
          //       text: "BitVM",
          //       link: "/basics/bitcoin-as-a-settlement-layer/bitvm",
          //     },
          //   ],
          // },
          {
            text: "Attempts to Scale Bitcoin",
            link: "/basics/attempts-to-scale-bitcoin",
          },
          // {
          //   text: "How RaaS Interface will Evolve?",
          //   link: "/more-read/how-raas-interface-will-evolve",
          // },
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
            text: "Custom Signet Node",
            link: "/users-tooling/node-setup-guide",
          },
          {
            text: "Running a Validator Node",
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
