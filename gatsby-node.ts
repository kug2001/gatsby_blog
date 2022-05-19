import type { GatsbyNode } from "gatsby";
import path from 'path';

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({getConfig, actions}) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        "@pages": path.resolve(__dirname, '/src/pages'),
        "@layout": path.resolve(__dirname, '/src/components/layout'),
        "@components": path.resolve(__dirname, 'src/components'),
        "@common": path.resolve(__dirname, '/src/common'),
        "@images": path.resolve(__dirname, '/src/images'),
        "@store": path.resolve(__dirname, '/src/store'),
        "@styles": path.resolve(__dirname, '/src/styles'),
      },
    },
  });
}