/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../public'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/vue3-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
