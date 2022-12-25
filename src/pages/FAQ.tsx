import React from 'react';

import * as S from '../theme/Components/UI/StyledFAQ';
import * as A from '../theme/Components/UI/StyledMain';

const FAQ = (): JSX.Element => {
  return (
    <>
      <A.PageTitle>FAQ</A.PageTitle>
      <A.PageItems listStyle="square">
        <A.PageItem>You can find a track from the best to the worst in the ranking;</A.PageItem>
        <A.PageItem>You can find and listen to the track in popular music services;</A.PageItem>
        <A.PageItem>On the track page you can load the lyrics of the song;</A.PageItem>
        <A.PageItem>
          If there is no lyrics for the song, then you can add the lyrics on the{' '}
          <S.FAQLink href="https://www.musixmatch.com/" target="_blank" rel="noreferrer">
            musixmatch.com
          </S.FAQLink>
          ;
        </A.PageItem>

        <A.PageItem>You can find an artist from the best to the worst in the ranking;</A.PageItem>
        <A.PageItem>On the artist page you can load albums;</A.PageItem>
        <A.PageItem>On the album page you can see all the tracks;</A.PageItem>

        <A.PageItem>
          You can view the charts by tracks and artists in each country (top 50).
        </A.PageItem>
      </A.PageItems>
    </>
  );
};

export default FAQ;
