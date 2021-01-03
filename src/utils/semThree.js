import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semThree = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "6 - 6 - 6",
      "0 - 0 - 0",
      "1 - 1 - 1",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "23 - 23 - 23"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "MA20101",
      "TRANSFORM CALCULUS",
      "Depth",
      "3-0-0",
      "3",
      "3",
      "AU-17-18(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH20003",
      "PHYSICS-II",
      "Depth",
      "3-1-0",
      "4",
      "3",
      "AU-17-18(P)",
      "EX"
    ),
    createDataForTableTwo(
      "PH21001",
      "ELECTRODYNAMICS-I",
      "Depth",
      "3-1-0",
      "4",
      "3",
      "AU-17-18(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH20007",
      "CLASSICAL MECHANICS-I",
      "Depth",
      "3-1-0",
      "4",
      "3",
      "AU-17-18(P)",
      "A"
    ),
    createDataForTableTwo(
      "EA10003",
      "EXTRA ACADEMIC ACTIVITY-III",
      "Depth",
      "0-0-3",
      "0",
      "3",
      "AU-17-18(P)",
      "Y"
    ),
    createDataForTableTwo(
      "PH29001",
      "GENERAL PROPERTIES AND THERMAL PHYSICS LAB",
      "Depth",
      "0-0-6",
      "4",
      "3",
      "AU-17-18(P)",
      "B"
    ),
    createDataForTableTwo(
      "IT30037",
      "INTRODUCTION TO INTERNET",
      "Breadth-I(IT/Mngt.)",
      "3-0-0",
      "3",
      "3",
      "AU-17-18(P)",
      "EX"
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 3",
      "67 - 67",
      "22 - 22",
      "8.53 - 8.53 - 8.58",
      "0 - 0",
      "0 - 0",
      "0.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
