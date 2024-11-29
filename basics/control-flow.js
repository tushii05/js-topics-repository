// **If/Else Example**
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// **Switch Example**
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// **For Loop Example**
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i); // Logs 0 to 4
}

// **While Loop Example**
console.log("While Loop:");
let count = 0;
while (count < 5) {
    console.log(count); // Logs 0 to 4
    count++;
}

// **Do/While Loop Example**
console.log("Do/While Loop:");
let num = 0;
do {
    console.log(num); // Logs 0 to 4
    num++;
} while (num < 5);
