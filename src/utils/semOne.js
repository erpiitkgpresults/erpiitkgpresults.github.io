import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semOne = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "8 - 8 - 8",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "8 - 8 - 8"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "CE13001",
      "ENGINEERING DRAWING AND COMPUTER GRAPHICS",
      "Depth",
      "1-0-3",
      "3",
      "1",
      "AU-16-17(P)",
      "A"
    ),
    createDataForTableTwo(
      "CS10001",
      "PROGRAMMING AND DATA STRUCTURES",
      "Depth",
      "3-1-0",
      "4",
      "3",
      "AU-17-18(P)",
      "EX"
    ),
    createDataForTableTwo(
      "CS19101",
      "PROGRAMMING AND DATA STUCTURES TUTORIAL AND LABORATORY",
      "Depth",
      "0-1-3",
      "3",
      "1",
      "AU-16-17(P)",
      "EX"
    ),
    createDataForTableTwo(
      "EA10001",
      "EXTRA ACADEMIC ACTIVITY-I",
      "Depth",
      "0-0-3",
      "0",
      "1",
      "AU-16-17(P)",
      "D"
    ),
    createDataForTableTwo(
      "MA10001",
      "MATHEMATICS-I",
      "Depth",
      "3-1-0",
      "4",
      "1",
      "AU-16-17(P)",
      "C"
    ),
    createDataForTableTwo(
      "ME10001",
      "MECHANICS",
      "Depth",
      "3-1-0",
      "4",
      "1",
      "AU-16-17(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH11001",
      "PHYSICS",
      "Depth",
      "3-1-0",
      "4",
      "1",
      "AU-16-17(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH19001",
      "PHYSICS LAB.",
      "Depth",
      "0-0-3",
      "2",
      "1",
      "AU-16-17(P)",
      "A"
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 1",
      "23 - 23",
      "23 - 23",
      "8.74 - 8.74 - 8.74",
      "0 - 0",
      "0 - 0",
      "0.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
