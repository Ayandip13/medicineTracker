import moment from "moment";

// Function to normalize a timestamp by setting the time to midnight (00:00:00)
export const formDate = (timestamp) => {
  return new Date(timestamp);
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

export const getRangeDate = (startDate, endDate) => {
  // Convert startDate and endDate to moment objects with 'MM/DD/YYYY' format
  const start = moment(new Date(startDate), "MM/DD/YYYY");
  const end = moment(new Date(endDate), "MM/DD/YYYY");

  // Initialize an empty array to store the date range
  const dates = [];

  // Loop until the start date is the same as or before the end date
  while (start.isSameOrBefore(end)) {
    // Format the current start date and add it to the array
    dates.push(start.format("MM/DD/YYYY"));

    // Increment the start date by one day
    start.add(1, "days");
  }

  // Return the array containing all dates in the range
  return dates;
};
