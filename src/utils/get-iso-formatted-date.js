/**
 * Generates an ISO8601 formatted date string (YYYY-MM-DD)
 *
 * High-level, the goal is to return the value of `Date.prototype.toISOString()`
 * (specifically the first part, YYYY-MM-DD) so it can be used for a date input's
 * `min`/`max` values and also for setting date values (e.g. for automated tests).
 *
 * The timezone returned by `Date.prototype.toISOString()` has a zero UTC offset.
 *
 * Used without calculating a timezone offset, the date returned was off by a day.
 * To fix that, the logic below uses `Date.prototype.getTimezoneOffset()` to ensure
 * the value returned by `Date.prototype.toISOString()` matches local time zone.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings
 * @see https://yagisanatode.com/2022/01/12/create-a-iso-string-from-date-string-input-intended-for-utc-date-in-javascript/
 * @param {Date} date
 * @returns {string}
 */
export const getISOFormattedDate = (date) => {
  // const date = new Date(date);
  // Gets the difference in minutes between the time on the local computer and
  // Universal Coordinated Time(UTC).
  const timezoneOffset = date.getTimezoneOffset();
  // Parse the date into milliseconds, then subtract the offset (in milliseconds)
  const dateWithOffset = Date.parse(date) - timezoneOffset * 60 * 1000;
  // Convert to full ISO format (e.g., '2023-03-21T04:15:47.000Z')
  const dateAsISOString = new Date(dateWithOffset).toISOString();
  // Split to return ISO8601 format (YYYY-MM-DD)
  return dateAsISOString.split('T')[0];
  // return dateAsISOString.slice(0, Math.max(0, dateAsISOString.indexOf('T')));
};
