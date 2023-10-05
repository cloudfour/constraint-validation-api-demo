/**
 * Returns a Date object representing the number of years ago from today.
 * @param {number} years - The number of years ago from today.
 * @returns {Date} - A Date object.
 */
export const yearsAgoFromToday = (years) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - years);
  return date;
};
