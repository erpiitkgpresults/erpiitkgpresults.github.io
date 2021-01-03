import { createDataForTableOne } from "./createDataForTableOne";
import { createDataForTableTwo } from "./createDataForTableTwo";
import { createDataForTableThree } from "./createDataForTableThree";

export const semTen = () => {
  const rowsForTableOne = [
    createDataForTableOne(
      "Curricula - Registered - Cleared",
      "2 - 0 - 0",
      "3(1-O) - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "0 - 0 - 0",
      "74 - 69 - 69"
    ),
  ];

  const rowsForTableTwo = [
    createDataForTableTwo(
      "PH58042",
      "COMPREHENSIVE VIVA VOCE-II",
      "Depth",
      "0-0-0",
      "2",
      "",
      "",
      ""
    ),
    createDataForTableTwo(
      "PH57002",
      "PROJECT PART-II",
      "Depth",
      "0-0-15",
      "10",
      "",
      "",
      ""
    ),
    createDataForTableTwo(
      "",
      "",
      "Elective VIII(Flexi)",
      "",
      "",
      "",
      "",
      ""
    ),createDataForTableTwo(
      "",
      "",
      "Elective VIII(Flexi)",
      "",
      "",
      "",
      "",
      ""
    ),
    createDataForTableTwo(
        "",
        "",
        "Elective VI",
        "",
        "",
        "",
        "",
        ""
      ),
      createDataForTableTwo(
        "",
        "",
        "Elective VII",
        "",
        "",
        "",
        "",
        ""
      ),
  ];

  const rowsForTableThree = [
    createDataForTableThree(
      "Semester - 10",
      "-",
      "-",
      "--",
      "-",
      "-",
      "-"
    ),
  ];

  return { rowsForTableOne, rowsForTableTwo, rowsForTableThree };
};
