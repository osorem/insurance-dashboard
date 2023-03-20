let excel = {};

/**
 * Joins several text items into one text item.
 *
 * Category: Text
 *
 * @returns
 */
excel.CONCATENATE = (...args) => {
  return args.flat(99).join('');
};

/**
 * Removes spaces from text.
 *
 * Category: Text
 *
 * @param {string} text The text from which you want spaces removed.
 * @returns
 */
excel.TRIM = (text) => {
  return text.toString().replace(/\s+/g, ' ').trim();
};

/**
 * Returns a specific number of characters from a text string starting at the position you specify
 *
 * Category: Text
 *
 * @param {string} text The text string containing the characters you want to extract.
 * @param {number} start_num The position of the first character you want to extract in text. The first character in text has start_num 1, and so on.
 * @param {number} num_chars Specifies the number of characters you want MID to return from text.
 * @returns
 */
excel.MID = (text, start_num, num_chars) => {
  const begin = start_num - 1;
  const end = begin + num_chars;

  return text.substring(Math.round(begin), Math.round(end));
};

/**
 * Specifies a logical test to perform.
 *
 * Category: Logical
 *
 * @param {boolean} logical_test
 * @param {*} value_if_true
 * @param {*} value_if_false
 *
 * @returns
 */
excel.IF = (logical_test, value_if_true, value_if_false) => {
  return logical_test ? value_if_true : value_if_false;
};

/**
 * Returns TRUE if any argument is TRUE.
 *
 * Category: Logical
 *
 * @returns
 */
excel.OR = (...args) => {
  return args.flat(99).some((arg) => arg === true);
};

/**
 * Returns TRUE if all of its arguments are TRUE.
 *
 * Category: Logical
 *
 * @returns
 */
excel.AND = (...args) => {
  return args.flat(99).every((arg) => arg === true);
};

/**
 * Serialize Date
 *
 * Category: Date and time
 *
 * @param {Date} date Date to serialize
 * @returns
 */
excel.serial = (date) => {
  const addOn = date > -2203891200000 ? 2 : 1;
  const d1900 = new Date(Date.UTC(1900, 0, 1));

  return Math.ceil((date - d1900) / 86400000) + addOn;
};

/**
 * Returns the serial number of a particular date.
 *
 * Category: Date and time
 *
 * @param {number} year Year
 * @param {number} month Month
 * @param {number} day Day
 * @returns
 */
excel.DATE = (year, month, day) => {
  return new Date(
    Date.UTC(Math.round(year), Math.round(month - 1), Math.round(day))
  );
};

/**
 * Returns the number of days between two dates.
 *
 * Category: Date and time
 *
 * @param {Date} end_date Start_date and End_date are the two dates between which you want to know the number of days.
 * @param {Date} start_date Start_date and End_date are the two dates between which you want to know the number of days.
 * @returns
 */
excel.DAYS = (end_date, start_date) => {
  return (
    excel.serial(
      new Date(
        Date.UTC(
          end_date.getUTCFullYear(),
          end_date.getUTCMonth(),
          end_date.getUTCDate(),
          0,
          0,
          0,
          0
        )
      )
    ) -
    excel.serial(
      new Date(
        Date.UTC(
          start_date.getUTCFullYear(),
          start_date.getUTCMonth(),
          start_date.getUTCDate(),
          0,
          0,
          0,
          0
        )
      )
    )
  );
};

module.exports = excel;
