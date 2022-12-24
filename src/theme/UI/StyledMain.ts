import styled from 'styled-components';

import { ICardTitle, IPageSubTitle, IPageItems } from '../Types';

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.darkBgColor};
  border-radius: 1rem;
  padding: 10px;
  width: 300px;

  @media (min-width: 767px) {
    width: 500px;
  }
`;

export const CardTitle = styled.h3<ICardTitle>`
  display: inline-block;
  margin-bottom: 10px;
  margin-bottom: ${({ marginBottom }) => marginBottom || '10px'};
  transition: all 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverCardColor};
  }

  @media (min-width: 767px) {
    font-size: 25px;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: inherit;
  border: 1px solid hsl(200deg 15% 8%);
  padding: 5px;
  margin-bottom: 10px;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PageTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 767px) {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

export const PageSubTitle = styled.h4<IPageSubTitle>`
  font-size: 20px;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};

  &:hover {
    font-weight: ${({ fontWeight }) => fontWeight || '400'};
  }

  @media (min-width: 767px) {
    font-size: 25px;
  }
`;

export const PageItems = styled.ul<IPageItems>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-end'};

  & li + li {
    margin-left: ${({ flexDirection }) => (flexDirection === 'row' ? '7px' : '0')};
  }
`;

export const PageItem = styled.li`
  font-size: 20px;
  margin-bottom: 5px;
  transition: all 0.5s;

  &:first-child a:hover {
    color: ${({ theme }) => theme.colors.hoverCardColor};
  }

  & span {
    font-weight: 700;

    & svg {
      position: relative;
      top: 3px;
    }
  }

  @media (min-width: 767px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;
