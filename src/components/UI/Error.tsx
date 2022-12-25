import React from 'react';
import styled from 'styled-components';

import { MESSAGE_LYRICS } from '../../helpers/constants';
import { useAppSelector } from '../../Redux/hooks';

import * as S from '../../theme/Components/UI/StyledError';

const Error = ({ error }: { error: string | null }): JSX.Element => {
  const { currentTrack } = useAppSelector((state) => state.currentTrack);
  console.log('currentTrack', currentTrack?.track_edit_url);
  console.log(error?.includes(MESSAGE_LYRICS));
  return (
    <S.StyledError>
      {error}
      {error?.includes(MESSAGE_LYRICS) ? (
        <S.ErrorLink href={currentTrack?.track_edit_url} target="_blank" rel="noreferrer">
          link
        </S.ErrorLink>
      ) : (
        ''
      )}
    </S.StyledError>
  );
};

export default Error;
