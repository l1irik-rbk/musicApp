import styled from 'styled-components';

export const StyledError = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  text-align: center;

  @media (min-width: 767px) {
    font-size: 40px;
  }
`;
