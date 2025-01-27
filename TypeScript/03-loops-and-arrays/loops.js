"use strict";
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let reviews = [5, 5, 4.5, 1, 3];
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
let average = total / reviews.length;
console.log("Avg: " + average);
let sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// Simplified loop
for (let tempSport of sportsOne) {
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
