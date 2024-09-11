import {colors} from './colors';

const fontSizes = {
  small: 12,
  medium: 14,
  large: 20,
  xLarge: 24,
  xxLarge: 30,
};

export const typography = {
  h1: {
    fontSize: fontSizes.xxLarge,
    fontWeight: '600',
    color: colors.white,
  },
  h2: {
    fontSize: fontSizes.xLarge,
    fontWeight: '600',
    color: colors.white,
  },
  caption: {
    fontSize: fontSizes.medium,
    fontWeight: 'normal',
    color: colors.white,
  },
  subtitle2: {
    fontSize: fontSizes.medium,
    fontWeight: 'normal',
    color: colors.white,
  },
};
