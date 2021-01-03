import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semSeven = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "6 - 6 - 6",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "1 - 1 - 1",
      "55 - 55 - 55"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "PH41017",
      "CONDENSED MATTER PHYSICS-II",
      "Depth",
      "3-0-0",
      "3",
      "7",
      "AU-19-20(P)",
      "D"
    ),
    createDataForTableTwo(
      "PH41019",
      "NUCLEAR AND PARTICLE PHYSICS -II",
      "Depth",
      "3-0-0",
      "3",
      "7",
      "AU-19-20(P)",
      "C"
    ),
    createDataForTableTwo(
      "PH41004",
      "OPTICS",
      "Depth",
      "3-0-0",
      "3",
      "7",
      "AU-19-20(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH41023",
      "STATISTICAL PHYSICS-I",
      "Depth",
      "3-1-0",
      "4",
      "7",
      "AU-19-20(P)",
      "C"
    ),
    createDataForTableTwo(
      "PH49001",
      "CONDENSED MATTER PHYSICS LAB-I",
      "Depth",
      "0-0-6",
      "4",
      "7",
      "AU-19-20(P)",
      "C"
    ),
    createDataForTableTwo(
      "PH49019",
      "NUCLEAR AND PARTICLE PHYSICS LAB-II",
      "Depth",
      "0-0-3",
      "2",
      "7",
      "AU-19-20(P)",
      "B"
    ),
    createDataForTableTwo(
      "EP60005",
      "FINANCIAL AND LEGAL ASPECTS OF BUSINESS",
      "IEM",
      "2-1-0",
      "3",
      "7",
      "AU-19-20(P)",
      "EX"
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 7",
      "158 - 158",
      "22 - 22",
      "7.58 - 7.58 - 7.16",
      "6 - 6",
      "0 - 0",
      "8.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
