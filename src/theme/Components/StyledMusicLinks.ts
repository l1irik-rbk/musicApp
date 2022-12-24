import styled from 'styled-components';

export const MusicLink = styled.a`
  & svg {
    font-size: 1rem;
  }

  @media (min-width: 767px) {
    & svg {
      font-size: 20px;
    }
  }
`;
