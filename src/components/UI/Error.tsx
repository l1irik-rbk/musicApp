import React from 'react';

import { MESSAGE_LYRICS } from 'helpers/constants';
import { useAppSelector } from 'Redux/hooks';

import * as S from 'theme/Components/UI/StyledError';

const Error = ({ error }: { error: string | null }): JSX.Element => {
  const { currentTrack } = useAppSelector((state) => state.currentTrack);

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
