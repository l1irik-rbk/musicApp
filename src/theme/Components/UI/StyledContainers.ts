import styled from 'styled-components';

import { IContentContainer } from 'theme/Types';

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
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  justify-content: center;
  gap: 0.7rem;
  gap: ${({ gap }) => gap || '0.7rem'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  margin-bottom: ${({ marginB }) => marginB || '0'};

  @media (min-width: 767px) {
    gap: ${({ gap }) => gap || '1rem'};
  }
`;

export const MusicLinksContainer = styled.div`
  display: flex;
  align-items: center;

  & a + a {
    margin-left: 10px;
  }
`;

export const LyricsContainer = styled.div``;

export const ControlsContainer = styled.div``;
