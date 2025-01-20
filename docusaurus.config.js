// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const REPO_URL = 'https://github.com/F1mmel/fimmel.dev';
const DISCORD_URL = 'https://discord.gg/WK8umpGm';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'fimmel.dev',
  tagline: 'fimmel.dev',
  url: 'https://fimmel.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  baseUrlIssueBanner: false,
  organizationName: 'F1mmel',
  projectName: 'fimmel.dev',
  deploymentBranch: 'gh-pages',

  plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Updates',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'fimmel.dev',
        logo: {
          alt: 'fimmel.dev',
          src: 'img/logo.png',
          height: 32,
          width: 32,
        },
        items: [
          {
            href: REPO_URL,
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
              { label: 'GitHub', href: REPO_URL },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        darkTheme: darkCodeTheme,
        defaultLanguage: 'cpp',
      },
    }),
};

module.exports = config;
