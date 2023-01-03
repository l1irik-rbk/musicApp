import React from 'react';

import { FAQ_ITEMS, MUSCICMATCH } from 'helpers/constants';
import { getSpace } from 'utils/getSpace';

import * as S from 'theme/Components/UI/StyledFAQ';
import * as A from 'theme/Components/UI/StyledMain';

const FAQ = (): JSX.Element => {
  return (
    <>
      <A.PageTitle>FAQ</A.PageTitle>
      <A.PageItems listStyle="square">
        {FAQ_ITEMS.map((item, index) => {
          const mark = index === FAQ_ITEMS.length - 1 ? '.' : ';';

          if (item.includes(MUSCICMATCH)) {
            const arr = item.split(' ');

            const indexEl = arr.indexOf(MUSCICMATCH);
            const firstPart = arr.slice(0, indexEl).join(' ');
            const secondPart = arr.slice(indexEl + 1, arr.length).join(' ');

            return (
              <A.PageItem key={index}>
                {firstPart}
                {getSpace(firstPart)}
                <S.FAQLink href="https://www.musixmatch.com/" target="_blank" rel="noreferrer">
                  {MUSCICMATCH}
                </S.FAQLink>
                {getSpace(secondPart)}
                {secondPart}
                {mark}
              </A.PageItem>
            );
          }
          return (
            <A.PageItem key={index}>
              {item}
              {mark}
            </A.PageItem>
          );
        })}
      </A.PageItems>
    </>
  );
};

export default FAQ;
