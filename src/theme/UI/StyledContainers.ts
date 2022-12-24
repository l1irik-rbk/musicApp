import styled from 'styled-components';
import { IContentContainer } from '../Types';

export const Main = styled.main`
  max-width: ${({ theme }) => theme.container.containerMaxWidth.maxWidth};
  padding: ${({ theme }) => theme.container.containerPadding.padding};
  margin: ${({ theme }) => theme.container.containerMargin.margin};
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container.containerMaxWidth.maxWidth};
  padding: ${({ theme }) => theme.container.containerPadding.padding};
  margin: ${({ theme }) => theme.container.containerMargin.margin};
  color: ${({ theme }) => theme.colors.lightColor};
`;

export const ContentContainer = styled.div<IContentContainer>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  align-items: ${({ alignItems }) => alignItems || 'stretch'};

  @media (min-width: 767px) {
    gap: 1rem;
  }
`;

export const MusicLinksContainer = styled.div`
  display: flex;
  align-items: center;

  & a + a {
    margin-left: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
