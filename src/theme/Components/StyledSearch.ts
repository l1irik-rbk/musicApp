import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a track or artist...',
})`
  font-family: inherit;
  font-size: inherit;
  width: 260px;
  height: 46px;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.controlsColor};
  padding: 2px 9px;
  color: inherit;
`;

export const SearchButton = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightColor};
  border: 1px solid ${({ theme }) => theme.colors.controlsColor};
  border-left: none;
  padding: 5.5px 5px;
  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverControlsColor};
    border-color: ${({ theme }) => theme.colors.hoverControlsColor};
  }

  & svg {
    font-size: 30px;
  }
`;
