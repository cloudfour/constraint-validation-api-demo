/**
 * Returns a date object representing the number of years ago from today.
 * @param {number} years - The number of years ago from today.
 * @returns {Date} - A date object.
 */
export const yearsAgoFromToday = (years) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - years);
  return date;
};
