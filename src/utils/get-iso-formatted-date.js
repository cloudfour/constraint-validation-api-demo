/**
 * Generates an ISO 8601 formatted date string (YYYY-MM-DD) from a Date object.
 *
 * @see https://en.wikipedia.org/wiki/ISO_8601
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings
 * @param {Date} date The date object to format
 * @returns {string} A date string formatted as follow: YYYY-MM-DD
 */
export const getISOFormattedDate = (date) => {
  // Get 4-digit year.
  const year = date.getFullYear();
  // Use padding to ensure 2 digits.
  // Note: January is 0, February is 1, and so on.
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  // Use padding to ensure 2 digits.
  const day = date.getDate().toString().padStart(2, '0');
  // Return ISO 8601 format (YYYY-MM-DD).
  return `${year}-${month}-${day}`;
};
