import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semEight = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "4 - 4 - 4",
      "2() - 2 - 2",
      "0 - 0 - 0",
      "1 - 1 - 1",
      "0 - 0 - 0",
      "62 - 62 - 62"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "PH49014",
      "CONDENSED MATTER PHYSICS LAB-II",
      "Depth",
      "0-0-6",
      "4",
      "8",
      "SP-19-20(P)",
      ""
    ),
    createDataForTableTwo(
      "PH52002",
      "ATOMIC AND MOLECULAR PHYSICS",
      "Depth",
      "3-0-0",
      "3",
      "8",
      "SP-19-20(P)",
      ""
    ),
    createDataForTableTwo(
      "PH41009",
      "ORDER AND CHAOS",
      "Depth",
      "3-0-0",
      "3",
      "8",
      "SP-19-20(P)",
      ""
    ),
    createDataForTableTwo(
      "PH59008",
      "MODERN PHYSICS LAB.",
      "Depth",
      "0-0-3",
      "2",
      "8",
      "SP-19-20(P)",
      ""
    ),
    createDataForTableTwo(
      "PH60307",
      "PHYSICAL COSMOLOGY",
      "Elective-I",
      "3-0-0",
      "3",
      "8",
      "SP-19-20(P)",
      ""
    ),
    createDataForTableTwo(
      "PH58036",
      "INTRODUCTION TO ASTRONOMY & ASTROPHYSICS",
      "Elective-II",
      "3-0-0",
      "3",
      "8",
      "SP-19-20(P)",
      ""
    ),
    createDataForTableTwo(
      "HS30057",
      "SOCIOLOGY OF ECONOMICS DEVELOPMENT",
      "HSS",
      "3-0-0",
      "3",
      "8",
      "SP-19-20(P)",
      ""
    ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 8",
      "179 - 179",
      "21 - 21",
      "--",
      "-",
      "-",
      "-"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
