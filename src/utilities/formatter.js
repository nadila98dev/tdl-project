import { format, isValid, parse, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

export function decodeHtml(html) {
  if (!html) return "";
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export function stripHtmlTags(htmlString) {
  if (!htmlString) return "";
  // Create a new DOMParser instance
  const parser = new DOMParser();
  // Parse the HTML string into a DOM document
  const doc = parser.parseFromString(htmlString, "text/html");
  // Extract the text content from the parsed document
  const textContent = doc.body.textContent || "";
  return textContent.trim(); // Trim any leading or trailing whitespace
}

function fromISO(stringDate) {
  if (!stringDate) return null;
  const parsedDate = parseISO(stringDate, { locale: enUS });

  return parsedDate;
}

export function toReadableDate(dateString, formatString = "dd MMM yyyy") {
  const date = fromISO(dateString);

  if (!isValid(date)) return null;
  return format(date, formatString, { locale: enUS });
}

export function toReadableDateWithoutZero(dateString) {
  const date = fromISO(dateString);

  if (!isValid(date)) return null;

  // Format with day without leading zero
  return format(date, "d MMM yyyy", { locale: enUS });
}

export function toIsoFromPassportDate(dateString) {
  const date = parse(dateString, "yyMMdd", new Date());
  if (!isValid(date)) return null;
  return format(date, "yyyy-MM-dd", { locale: enUS });
}

export function dateToYearMonth(date) {
  return format(date, "yyyyMM", { locale: enUS });
}

export function toReadableDateText(dateString) {
  const date = fromISO(dateString);
  if (!isValid(date)) return null;
  return format(date, "EEE, d MMM yyyy", { locale: enUS });
}

export default {
  decodeHtml,
  stripHtmlTags,
  toReadableDate,
  toReadableDateWithoutZero,
  toReadableDateText,
};
