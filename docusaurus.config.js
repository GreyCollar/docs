const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GreyCollar",
  tagline: "Supervised AI Agent",
  url: "https://greycollar.ai/",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.nucleoid.com/greycollar/media/icon.png",
  organizationName: "greycollar",
  projectName: "GreyCollar",
  titleDelimiter: "-",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-L9H12K94J4",
      async: true,
    },
    "/docs/gtag.js",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/greycollar/docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/greycollar/docs/tree/main',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          { to: "/docs", label: "HOME", position: "left" },
          { to: "/docs/get-started", label: "GET STARTED", position: "left" },
          { to: "/docs/learn", label: "LEARN", position: "left" },
          { to: "/docs/api", label: "API", position: "left" },
          {
            to: "/blog",
            label: "BLOG",
            position: "left",
          },
          {
            href: "https://land.greycollar.ai",
            html: require("fs").readFileSync("./ide.html", "utf8"),
            position: "right",
          },
          {
            href: "https://github.com/greycollar/greycollar",
            html: require("fs").readFileSync("./github.html", "utf8"),
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
