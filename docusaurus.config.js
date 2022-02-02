// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'webmonetization.dev',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
        },
        blog: false,
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
        title: 'Web Monetization',
        logo: {
          alt: 'Web Monetization',
          src: 'img/wm-icon-animated.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Resources',
          },
          { to: '/wordpress/', label: 'WordPress', position: 'left' },
          {
            href: 'https://webmonetization.org/',
            label: 'Documentation',
            position: 'right',
          },
          {
            href: 'https://webmonetization.org/specification.html',
            label: 'Specification',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'webmonetization.dev',
            items: []
          },
          {
            title: 'Navigation',
            items: [
              { label: 'Resources', to: '/' },
              { label: 'Wordpress', to: '/wordpress/' }
            ]
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/WICG/webmonetization' },
              { label: 'Web Monetization Community', href: 'https://community.webmonetization.org' },
              { label: 'Interledger', href: 'https://interledger.org' }
            ]
          },
          {
            title: 'Resources',
            items: [
              { label: 'Documentation', to: 'https://webmonetization.org' },
              { label: 'Specification', href: 'https://webmonetization.org/specification.html' },
              { label: 'Payment Pointers', to: 'https://paymentpointers.org/' }
            ]
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
