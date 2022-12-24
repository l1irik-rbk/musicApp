import React from 'react';
import * as S from '../../theme/UI/StyledError';

const Error = ({ error }: { error: string | null }): JSX.Element => {
  return <S.StyledError>{error}</S.StyledError>;
};

export default Error;
