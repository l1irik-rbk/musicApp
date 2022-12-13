import { MAX_PAGE_COUNT } from '../helpers/constants';

export const setTotalPageCount = (pageCount: number) =>
  pageCount > MAX_PAGE_COUNT ? MAX_PAGE_COUNT : pageCount;
