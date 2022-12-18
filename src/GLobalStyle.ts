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
  color: hsl(200, 15%, 8%);
  background-color: hsl(0, 0%, 98%);
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
`;
