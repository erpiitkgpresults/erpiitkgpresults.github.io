import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semFour = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "9 - 9 - 9",
      "0 - 0 - 0",
      "1 - 1 - 1",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "32 - 32 - 32"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "HS20001",
      "ECONOMICS",
      "Depth",
      "3-1-0",
      "4",
      "4",
      "SP-17-18(P)",
      "EX"
    ),
    createDataForTableTwo(
      "EC21101",
      "BASIC ELECTRONICS",
      "Depth",
      "3-1-0",
      "4",
      "4",
      "SP-17-18(P)",
      "B"
    ),
    createDataForTableTwo(
      "BS20001",
      "SCIENCE OF LIVING SYSTEM",
      "Depth",
      "2-0-0",
      "2",
      "4",
      "SP-17-18(P)",
      "A"
    ),
    createDataForTableTwo(
      "EA10004",
      "EXTRA ACADEMIC ACTIVITY-IV",
      "Depth",
      "0-0-3",
      "0",
      "4",
      "SP-17-18(P)",
      "Y"
    ),
    createDataForTableTwo(
      "EC29001",
      "BASIC ELECTRONICS LAB.",
      "Depth",
      "0-0-3",
      "2",
      "4",
      "SP-17-18(P)",
      "A"
    ),
    createDataForTableTwo(
      "EV20001",
      "ENVIRONMENTAL SCIENCE",
      "Depth",
      "2-0-0",
      "2",
      "4",
      "SP-17-18(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH21004",
      "THERMAL PHYSICS",
      "Depth",
      "3-0-0",
      "3",
      "4",
      "SP-17-18(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH20101",
      "FLUID MECHANICS AND ELASTICITY",
      "Depth",
      "3-0-0",
      "3",
      "4",
      "SP-17-18(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH29008",
      "ELECTROMAGNETISM AND OPTICS LAB - I",
      "Depth",
      "0-0-6",
      "4",
      "4",
      "SP-17-18(P)",
      "B"
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 4",
      "91 - 91",
      "24 - 24",
      "8.56 - 8.56 - 8.62",
      "0 - 0",
      "0 - 0",
      "0.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
