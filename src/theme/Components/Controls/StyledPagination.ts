import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  color: inherit;
  justify-content: center;
  margin-bottom: 20px;

  & li a {
    cursor: pointer;
    padding: 0.65rem 0.8rem;
    position: relative;
    display: block;
    color: inherit;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.lightColor};
    border: 1px solid ${({ theme }) => theme.colors.controlsColor};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  & a:hover {
    background-color: ${({ theme }) => theme.colors.hoverControlsColor};
    border-color: ${({ theme }) => theme.colors.hoverControlsColor};
  }

  & li:not(:first-child) a {
    margin-left: -1px;
  }

  & li.active a {
    z-index: 3;
    color: ${({ theme }) => theme.colors.lightColor};
    background-color: ${({ theme }) => theme.colors.darkBgColor};
    border-color: ${({ theme }) => theme.colors.darkBgColor};
  }

  & li.active a:hover {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  & li.disabled a {
    color: ${({ theme }) => theme.colors.disabledControlsColor};
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.lightColor};
    border-color: ${({ theme }) => theme.colors.controlsColor};
  }
`;
