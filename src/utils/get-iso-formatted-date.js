/**
 * Generates an ISO 8601 formatted date string (YYYY-MM-DD) from a Date object.
 *
 * The goal is to return the value of Date.prototype.toISOString without the
 * time portion (e.g., '2023-03-21T04:15:47.000Z' becomes '2023-03-21').
 * This is useful for setting a date input's min/max values and also for
 * setting date values (e.g., for automated tests).
 *
 * The timezone returned by Date.prototype.toISOString has a zero UTC offset.
 *
 * Used without calculating a timezone offset, the date returned was off by a day.
 * To fix that, the logic below uses Date.prototype.getTimezoneOffset to ensure
 * the value returned by Date.prototype.toISOString matches local time zone.
 *
 * @see https://en.wikipedia.org/wiki/ISO_8601
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings
 * @see https://yagisanatode.com/2022/01/12/create-a-iso-string-from-date-string-input-intended-for-utc-date-in-javascript/
 * @param {Date} date
 * @returns {string}
 */
export const getISOFormattedDate = (date) => {
  // First we need to get the timezone offset in milliseconds. The timezone
  // offset is the difference between the time on the local computer and
  // Universal Coordinated Time (UTC).
  const timezoneOffsetInMinutes = date.getTimezoneOffset();
  const timezoneOffsetInMilliseconds = timezoneOffsetInMinutes * 60 * 1000;

  // Now, let's convert the date to milliseconds.
  const dateInMilliseconds = Date.parse(date);

  // Calculate the date with the timezone offset and convert to ISO format
  // (e.g., '2023-03-21T04:15:47.000Z').
  const dateWithOffset = dateInMilliseconds - timezoneOffsetInMilliseconds;
  const dateAsISOString = new Date(dateWithOffset).toISOString();

  // Split to return ISO 8601 format (YYYY-MM-DD).
  return dateAsISOString.split('T')[0];
};
