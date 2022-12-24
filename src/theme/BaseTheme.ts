export const BaseTheme: IBaseTheme = {
  colors: {
    lightColor: 'hsl(0,0%,100%)',
    mainTextColor: 'hsl(200, 15%, 8%)',
    mainBgColor: 'hsl(0, 0%, 98%)',
    darkBgColor: 'hsl(207,26%,17%)',
    hoverCardColor: 'hsl(0deg 1% 60%)',
  },
  container: {
    containerMaxWidth: { maxWidth: '1040px' },
    containerPadding: { padding: '0 10px' },
    containerMargin: { margin: '0 auto' },
  },
};

export interface IBaseTheme {
  colors: {
    lightColor: string;
    mainTextColor: string;
    mainBgColor: string;
    darkBgColor: string;
    hoverCardColor: string;
  };
  container: {
    containerMaxWidth: { maxWidth: string };
    containerPadding: { padding: string };
    containerMargin: { margin: string };
  };
}

/* eslint-disable @typescript-eslint/no-empty-interface*/
declare module 'styled-components' {
  export interface DefaultTheme extends IBaseTheme {}
}
