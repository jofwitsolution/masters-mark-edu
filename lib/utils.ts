import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sanitizeData(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export function getDate_1(date: string | Date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Create a Date object from either a date string or a Date object
  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Extract day, month, and year components
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  // Return formatted date string
  return `${day} ${month} ${year}`;
}

export function getDate_2(date: string | Date): string {
  const d = new Date(date);

  if (isNaN(d.getTime())) {
    throw new Error("Invalid date input");
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();

  const getDaySuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${month} ${day}${getDaySuffix(day)}, ${year}`;
}

function generateRandomChars(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export function createSlug(
  originalValue: string,
  joinCharSize: number
): string {
  // Remove special characters using regex
  const sanitizedTitle = originalValue.replace(/[^\w\s]/g, "");
  // Generate random alphanumeric string
  const randomChars = generateRandomChars(joinCharSize);
  // Replace spaces with dashes and attach random string
  const modifiedValue = sanitizedTitle.replace(/\s+/g, "-") + "-" + randomChars;
  return modifiedValue;
}

export function formatPostDate(input) {
  const currentDate = new Date();
  let targetDate;

  if (typeof input === "string") {
    targetDate = new Date(input);
  } else if (input instanceof Date) {
    targetDate = input;
  } else if (typeof input === "number") {
    targetDate = new Date(input);
  } else {
    return "Invalid input";
  }

  const diffInDays = Math.floor(
    (currentDate - targetDate) / (1000 * 60 * 60 * 24)
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[targetDate.getMonth()];
  const day = targetDate.getDate();

  let dateString = month + " " + day;

  if (diffInDays === 0) {
    dateString += " (today)";
  } else if (diffInDays === 1) {
    dateString += " (yesterday)";
  } else {
    dateString += " (" + diffInDays + " days ago)";
  }

  return dateString;
}
