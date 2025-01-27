import { Coach } from "./Coach";

export class GolfCoach implements Coach {

    // Implement the method from the interface
    getDailyWorkout(): string {
        return "Hit 100 balls at the golf range";
    }
}