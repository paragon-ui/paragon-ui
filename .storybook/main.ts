import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: ['../packages/components/*/stories/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@chakra-ui/storybook-addon',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config, options) => {
    config.css = { devSourcemap: true }
    return config
  },
}
export default config
