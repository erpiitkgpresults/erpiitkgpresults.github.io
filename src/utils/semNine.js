import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semNine = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "4 - 4 - 4",
      "3(1-O) - 3(1-O) - 3(1-O)",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "69 - 69 - 69"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "PH51023",
      "STATISTICAL PHYSICS-II",
      "Depth",
      "3-0-0",
      "3",
      "9",
      "AU-20-21(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH57001",
      "PROJECT PART-I",
      "Depth",
      "0-0-12",
      "8",
      "9",
      "AU-20-21(P)",
      "A"
    ),
    createDataForTableTwo(
      "PH51001",
      "EXPERIMENTAL METHODS",
      "Depth",
      "3-0-0",
      "3",
      "9",
      "AU-20-21(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH58033",
      "SUMMER TRAINING",
      "Depth",
      "0-0-0",
      "2",
      "9",
      "AU-20-21(P)",
      "C"
    ),
    createDataForTableTwo(
      "EC60007",
      "COMPUTATIONAL NEUROSCIENCE",
      "Elective IV(Flexi)",
      "3-0-0",
      "3",
      "9",
      "AU-20-21(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH61011",
      "PHYSICS OF FUNCTIONAL MATERIALS",
      "Elective-III",
      "3-1-0",
      "4",
      "9",
      "AU-20-21(P)",
      "B"
    ),
    createDataForTableTwo(
      "PH60035",
      "PHYSICS OF SEMICONDUCTOR DEVICES",
      "Elective-V",
      "3-1-0",
      "4",
      "9",
      "AU-20-21(P)",
      "B"
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 9",
      "206 - 206",
      "27 - 27",
      "7.48 - 7.48 - 8.33",
      "6 - 6",
      "0 - 0",
      "8.00 - 0.00"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
