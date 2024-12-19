import { defineConfig } from "vocs";

export default defineConfig({
  description: "Introducing Surge, a decentralized network that enables dApps and rollups to anchor directly to Bitcoin security with permissionless DKLs signature scheme while maintaining block consensus, interoperability, and data availability on Bitcoin.",
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
            link: "/metalayer/interoperability",
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
          // {
          //   text: "Cost / Time saved Stats",
          //   link: "/developer-guides/testnet-explorer/time-saved",
          // },
        ],
      },
      {
        text: "DEVELOPER GUIDES",
        items: [
          {
            text: "Network Information",
            link: "/developer-guides/network-information",
          },
          {
            text: "Surge SDK",
            collapsed: true,
            items: [
              {
                text: "Submit Proof to Bitcoin",
                link: "/developer-guides/surge-sdk/submit-proof",
              },
              {
                text: "Verify Proof on Bitcoin",
                link: "/developer-guides/surge-sdk/verify-proof",
              },
              {
                text: "Generate Schnorr / ECDSA Sigs",
                link: "/developer-guides/surge-sdk/generate-signature",
              },
            ],
          },
          {
            text: "Run Surge Node",
            collapsed: true,
            items: [
              {
                text: "Run a Node",
                link: "/developer-guides/run-node/setup",
              },
              {
                text: "Become a Validator",
                link: "/developer-guides/run-node/validator",
              },
              {
                text: "Custom Signet Node",
                link: "/developer-guides/run-node/custom-signet",
              },
            ],
          },
          {
            text: "Testnet Explorer",
            link: "/developer-guides/testnet-explorer/explorer",
            // collapsed: false,
            // items: [
            //   // {
            //   //   text: "Bitcoin Inscription",
            //   //   link: "/developer-guides/testnet-explorer/bitcoin-inscriptions",
            //   // },
            // ],
          },
          {
            text: "Wallet & Tokens",
            collapsed: true,
            items: [
              {
                text: "Connect Keplr Wallet",
                link: "/developer-guides/wallets-tokens/connect-keplr",
              },
              {
                text: "Get Surge Tokens",
                link: "/developer-guides/wallets-tokens/get-tokens",
              },
            ],
          },

          // {
          //   text: "Build on Surge",
          //   link: "https://tally.so/r/n0Pzb9",
          // },
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
