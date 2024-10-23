import { defineConfig } from "vocs";

export default defineConfig({
  description:
    "Introducing Surge, a decentralized network that enables dApps and rollups to anchor directly to Bitcoin security with permissionless DKLs signature scheme while maintaining block consensus, interoperability, and data availability on Bitcoin.",
  logoUrl: {
    light: "/logo/surge-icon-rec-light.svg",
    dark: "/logo/surge-icon-rec-dark.svg",
  },
  ogImageUrl: "https://docs.surge.build/assets/Meta.png",
  font: {
    google: "Inter",
  },
  topNav: [
    { text: "Blog", link: "https://surge.build/blog" },
    {
      text: "Bitcoin Playground",
      link: "https://surge.build/playground",
    },
    { text: "Website", link: "https://www.surge.build/" },
  ],
  theme: {
    // accentColor: "#f56949"
    accentColor: "#f4431b",
    // colorScheme: "dark",
  },
  title: "Surge - Bitcoin's ultimate scaling MetaLayer",
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
            text: "Evolution of Bitcoin Scalability",
            link: "/overview/bitcoin-scalability",
          },
          {
            text: "BTCFi - The New Bitcoin Frontier?",
            link: "/overview/btcFi",
          },
          {
            text: "Future of Bitcoin Scaling",
            link: "/overview/future-of-bitcoin-scaling",
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
        text: "SURGE METALAYER",
        items: [
          {
            text: "Fundamentals",
            link: "/metalayer/overview",
          },
          {
            text: "Architecture",
            collapsed: true,
            items: [
              {
                text: "↳ Verifiers",
                link: "/metalayer/architecture/verifiers",
              },
              {
                text: "↳ Signers (DKLs23)",
                link: "/metalayer/architecture/signers",
              },
              {
                text: "↳ UTXO Indexers",
                link: "/metalayer/architecture/indexers",
              },
              {
                text: "↳ DevKit Adapters",
                link: "/metalayer/architecture/adapters",
              },
              {
                text: "↳ Flexible VMs",
                link: "/metalayer/architecture/altvms",
              },
            ],
          },
          {
            text: "Composability",
            link: "/metalayer/composability",
          },
          {
            text: "Interoperability",
            link: "/metalayer/interopability",
          },
          {
            text: "Anchored on Bitcoin",
            link: "/metalayer/security",
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
      {
        text: "USE CASES",
        items: [
          {
            text: "App-specific Rollups",
            link: "/use-cases/app-specific-rollups",
          },
          {
            text: "DeFi",
            link: "/use-cases/defi",
          },
          {
            text: "Gaming and Ordinals",
            link: "/use-cases/gaming-and-ordinals",
          },
        ],
      },
      {
        text: "COLLABORATE",
        items: [
          {
            text: "Custom Signet Node",
            link: "/collaborate/custom-signet-node",
          },
          {
            text: "Run a Node",
            link: "/collaborate/run-a-node",
          },
          {
            text: "Build on Surge",
            link: "https://tally.so/r/n0Pzb9",
          },
        ],
      },
      {
        text: "BITCOIN REPORTS",
        items: [
          {
            text: "In-house Research",
            link: "/bitcoin-reports/in-house-research",
          },
          {
            text: "External Research",
            link: "/bitcoin-reports/external-research",
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
            text: "Media Kit",
            link: "/resources/media-kit",
          },
          {
            text: "Community Guidelines",
            link: "/resources/community-guidelines",
          },
          {
            text: "Surge FAQs",
            link: "/resources/surge-faqs",
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
