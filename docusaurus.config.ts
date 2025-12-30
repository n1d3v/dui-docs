import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DirectUI Documentation',
  tagline: 'Documenting the undocumented language made by Microsoft.',
  favicon: 'img/control.ico',

  future: {
    v4: true,
  },

  url: 'https://n1d3v.github.io',
  baseUrl: '/dui-docs',

  organizationName: 'n1d3v',
  projectName: 'dui-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DirectUI Documentation',
      logo: {
        alt: 'Windows Control Panel Icon',
        src: 'img/control.png',
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction to DirectUI',
              to: '/docs/intro',
            },
            {
              label: 'Beginning with DirectUI',
              to: '/docs/Tutorials/beginning-with-dui'
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DirectUI Documentation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;