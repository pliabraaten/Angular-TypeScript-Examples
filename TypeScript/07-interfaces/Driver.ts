import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";



let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// Declare an array of coaches
let theCoaches: Coach[] = [];

// Add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

// Print
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}