/**
 * The Formatter class provides methods for formatting Date instances to various
 * formats.
 */
export class Formatter {
  /**
   * Convert a given date into HH:MM format
   * @param date The date to format.
   */
  hoursAndMinutes(date: Date): string {
    const d = new Date(date);
    const hours = pad("" + d.getHours());
    const minutes = pad("" + d.getMinutes());

    return `${hours}:${minutes}`;
  }

  /**
   * Convert a given date into YYYY-MM-DD format.
   * @param date The date to format.
   */
  yearMonthDay(date: Date): string {
    const d = new Date(date);
    const month = pad("" + (d.getMonth() + 1));
    const day = pad("" + d.getDate());
    const year = d.getFullYear();

    return `${year}-${month}-${day}`;
  }
}

/**
 * Pad the provided string with leading zeros if required
 * @param input The input to pad
 */
function pad(input: string): string {
  if (input.length < 2) {
    return "0" + input;
  }

  return input;
}
