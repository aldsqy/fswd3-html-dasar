//Conditional IF
let x = 5;
if (x > 0) {
  console.log("Number is positive.");
}

//Conditional IF-Else
let a = -5;
if (b > 0) {
  console.log("Number is positive.");
} else {
  console.log("Number is negative.");
}

//Conditional Else-IF
let number = 0;
if (number > 0) {
  console.log("Number is positive.");
} else if (number < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}

//Conditional Switch
let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  case "Thursday":
    console.log("Today is Thursday.");
    break;
  case "Friday":
    console.log("Today is Friday.");
    break;
  case "Saturday":
    console.log("Today is Saturday.");
    break;
  case "Sunday":
    console.log("Today is Sunday.");
    break;
  default:
    console.log("Invalid day.");
    break;
}
