import { withLynxConfig } from '@lynx-js/react/testing-library/rstest-config';
import { defineConfig } from '@rstest/core';

export default defineConfig({
  extends: withLynxConfig({
    modifyRstestConfig(config) {
      config.setupFiles = [...(config.setupFiles || []), './rstest.setup.ts'];
      return config;
    },
  }),
});
