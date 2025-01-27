import { Coach } from "./Coach";

export class CricketCoach implements Coach {

    // Implement the method from the interface
    getDailyWorkout(): string {
        return "Practice your spin bowling technique.";
    }

}