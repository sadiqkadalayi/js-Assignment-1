// Create a program that asks the user for two numbers and prints their sum.

let Number1 = 10;
let Number2 = 20;
let result = Number1 + Number2;
console.log(result);

// Implement a program that calculates the area of a rectangle using given length and width.

let rectangleLength = 10;
let recytangleWidth = 5;
let area = rectangleLength * recytangleWidth;
console.log(area);

// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

const age = 29;

if (age>= 18){
    console.log("eligible to vote");
}else{
    console.log("Not eligible to vote");
}

// Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).

const mark = 90;

if (mark >=60){
    console.log("Congratualtion.. You are passed");
}else{
    console.log("Sorry.. You are failed ..");
}

// Implement a program that checks if a user's entered number is positive, negative, or zero.

const Num = -6;

if (Num > 0){
    console.log("Your Entered Number is Positive...");
}
else if (Num < 0) {
    console.log("Your Entered Number is Negative...");
}
else{
    console.log("its Zero");
}

// Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

const Age = 29;

if (Age >= 0 && Age <= 12){
    console.log("You are Child");
}
else if (Age >=13 && Age <=19){
    console.log("You are Teenager");
}
else if (Age >=20 && Age <=59){
    console.log("You are Adult");
}
else{
    console.log("invalid data...");
}


// find the square of each number in an array=[1,3,9,12,15,18,21] using loop.

const Arr = [1, 3, 9, 12, 15, 18, 21];

let res = [];
for (let i = 0; i < Arr.length; i++) {
  const number = Arr[i];
  const squar = number * number;
  res.push(squar);
}

console.log(res); 

// Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

function sumOfOddNumbers(limit) {
   
    let sum = 0;

    for (let i = 1; i <= limit; i= i+ 2) {
      sum =sum+ i;
    }
    return sum;
  }

  const limit = 10;

  const result1 = sumOfOddNumbers(limit);
  console.log("The sum from 1 to", limit, "is:", result1);


