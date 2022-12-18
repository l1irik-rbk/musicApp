import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  text-align: center;
`;

const Error = ({ error }: { error: string | null }): JSX.Element => {
  return <StyledError>{error}</StyledError>;
};

export default Error;
