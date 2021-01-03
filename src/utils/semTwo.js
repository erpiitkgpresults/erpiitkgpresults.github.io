import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semTwo = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "8 - 8 - 8",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "16 - 16 - 16"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "CY11001",
      "CHEMISTRY",
      "Depth",
      "3-1-0",
      "4",
      "2",
      "SP-16-17(P)",
      "B"
    ),
    createDataForTableTwo(
      "CY19001",
      "CHEMISTRY LAB.",
      "Depth",
      "3-1-0",
      "4",
      "2",
      "SP-16-17(P)",
      "B"
    ),
    createDataForTableTwo(
      "EA10002",
      "EXTRA ACADEMIC ACTIVITY-II",
      "Depth",
      "3-1-0",
      "4",
      "2",
      "SP-16-17(P)",
      "B"
    ),
    createDataForTableTwo(
      "EE11001",
      "ELECTRICAL TECHNOLOGY",
      "Depth",
      "3-1-0",
      "4",
      "2",
      "SP-16-17(P)",
      "B"
    ),
    createDataForTableTwo(
      "EE19001",
      "ELECTRICAL TECHNOLOGY LAB.",
      "Depth",
      "3-1-0",
      "4",
      "2",
      "SP-16-17(P)",
      "B"
    ),
    createDataForTableTwo(
      "HS13001",
      "ENGLISH FOR COMMUNICATION",
      "Depth",
      "3-1-0",
      "4",
      "2",
      "SP-16-17(P)",
      "B"
    ),
    createDataForTableTwo(
      "MA10002",
      "MATHEMATICS-II",
      "Depth",
      "3-1-0",
      "4",
      "2",
      "SP-16-17(P)",
      "B"
    ),
    createDataForTableTwo(
      "ME19001",
      "INTRODUCTION TO MANUFACTURING PROCESSES",
      "Depth",
      "3-1-0",
      "4",
      "2",
      "SP-16-17(P)",
      "B"
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 2",
      "45 - 45",
      "22 - 22",
      "8.51 - 8.51 - 8.27",
      "0 - 0",
      "0 - 0",
      "0.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
