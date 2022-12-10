import { createGlobalStyle } from 'styled-components';

export const GLobalStyle = createGlobalStyle`
*, 
*:hover, 
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
`;
