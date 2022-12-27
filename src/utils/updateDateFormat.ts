export const updateDateFormat = (date: string | undefined) => {
  if (date) return date.split('-').reverse().join('-');
};
