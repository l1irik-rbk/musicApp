import React from 'react';

import * as S from '../../theme/Components/UI/StyledSpinner';

const Spinner = (): JSX.Element => {
  return (
    <S.StyledSpinner>
      <S.Loading>
        <S.Spins>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </S.Spins>
      </S.Loading>
    </S.StyledSpinner>
  );
};

export default Spinner;
