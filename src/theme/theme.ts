import { color } from './colors';

export interface ITheme {
  palette: {
    primary: { main: string; dark: string };
    secondary: { main: string; dark?: string; gray?: string };
  };
  typography: {
    fontSizeXXS: 10;
    fontSizeXS: 12;
    fontSizeS: 14;
    fontSizeM: 16;
    fontSizeL: 20;
    fontSizeXL: 30;
    fontSizeXXL: 40;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
  };
  breakpoints: {
    sm: `@media (min-width: 576px)`;
    md: `@media (min-width: 768px)`;
    lg: `@media (min-width: 992px)`;
    xl: `@media (min-width: 1200px)`;
    xll: `@media (min-width: 1536px)`;
  };
}

export const theme: ITheme = {
  palette: {
    primary: {
      main: color.yellow,
      dark: color.darkGrey,
    },
    secondary: {
      main: color.green,
      gray: color.gray,
    },
  },
  typography: {
    fontSizeXXS: 10,
    fontSizeXS: 12,
    fontSizeS: 14,
    fontSizeM: 16,
    fontSizeL: 20,
    fontSizeXL: 30,
    fontSizeXXL: 40,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 992px)',
    xl: '@media (min-width: 1200px)',
    xll: '@media (min-width: 1536px)',
  },
};
