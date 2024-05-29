import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Welcome",
  tagline:
    "Automate: Save time, reduce errors. Integrate: Enhance collaboration. Track: Maintain version control. Test: Ensure continuous quality. Secure: Protect your data. Document: Keep everyone informed.",
  favicon: "img/baked-logo-sprite.ico",

  // Set the production url of your site here
  url: "https://wearebaked.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "BakedStudios", // Usually your GitHub org/user name.
  // projectName: "baked-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BakedStudios/baked-docs/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BakedStudios/baked-docs/blob/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Baked Studios Pipeline",
      logo: {
        alt: "baked-logo",
        src: "img/baked-logo-sprite.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Posts", position: "left" },
        {
          href: "https://github.com/BakedStudios",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Quick Links",
        //   items: [
        //     {
        //       label: "Overview",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        // {
        //   title: "Helpful Links",
        //   items: [
        //     {
        //       label: "Flow Forums",
        //       href: "https://community.shotgridsoftware.com/",
        //     },
        //     {
        //       label: "Deadline Forums",
        //       href: "https://forums.thinkboxsoftware.com/",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/BakedStudios",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Baked Studios`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
