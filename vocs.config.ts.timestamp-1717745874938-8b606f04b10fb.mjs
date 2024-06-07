// vocs.config.ts
import { defineConfig } from "file:///Users/chandher/Desktop/Work/surge/docs/node_modules/.pnpm/vocs@1.0.0-alpha.52_@types+react@18.3.2_react-dom@18.3.1_react@18.3.1_rollup@4.17.2_typescript@5.4.5/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  logoUrl: {
    light: "/logo/logo-light.png",
    dark: "/logo/logo-dark.png"
  },
  font: {
    google: "Inter"
  },
  topNav: [{ text: "Surge Build", link: "https://www.surge.build/" }],
  theme: {
    // accentColor: "#f56949"
    accentColor: "#f4431b"
  },
  title: "Surge Docs",
  sidebar: {
    "/": [
      {
        text: "OVERVIEW",
        items: [
          {
            text: "Introduction to Surge",
            link: "/overview/introduction"
          },
          {
            text: "Why Surge?",
            link: "/overview/why-surge"
          }
        ]
      },
      {
        text: "BASICS",
        items: [
          {
            text: "Understanding the Rollups",
            link: "/basics/understanding-the-rollups"
          },
          {
            text: "Attempts to Scale Bitcoin",
            link: "/basics/attempts-to-scale-bitcoin"
          },
          {
            text: "Journey of Rollups on Bitcoin",
            link: "/basics/journey-of-rollups-on-bitcoin"
          },
          {
            text: "Bitcoin as a Settlement Layer",
            collapsed: true,
            items: [
              {
                text: "Overview",
                link: "/basics/bitcoin-as-a-settlement-layer/overview"
              },
              {
                text: "Finality",
                link: "/basics/bitcoin-as-a-settlement-layer/finality"
              },
              {
                text: "Shared Security",
                collapsed: true,
                items: [
                  {
                    text: "Bitcoin Shared Security",
                    link: "/basics/bitcoin-as-a-settlement-layer/shared-security/bitcoin-shared-security"
                  },
                  {
                    text: "Shared Security Protocol",
                    link: "/basics/bitcoin-as-a-settlement-layer/shared-security/shared-security-protocol"
                  }
                ]
              },
              {
                text: "BitVM",
                link: "/basics/bitcoin-as-a-settlement-layer/bitvm"
              }
            ]
          }
        ]
      },
      {
        text: "SURGE BUILDING BLOCKS",
        items: [
          {
            text: "\u{1F441}\uFE0F Architecture",
            link: "/surge-building-blocks/architecture"
          },
          {
            text: "\u23EB Superstack",
            link: "/surge-building-blocks/superstack"
          },
          {
            text: "\u21B3 1\uFE0F\u20E3 MPC TSS Bridge",
            link: "/surge-building-blocks/mpc-tss-bridge"
          },
          {
            text: "\u21B3 2\uFE0F\u20E3 ZKP Verifier Network",
            link: "/surge-building-blocks/zkp-verifier-network"
          },
          {
            text: "\u21B3 3\uFE0F\u20E3 Utilities",
            collapsed: true,
            items: [
              {
                text: "\u27A1\uFE0F Overview",
                link: "/surge-building-blocks/utilities/overview"
              },
              {
                text: "\u27A1\uFE0F Native Stable Coins",
                link: "/surge-building-blocks/utilities/native-stable-coins"
              },
              {
                text: "\u27A1\uFE0F Oracles & Indexers",
                link: "/surge-building-blocks/utilities/oracles-and-indexers"
              },
              {
                text: "\u27A1\uFE0F Bridge Ordinals and Runes",
                link: "/surge-building-blocks/utilities/bridge-ordinals-and-runes"
              }
            ]
          },
          {
            text: "\u21B3 4\uFE0F\u20E3 Customizations",
            collapsed: true,
            items: [
              {
                text: "\u27A1\uFE0F Decentralized Sequencer",
                link: "/surge-building-blocks/customizations/decentralized-sequencer"
              },
              {
                text: "\u27A1\uFE0F Native Gas Token",
                link: "/surge-building-blocks/customizations/native-gas-token"
              },
              {
                text: "\u27A1\uFE0F Alternative Data Availability",
                link: "/surge-building-blocks/customizations/alternative-data-availability"
              }
            ]
          }
        ]
      },
      {
        text: "MORE READ",
        items: [
          {
            text: "How RaaS Interface will Evolve?",
            link: "/more-read/how-raas-interface-will-evolve"
          },
          {
            text: "Upcoming Bitcoin L2's",
            link: "/more-read/upcoming-bitcoin-l2s"
          },
          {
            text: "Bitcoin Scaling Trilemma",
            link: "/more-read/bitcoin-scaling-trilemma"
          },
          {
            text: "How does a Bitcoin Transaction Work?",
            link: "/more-read/how-does-a-bitcoin-transaction-work"
          },
          {
            text: "Advantages of Choosing MPC TSS Over Alternative Methods",
            link: "/more-read/advantages-of-choosing-mpc-tss-over-alternative-methods"
          }
        ]
      },
      {
        text: "USERS TOOLING",
        items: [
          {
            text: "Node Setup Guide",
            link: "/users-tooling/node-setup-guide"
          },
          {
            text: "Run a Validator Node",
            link: "/users-tooling/run-a-validator-node"
          }
        ]
      }
    ]
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/surgebuild/"
    },
    {
      icon: "x",
      link: "https://x.com/surgebuild"
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hhbmRoZXIvRGVza3RvcC9Xb3JrL3N1cmdlL2RvY3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGFuZGhlci9EZXNrdG9wL1dvcmsvc3VyZ2UvZG9jcy92b2NzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hhbmRoZXIvRGVza3RvcC9Xb3JrL3N1cmdlL2RvY3Mvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBsb2dvVXJsOiB7XG4gICAgbGlnaHQ6IFwiL2xvZ28vbG9nby1saWdodC5wbmdcIixcbiAgICBkYXJrOiBcIi9sb2dvL2xvZ28tZGFyay5wbmdcIlxuICB9LFxuICBmb250OiB7XG4gICAgZ29vZ2xlOiBcIkludGVyXCJcbiAgfSxcbiAgdG9wTmF2OiBbeyB0ZXh0OiBcIlN1cmdlIEJ1aWxkXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuc3VyZ2UuYnVpbGQvXCIgfV0sXG4gIHRoZW1lOiB7XG4gICAgLy8gYWNjZW50Q29sb3I6IFwiI2Y1Njk0OVwiXG4gICAgYWNjZW50Q29sb3I6IFwiI2Y0NDMxYlwiXG4gIH0sXG4gIHRpdGxlOiBcIlN1cmdlIERvY3NcIixcbiAgc2lkZWJhcjoge1xuICAgIFwiL1wiOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiT1ZFUlZJRVdcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkludHJvZHVjdGlvbiB0byBTdXJnZVwiLFxuICAgICAgICAgICAgbGluazogXCIvb3ZlcnZpZXcvaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiV2h5IFN1cmdlP1wiLFxuICAgICAgICAgICAgbGluazogXCIvb3ZlcnZpZXcvd2h5LXN1cmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQkFTSUNTXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJVbmRlcnN0YW5kaW5nIHRoZSBSb2xsdXBzXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9iYXNpY3MvdW5kZXJzdGFuZGluZy10aGUtcm9sbHVwc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkF0dGVtcHRzIHRvIFNjYWxlIEJpdGNvaW5cIixcbiAgICAgICAgICAgIGxpbms6IFwiL2Jhc2ljcy9hdHRlbXB0cy10by1zY2FsZS1iaXRjb2luXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiSm91cm5leSBvZiBSb2xsdXBzIG9uIEJpdGNvaW5cIixcbiAgICAgICAgICAgIGxpbms6IFwiL2Jhc2ljcy9qb3VybmV5LW9mLXJvbGx1cHMtb24tYml0Y29pblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkJpdGNvaW4gYXMgYSBTZXR0bGVtZW50IExheWVyXCIsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJPdmVydmlld1wiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL2Jhc2ljcy9iaXRjb2luLWFzLWEtc2V0dGxlbWVudC1sYXllci9vdmVydmlld1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkZpbmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvYmFzaWNzL2JpdGNvaW4tYXMtYS1zZXR0bGVtZW50LWxheWVyL2ZpbmFsaXR5XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2hhcmVkIFNlY3VyaXR5XCIsXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQml0Y29pbiBTaGFyZWQgU2VjdXJpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvYmFzaWNzL2JpdGNvaW4tYXMtYS1zZXR0bGVtZW50LWxheWVyL3NoYXJlZC1zZWN1cml0eS9iaXRjb2luLXNoYXJlZC1zZWN1cml0eVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNoYXJlZCBTZWN1cml0eSBQcm90b2NvbFwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9iYXNpY3MvYml0Y29pbi1hcy1hLXNldHRsZW1lbnQtbGF5ZXIvc2hhcmVkLXNlY3VyaXR5L3NoYXJlZC1zZWN1cml0eS1wcm90b2NvbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJCaXRWTVwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL2Jhc2ljcy9iaXRjb2luLWFzLWEtc2V0dGxlbWVudC1sYXllci9iaXR2bVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiU1VSR0UgQlVJTERJTkcgQkxPQ0tTXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJcdUQ4M0RcdURDNDFcdUZFMEYgQXJjaGl0ZWN0dXJlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9zdXJnZS1idWlsZGluZy1ibG9ja3MvYXJjaGl0ZWN0dXJlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHUyM0VCIFN1cGVyc3RhY2tcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3N1cmdlLWJ1aWxkaW5nLWJsb2Nrcy9zdXBlcnN0YWNrXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHUyMUIzIDFcdUZFMEZcdTIwRTMgTVBDIFRTUyBCcmlkZ2VcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3N1cmdlLWJ1aWxkaW5nLWJsb2Nrcy9tcGMtdHNzLWJyaWRnZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1MjFCMyAyXHVGRTBGXHUyMEUzIFpLUCBWZXJpZmllciBOZXR3b3JrXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9zdXJnZS1idWlsZGluZy1ibG9ja3MvemtwLXZlcmlmaWVyLW5ldHdvcmtcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJcdTIxQjMgM1x1RkUwRlx1MjBFMyBVdGlsaXRpZXNcIixcbiAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1MjdBMVx1RkUwRiBPdmVydmlld1wiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL3N1cmdlLWJ1aWxkaW5nLWJsb2Nrcy91dGlsaXRpZXMvb3ZlcnZpZXdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTI3QTFcdUZFMEYgTmF0aXZlIFN0YWJsZSBDb2luc1wiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL3N1cmdlLWJ1aWxkaW5nLWJsb2Nrcy91dGlsaXRpZXMvbmF0aXZlLXN0YWJsZS1jb2luc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1MjdBMVx1RkUwRiBPcmFjbGVzICYgSW5kZXhlcnNcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9zdXJnZS1idWlsZGluZy1ibG9ja3MvdXRpbGl0aWVzL29yYWNsZXMtYW5kLWluZGV4ZXJzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHUyN0ExXHVGRTBGIEJyaWRnZSBPcmRpbmFscyBhbmQgUnVuZXNcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9zdXJnZS1idWlsZGluZy1ibG9ja3MvdXRpbGl0aWVzL2JyaWRnZS1vcmRpbmFscy1hbmQtcnVuZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1MjFCMyA0XHVGRTBGXHUyMEUzIEN1c3RvbWl6YXRpb25zXCIsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTI3QTFcdUZFMEYgRGVjZW50cmFsaXplZCBTZXF1ZW5jZXJcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9zdXJnZS1idWlsZGluZy1ibG9ja3MvY3VzdG9taXphdGlvbnMvZGVjZW50cmFsaXplZC1zZXF1ZW5jZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTI3QTFcdUZFMEYgTmF0aXZlIEdhcyBUb2tlblwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL3N1cmdlLWJ1aWxkaW5nLWJsb2Nrcy9jdXN0b21pemF0aW9ucy9uYXRpdmUtZ2FzLXRva2VuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHUyN0ExXHVGRTBGIEFsdGVybmF0aXZlIERhdGEgQXZhaWxhYmlsaXR5XCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvc3VyZ2UtYnVpbGRpbmctYmxvY2tzL2N1c3RvbWl6YXRpb25zL2FsdGVybmF0aXZlLWRhdGEtYXZhaWxhYmlsaXR5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJNT1JFIFJFQURcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkhvdyBSYWFTIEludGVyZmFjZSB3aWxsIEV2b2x2ZT9cIixcbiAgICAgICAgICAgIGxpbms6IFwiL21vcmUtcmVhZC9ob3ctcmFhcy1pbnRlcmZhY2Utd2lsbC1ldm9sdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJVcGNvbWluZyBCaXRjb2luIEwyJ3NcIixcbiAgICAgICAgICAgIGxpbms6IFwiL21vcmUtcmVhZC91cGNvbWluZy1iaXRjb2luLWwyc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkJpdGNvaW4gU2NhbGluZyBUcmlsZW1tYVwiLFxuICAgICAgICAgICAgbGluazogXCIvbW9yZS1yZWFkL2JpdGNvaW4tc2NhbGluZy10cmlsZW1tYVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkhvdyBkb2VzIGEgQml0Y29pbiBUcmFuc2FjdGlvbiBXb3JrP1wiLFxuICAgICAgICAgICAgbGluazogXCIvbW9yZS1yZWFkL2hvdy1kb2VzLWEtYml0Y29pbi10cmFuc2FjdGlvbi13b3JrXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiQWR2YW50YWdlcyBvZiBDaG9vc2luZyBNUEMgVFNTIE92ZXIgQWx0ZXJuYXRpdmUgTWV0aG9kc1wiLFxuICAgICAgICAgICAgbGluazogXCIvbW9yZS1yZWFkL2FkdmFudGFnZXMtb2YtY2hvb3NpbmctbXBjLXRzcy1vdmVyLWFsdGVybmF0aXZlLW1ldGhvZHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJVU0VSUyBUT09MSU5HXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJOb2RlIFNldHVwIEd1aWRlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi91c2Vycy10b29saW5nL25vZGUtc2V0dXAtZ3VpZGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJSdW4gYSBWYWxpZGF0b3IgTm9kZVwiLFxuICAgICAgICAgICAgbGluazogXCIvdXNlcnMtdG9vbGluZy9ydW4tYS12YWxpZGF0b3Itbm9kZVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBzb2NpYWxzOiBbXG4gICAge1xuICAgICAgaWNvbjogXCJnaXRodWJcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3N1cmdlYnVpbGQvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwieFwiLFxuICAgICAgbGluazogXCJodHRwczovL3guY29t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
