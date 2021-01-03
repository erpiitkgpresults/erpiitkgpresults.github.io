import { semOne } from "./semOne";
import { semTwo } from "./semTwo";
import { semThree } from "./semThree";
import { semFour } from "./semFour";
import { semFive } from "./semFive";
import { semSix } from "./semSix";
import { semSeven } from "./semSeven";
import { semEight } from "./semEight";
import { semNine } from "./semNine";
import { semTen } from "./semTen";

export const getData = (type) => {
  switch (type) {
    case "Semester 1":
      return semOne();
    case "Semester 2":
      return semTwo();
    case "Semester 3":
      return semThree();
    case "Semester 4":
      return semFour();
    case "Semester 5":
      return semFive();
    case "Semester 6":
      return semSix();
    case "Semester 7":
      return semSeven();
    case "Semester 8":
      return semEight();
    case "Semester 9":
      return semNine();
    case "Semester 10":
      return semTen();
    default:
      return {};
  }
};
