import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semSix = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "9 - 9 - 9",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "48 - 48 - 48"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "PH41014",
      "CONDENSED MATTER PHYSICS-I",
      "Depth",
      "3-0-0",
      "3",
      "6",
      "SP-18-19(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH49012",
      "COMPUTATIONAL PHYSICS LAB.",
      "Depth",
      "0-0-3",
      "2",
      "6",
      "SP-18-19(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH41016",
      "NUCLEAR AND PARTICLE PHYSICS -I",
      "Depth",
      "3-0-0",
      "3",
      "6",
      "SP-18-19(P)",
      "C"
    ),
    createDataForTableTwo(
      "PH49016",
      "NUCLEAR & PARTICLE PHYSICS LAB I",
      "Depth",
      "0-0-3",
      "2",
      "6",
      "SP-18-19(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH38002",
      "COMPREHENSIVE VIVA VOCE - I",
      "Depth",
      "0-0-0",
      "2",
      "6",
      "SP-18-19(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH41008",
      "MATHEMATICAL METHODS -II",
      "Depth",
      "3-0-0",
      "3",
      "6",
      "SP-18-19(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH39008",
      "ELECTROMAGNETISM & OPTICS LAB - III",
      "Depth",
      "0-0-3",
      "2",
      "6",
      "SP-18-19(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH41012",
      "COMPUTATIONAL METHODS",
      "Depth",
      "2-0-0",
      "2",
      "6",
      "SP-18-19(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH41010",
      "QUANTUM MECHANICS-II",
      "Depth",
      "3-0-0",
      "3",
      "6",
      "SP-18-19(P)",
      "A"
    ),
    createDataForTableTwo(
      "MA60002",
      "DATA STRUCTURE AND ALGORITHM",
      "Additional",
      "3-1-0",
      "4",
      "6",
      "SP-18-19(P)",
      "B"
    ),
    createDataForTableTwo(
      "MA69004",
      "DATA STRUCTURE AND ALGORITHM LABORATORY",
      "Additional",
      "0-0-3",
      "2",
      "6",
      "SP-18-19(P)",
      "EX"
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 6",
      "136 - 136",
      "22 - 22",
      "8.48 - 8.48 - 8.28",
      "6 - 6",
      "6 - 6",
      "8.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
