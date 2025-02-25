import moment from "moment";

// Function to normalize a timestamp by setting the time to midnight (00:00:00)
export const formDate = (timestamp) => {
  return new Date(timestamp).setHours(0, 0, 0, 0);
};

// Function to format a date into a localized string (e.g., MM/DD/YYYY or DD/MM/YYYY based on locale)
export const fomatDateForText = (date) => {
  return moment(date).format("ll"); // "L" uses the locale-specific date format
};
