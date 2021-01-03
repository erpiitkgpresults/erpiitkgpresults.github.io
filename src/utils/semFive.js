import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semFive = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "7 - 7 - 7",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "39 - 39 - 39"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "PH31009",
      "ELECTRONICS FOR PHYSICISTS",
      "Depth",
      "3-0-0",
      "3",
      "5",
      "AU-18-19(P)",
      "EX"
    ),
    createDataForTableTwo(
      "PH31011",
      "QUANTUM MECHANICS I",
      "Depth",
      "3-1-0",
      "4",
      "5",
      "AU-18-19(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH31007",
      "CLASSICAL MECHANICS-II",
      "Depth",
      "3-0-0",
      "3",
      "5",
      "AU-18-19(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH39003",
      "ELECTRONICS LAB.",
      "Depth",
      "0-0-3",
      "2",
      "5",
      "AU-18-19(P)",
      "EX"
    ),
    createDataForTableTwo(
      "PH39005",
      "ELECTROMAGNETISM & OPTICS LAB - II",
      "Depth",
      "0-0-6",
      "4",
      "5",
      "AU-18-19(P)",
      "C"
    ),
    createDataForTableTwo(
      "PH31013",
      "MATHEMATICAL METHODS I",
      "Depth",
      "3-1-0",
      "4",
      "5",
      "AU-18-19(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH31003",
      "ELECTRODYNAMICS-II",
      "Depth",
      "3-0-0",
      "3",
      "5",
      "AU-18-19(P)",
      "A"
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 5",
      "114 - 114",
      "23 - 23",
      "8.62 - 8.62 - 9.00",
      "0 - 0",
      "0 - 0",
      "0.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
