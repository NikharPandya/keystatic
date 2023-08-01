import { TOKEN_PREFIX } from '../constants';

export const javascript = () => {
  return {
    prefix: TOKEN_PREFIX,
    transforms: ['attribute/cti', 'name/cti/kebab'],
    buildPath: `build/javascript/`,
    files: [
      {
        destination: `tokens.js`,
        format: 'javascript/css-token-map',
      },
    ],
  };
};
