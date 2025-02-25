import moment from "moment";

// Function to normalize a timestamp by setting the time to midnight (00:00:00)
export const formDate = (timestamp) => {
  return new Date(timestamp).setHours(0, 0, 0, 0);
};

// Function to format a date into a localized string (e.g., MM/DD/YYYY or DD/MM/YYYY based on locale)
export const fomatDateForText = (date) => {
  return moment(date).format("ll"); // "L" uses the locale-specific date format
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  const timeString = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return timeString; //this could be a format like 9:00 AM
};
