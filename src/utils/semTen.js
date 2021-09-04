import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semTen = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "2 - 0 - 0",
      "3(1-O) - 3(1-O) - 3(1-O)",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "74 - 74 - 74"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "PH58042",
      "COMPREHENSIVE VIVA VOCE-II",
      "Depth",
      "0-0-0",
      "2",
      "10",
      "SP-20-21(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH57002",
      "PROJECT PART-II",
      "Depth",
      "0-0-15",
      "10",
      "10",
      "SP-20-21(P)",
      "C"
    ),
    createDataForTableTwo(
      "EP60010",
      "FINANCING NEW VENTURE",
      "Elective VIII(Flexi)",
      "3-0-0",
      "3",
      "10",
      "SP-20-21(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH61014",
      "PHYSICS OF RENEWABLE ENERGY SYSTEMS",
      "Elective VI",
      "3-1-0",
      "4",
      "10",
      "SP-20-21(P)",
      "B"
    ),
      createDataForTableTwo(
        "AI61002",
        "DEEP LEARNING FOUNDATIONS AND APPLICATIONS",
        "Elective VII",
        "3-1-0",
        "4",
        "10",
        "SP-20-21(P)",
        "A"
      ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 10",
      "229 - 229",
      "23 - 23",
      "7.51 - 7.51 - 8.78",
      "6 - 6",
      "0 - 0",
      "8.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
