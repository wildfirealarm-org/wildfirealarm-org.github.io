// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Wildfire Alarm',
    tagline: 'Open-source early wildfire detection sensor network',
    favicon: 'img/favicon.png',

    future: {
        v4: true,
    },

    url: 'https://docs.wildfirealarm.org',
    baseUrl: '/',

    organizationName: 'wildfirealarm-org',
    projectName: 'wildfirealarm-org.github.io',
    trailingSlash: false,

    onBrokenLinks: 'throw',

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
                    sidebarPath: './sidebars.js',
                    editUrl:
                        'https://github.com/wildfirealarm-org/wildfirealarm-org.github.io/tree/main/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/social-card.png',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: 'Wildfire Alarm',
                logo: {
                    alt: 'Wildfire Alarm logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        href: 'https://wildfirealarm.org/',
                        label: 'Website',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/wildfirealarm-org',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Repositories',
                        items: [
                            {
                                label: 'Firmware',
                                href: 'https://github.com/wildfirealarm-org/firmware',
                            },
                            {
                                label: 'Hardware',
                                href: 'https://github.com/wildfirealarm-org/hardware',
                            },
                            {
                                label: 'Dashboard',
                                href: 'https://github.com/wildfirealarm-org/dashboard',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'wildfirealarm.org',
                                href: 'https://wildfirealarm.org/',
                            },
                            {
                                label: 'GitHub Org',
                                href: 'https://github.com/wildfirealarm-org',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Wildfire Alarm. Code Apache-2.0, hardware CERN-OHL-P-2.0, data and docs CC BY 4.0.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;