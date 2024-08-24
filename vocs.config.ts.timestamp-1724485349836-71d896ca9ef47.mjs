// vocs.config.ts
import { defineConfig } from "file:///Users/puni/Sites/surge-docs/node_modules/.pnpm/vocs@1.0.0-alpha.52_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1_rollup@4.18.1_typescript@5.4.5/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  description: "A modular Bitcoin Rollup-as-a-Service with a Decentralised verifier network & MPC-TSS Bridge",
  logoUrl: {
    light: "/logo/logo-light.png",
    dark: "/logo/logo-dark.png"
  },
  ogImageUrl: "https://surge-docs.vercel.app/surge-docs.png",
  font: {
    google: "Inter"
  },
  topNav: [
    // { text: "Introduction", link: "/overview/introduction" },
    { text: "Blog", link: "https://surge.build/blog" },
    { text: "Website", link: "https://www.surge.build/" }
  ],
  theme: {
    // accentColor: "#f56949"
    accentColor: "#f4431b"
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
            text: "Evolution of Rollups on Bitcoin",
            link: "/basics/journey-of-rollups-on-bitcoin"
          }
        ]
      },
      {
        text: "RAAS STACK",
        items: [
          {
            text: "Architecture",
            link: "/surge-building-blocks/architecture"
          },
          {
            text: "Multi VM Execution Support",
            link: "/surge-building-blocks/multi-vm"
          },
          {
            text: "Rollup Frameworks",
            link: "/surge-building-blocks/rollup-frameworks"
          },
          {
            text: "High Availability Sequencer",
            link: "/surge-building-blocks/high-availability-sequencer"
          },
          {
            text: "Customizations",
            collapsed: true,
            items: [
              {
                text: "Decentralized Sequencer",
                link: "/surge-building-blocks/customizations/decentralized-sequencer"
              },
              {
                text: " Native Gas Token",
                link: "/surge-building-blocks/customizations/native-gas-token"
              },
              {
                text: " Alternative Data Availability",
                link: "/surge-building-blocks/customizations/alternative-data-availability"
              }
            ]
          }
        ]
      },
      {
        text: "METALAYER",
        items: [
          {
            text: "SuperStack",
            link: "/metalayer/superstack"
          },
          {
            text: "\u21B3 ZKP Verifier Network",
            link: "/metalayer/zkp-verifier-network"
          },
          {
            text: "\u21B3 MPC TSS Bridge",
            link: "/metalayer/mpc-tss-bridge"
          },
          {
            text: "\u21B3 Utilities",
            collapsed: true,
            items: [
              {
                text: " Overview",
                link: "/metalayer/utilities/overview"
              },
              {
                text: " StableCoin",
                link: "/metalayer/utilities/native-stable-coins"
              },
              {
                text: " Oracles & Indexers",
                link: "/metalayer/utilities/oracles-and-indexers"
              },
              {
                text: " Bridge Ordinals and Runes",
                link: "/metalayer/utilities/bridge-ordinals-and-runes"
              }
            ]
          },
          {
            text: "Super Validators",
            link: "/metalayer/validators"
          }
        ]
      },
      {
        text: "MORE READ",
        items: [
          {
            text: "Bitcoin L2 Landscape",
            link: "/more-read/upcoming-bitcoin-l2s"
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
            link: "/basics/attempts-to-scale-bitcoin"
          },
          {
            text: "How RaaS Interface will Evolve?",
            link: "/more-read/how-raas-interface-will-evolve"
          }
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
        ]
      },
      {
        text: "USERS TOOLING",
        items: [
          {
            text: "Custom Signet Node",
            link: "/users-tooling/node-setup-guide"
          },
          {
            text: "Running a Validator Node",
            link: "/users-tooling/run-a-validator-node"
          }
        ]
      },
      {
        text: "RESOURCES",
        items: [
          {
            text: "Quick Links",
            link: "/resources/quick-links"
          },
          {
            text: "Branding and Logos",
            link: "/resources/branding-and-logos"
          },
          {
            text: "Community Guidelines",
            link: "/resources/community-guidelines"
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
    },
    {
      icon: "telegram",
      link: "https://t.me/surgebuild"
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcHVuaS9TaXRlcy9zdXJnZS1kb2NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcHVuaS9TaXRlcy9zdXJnZS1kb2NzL3ZvY3MuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9wdW5pL1NpdGVzL3N1cmdlLWRvY3Mvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBkZXNjcmlwdGlvbjogXCJBIG1vZHVsYXIgQml0Y29pbiBSb2xsdXAtYXMtYS1TZXJ2aWNlIHdpdGggYSBEZWNlbnRyYWxpc2VkIHZlcmlmaWVyIG5ldHdvcmsgJiBNUEMtVFNTIEJyaWRnZVwiLFxuICBsb2dvVXJsOiB7XG4gICAgbGlnaHQ6IFwiL2xvZ28vbG9nby1saWdodC5wbmdcIixcbiAgICBkYXJrOiBcIi9sb2dvL2xvZ28tZGFyay5wbmdcIixcbiAgfSxcbiAgb2dJbWFnZVVybDogXCJodHRwczovL3N1cmdlLWRvY3MudmVyY2VsLmFwcC9zdXJnZS1kb2NzLnBuZ1wiLFxuICBmb250OiB7XG4gICAgZ29vZ2xlOiBcIkludGVyXCIsXG4gIH0sXG4gIHRvcE5hdjogW1xuICAgIC8vIHsgdGV4dDogXCJJbnRyb2R1Y3Rpb25cIiwgbGluazogXCIvb3ZlcnZpZXcvaW50cm9kdWN0aW9uXCIgfSxcbiAgICB7IHRleHQ6IFwiQmxvZ1wiLCBsaW5rOiBcImh0dHBzOi8vc3VyZ2UuYnVpbGQvYmxvZ1wiIH0sXG4gICAgeyB0ZXh0OiBcIldlYnNpdGVcIiwgbGluazogXCJodHRwczovL3d3dy5zdXJnZS5idWlsZC9cIiB9LFxuICBdLFxuICB0aGVtZToge1xuICAgIC8vIGFjY2VudENvbG9yOiBcIiNmNTY5NDlcIlxuICAgIGFjY2VudENvbG9yOiBcIiNmNDQzMWJcIixcbiAgICAvLyBjb2xvclNjaGVtZTogXCJkYXJrXCIsXG4gIH0sXG4gIHRpdGxlOiBcIlN1cmdlIERvY3NcIixcbiAgc2lkZWJhcjoge1xuICAgIFwiL1wiOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiT1ZFUlZJRVdcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkludHJvZHVjdGlvblwiLFxuICAgICAgICAgICAgbGluazogXCIvb3ZlcnZpZXcvaW50cm9kdWN0aW9uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIldoeSBTdXJnZT9cIixcbiAgICAgICAgICAgIGxpbms6IFwiL292ZXJ2aWV3L3doeS1zdXJnZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkJBU0lDU1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiVW5kZXJzdGFuZGluZyB0aGUgUm9sbHVwc1wiLFxuICAgICAgICAgICAgbGluazogXCIvYmFzaWNzL3VuZGVyc3RhbmRpbmctdGhlLXJvbGx1cHNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiRXZvbHV0aW9uIG9mIFJvbGx1cHMgb24gQml0Y29pblwiLFxuICAgICAgICAgICAgbGluazogXCIvYmFzaWNzL2pvdXJuZXktb2Ytcm9sbHVwcy1vbi1iaXRjb2luXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiUkFBUyBTVEFDS1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiQXJjaGl0ZWN0dXJlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9zdXJnZS1idWlsZGluZy1ibG9ja3MvYXJjaGl0ZWN0dXJlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIk11bHRpcGxlIFZNIEV4ZWN1dGlvbiBTdXBwb3J0XCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9zdXJnZS1idWlsZGluZy1ibG9ja3MvbXVsdGktdm1cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiUm9sbHVwIEZyYW1ld29ya3NcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3N1cmdlLWJ1aWxkaW5nLWJsb2Nrcy9yb2xsdXAtZnJhbWV3b3Jrc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJIaWdoIEF2YWlsYWJpbGl0eSBTZXF1ZW5jZXJcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3N1cmdlLWJ1aWxkaW5nLWJsb2Nrcy9oaWdoLWF2YWlsYWJpbGl0eS1zZXF1ZW5jZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiQ3VzdG9taXphdGlvbnNcIixcbiAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlY2VudHJhbGl6ZWQgU2VxdWVuY2VyXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvc3VyZ2UtYnVpbGRpbmctYmxvY2tzL2N1c3RvbWl6YXRpb25zL2RlY2VudHJhbGl6ZWQtc2VxdWVuY2VyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiBOYXRpdmUgR2FzIFRva2VuXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvc3VyZ2UtYnVpbGRpbmctYmxvY2tzL2N1c3RvbWl6YXRpb25zL25hdGl2ZS1nYXMtdG9rZW5cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiIEFsdGVybmF0aXZlIERhdGEgQXZhaWxhYmlsaXR5XCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvc3VyZ2UtYnVpbGRpbmctYmxvY2tzL2N1c3RvbWl6YXRpb25zL2FsdGVybmF0aXZlLWRhdGEtYXZhaWxhYmlsaXR5XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIk1FVEFMQVlFUlwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiU3VwZXJTdGFja1wiLFxuICAgICAgICAgICAgbGluazogXCIvbWV0YWxheWVyL3N1cGVyc3RhY2tcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHUyMUIzIFpLUCBWZXJpZmllciBOZXR3b3JrXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9tZXRhbGF5ZXIvemtwLXZlcmlmaWVyLW5ldHdvcmtcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHUyMUIzIE1QQyBUU1MgQnJpZGdlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9tZXRhbGF5ZXIvbXBjLXRzcy1icmlkZ2VcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHUyMUIzIFV0aWxpdGllc1wiLFxuICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiIE92ZXJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvbWV0YWxheWVyL3V0aWxpdGllcy9vdmVydmlld1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCIgU3RhYmxlQ29pblwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL21ldGFsYXllci91dGlsaXRpZXMvbmF0aXZlLXN0YWJsZS1jb2luc1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCIgT3JhY2xlcyAmIEluZGV4ZXJzXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvbWV0YWxheWVyL3V0aWxpdGllcy9vcmFjbGVzLWFuZC1pbmRleGVyc1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCIgQnJpZGdlIE9yZGluYWxzIGFuZCBSdW5lc1wiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL21ldGFsYXllci91dGlsaXRpZXMvYnJpZGdlLW9yZGluYWxzLWFuZC1ydW5lc1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiU3VwZXIgVmFsaWRhdG9yc1wiLFxuICAgICAgICAgICAgbGluazogXCIvbWV0YWxheWVyL3ZhbGlkYXRvcnNcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJNT1JFIFJFQURcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkJpdGNvaW4gTDIgTGFuZHNjYXBlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9tb3JlLXJlYWQvdXBjb21pbmctYml0Y29pbi1sMnNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIHRleHQ6IFwiQml0Y29pbiBhcyBhIFNldHRsZW1lbnQgTGF5ZXJcIixcbiAgICAgICAgICAvLyAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAvLyAgIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAvLyAgICAgICB0ZXh0OiBcIk92ZXJ2aWV3XCIsXG4gICAgICAgICAgLy8gICAgICAgbGluazogXCIvYmFzaWNzL2JpdGNvaW4tYXMtYS1zZXR0bGVtZW50LWxheWVyL292ZXJ2aWV3XCIsXG4gICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAvLyAgICAgICB0ZXh0OiBcIkZpbmFsaXR5XCIsXG4gICAgICAgICAgLy8gICAgICAgbGluazogXCIvYmFzaWNzL2JpdGNvaW4tYXMtYS1zZXR0bGVtZW50LWxheWVyL2ZpbmFsaXR5XCIsXG4gICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAvLyAgICAgICB0ZXh0OiBcIlNoYXJlZCBTZWN1cml0eVwiLFxuICAgICAgICAgIC8vICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAvLyAgICAgICBpdGVtczogW1xuICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgIC8vICAgICAgICAgICB0ZXh0OiBcIkJpdGNvaW4gU2hhcmVkIFNlY3VyaXR5XCIsXG4gICAgICAgICAgLy8gICAgICAgICAgIGxpbms6IFwiL2Jhc2ljcy9iaXRjb2luLWFzLWEtc2V0dGxlbWVudC1sYXllci9zaGFyZWQtc2VjdXJpdHkvYml0Y29pbi1zaGFyZWQtc2VjdXJpdHlcIixcbiAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgLy8gICAgICAgICAgIHRleHQ6IFwiU2hhcmVkIFNlY3VyaXR5IFByb3RvY29sXCIsXG4gICAgICAgICAgLy8gICAgICAgICAgIGxpbms6IFwiL2Jhc2ljcy9iaXRjb2luLWFzLWEtc2V0dGxlbWVudC1sYXllci9zaGFyZWQtc2VjdXJpdHkvc2hhcmVkLXNlY3VyaXR5LXByb3RvY29sXCIsXG4gICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgIC8vICAgICAgIF0sXG4gICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAvLyAgICAgICB0ZXh0OiBcIkJpdFZNXCIsXG4gICAgICAgICAgLy8gICAgICAgbGluazogXCIvYmFzaWNzL2JpdGNvaW4tYXMtYS1zZXR0bGVtZW50LWxheWVyL2JpdHZtXCIsXG4gICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgLy8gICBdLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJBdHRlbXB0cyB0byBTY2FsZSBCaXRjb2luXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9iYXNpY3MvYXR0ZW1wdHMtdG8tc2NhbGUtYml0Y29pblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJIb3cgUmFhUyBJbnRlcmZhY2Ugd2lsbCBFdm9sdmU/XCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9tb3JlLXJlYWQvaG93LXJhYXMtaW50ZXJmYWNlLXdpbGwtZXZvbHZlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICB0ZXh0OiBcIkJpdGNvaW4gU2NhbGluZyBUcmlsZW1tYVwiLFxuICAgICAgICAgIC8vICAgbGluazogXCIvbW9yZS1yZWFkL2JpdGNvaW4tc2NhbGluZy10cmlsZW1tYVwiLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgdGV4dDogXCJIb3cgZG9lcyBhIEJpdGNvaW4gVHJhbnNhY3Rpb24gV29yaz9cIixcbiAgICAgICAgICAvLyAgIGxpbms6IFwiL21vcmUtcmVhZC9ob3ctZG9lcy1hLWJpdGNvaW4tdHJhbnNhY3Rpb24td29ya1wiLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgdGV4dDogXCJBZHZhbnRhZ2VzIG9mIENob29zaW5nIE1QQyBUU1MgT3ZlciBBbHRlcm5hdGl2ZSBNZXRob2RzXCIsXG4gICAgICAgICAgLy8gICBsaW5rOiBcIi9tb3JlLXJlYWQvYWR2YW50YWdlcy1vZi1jaG9vc2luZy1tcGMtdHNzLW92ZXItYWx0ZXJuYXRpdmUtbWV0aG9kc1wiLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlVTRVJTIFRPT0xJTkdcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkN1c3RvbSBTaWduZXQgTm9kZVwiLFxuICAgICAgICAgICAgbGluazogXCIvdXNlcnMtdG9vbGluZy9ub2RlLXNldHVwLWd1aWRlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlJ1bm5pbmcgYSBWYWxpZGF0b3IgTm9kZVwiLFxuICAgICAgICAgICAgbGluazogXCIvdXNlcnMtdG9vbGluZy9ydW4tYS12YWxpZGF0b3Itbm9kZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlJFU09VUkNFU1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiUXVpY2sgTGlua3NcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3Jlc291cmNlcy9xdWljay1saW5rc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJCcmFuZGluZyBhbmQgTG9nb3NcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3Jlc291cmNlcy9icmFuZGluZy1hbmQtbG9nb3NcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiQ29tbXVuaXR5IEd1aWRlbGluZXNcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3Jlc291cmNlcy9jb21tdW5pdHktZ3VpZGVsaW5lc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHNvY2lhbHM6IFtcbiAgICB7XG4gICAgICBpY29uOiBcImdpdGh1YlwiLFxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vc3VyZ2VidWlsZC9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwieFwiLFxuICAgICAgbGluazogXCJodHRwczovL3guY29tL3N1cmdlYnVpbGRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwidGVsZWdyYW1cIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly90Lm1lL3N1cmdlYnVpbGRcIixcbiAgICB9LFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNRLFNBQVMsb0JBQW9CO0FBRW5TLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsSUFDSixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUEsSUFFTixFQUFFLE1BQU0sUUFBUSxNQUFNLDJCQUEyQjtBQUFBLElBQ2pELEVBQUUsTUFBTSxXQUFXLE1BQU0sMkJBQTJCO0FBQUEsRUFDdEQ7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsYUFBYTtBQUFBO0FBQUEsRUFFZjtBQUFBLEVBQ0EsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0g7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRSxNQUFNO0FBQUEsZ0JBQ04sTUFBTTtBQUFBLGNBQ1I7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsTUFBTTtBQUFBLGdCQUNOLE1BQU07QUFBQSxjQUNSO0FBQUEsY0FDQTtBQUFBLGdCQUNFLE1BQU07QUFBQSxnQkFDTixNQUFNO0FBQUEsY0FDUjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRSxNQUFNO0FBQUEsZ0JBQ04sTUFBTTtBQUFBLGNBQ1I7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsTUFBTTtBQUFBLGdCQUNOLE1BQU07QUFBQSxjQUNSO0FBQUEsY0FDQTtBQUFBLGdCQUNFLE1BQU07QUFBQSxnQkFDTixNQUFNO0FBQUEsY0FDUjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxNQUFNO0FBQUEsZ0JBQ04sTUFBTTtBQUFBLGNBQ1I7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFpQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWFGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
