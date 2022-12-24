import { createGlobalStyle } from 'styled-components';

export const GLobalStyle = createGlobalStyle`
*, 
*:hover, 
*:after {
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  font-weight: 400;
}

body {
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.mainTextColor};
  background-color: ${({ theme }) => theme.colors.mainBgColor};
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
`;
