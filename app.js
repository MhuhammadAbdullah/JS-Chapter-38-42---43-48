// QUESTION 01

// var result = 1;
// for (let i = 0; i < b; i++) {
//     result *= a;
// }
// function power(a, b) {
//     return result;
// }

// console.log(power(2, 3));


// QUESTION 02

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2023));


// QUESTION 03


// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function areaOfTriangle(a, b, c) {
//     const s = calculateS(a, b, c);
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// console.log(areaOfTriangle(3, 4, 5));

// QUESTION 04

// function average(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }

// function percentage(marks1, marks2, marks3) {
//     const totalMarks = 300;
//     const obtainedMarks = marks1 + marks2 + marks3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction(marks1, marks2, marks3) {
//     const avg = average(marks1, marks2, marks3);
//     const perc = percentage(marks1, marks2, marks3);
//     console.log("Average: " + avg);
//     console.log("Percentage: " + perc + "%");
// }

// mainFunction(75, 80, 90);

// QUESTION 05

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; 
// }

// console.log(customIndexOf("Hello", "e"));
// console.log(customIndexOf("Hello", "z")); 


// QUESTION 06

// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }


// console.log(removeVowels("This is a test sentence"));


// QUESTION 07

// function countSuccessiveVowels(text) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
    
//     for (let i = 0; i < text.length - 1; i++) {
//         if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
//             count++;
//             console.log("Found successive vowels:", text[i] + text[i + 1]);
//         }
//     }

//     return count;
// }

// const text = "Pleases read this application and give me gratuity";
// console.log("Total successive vowels:", countSuccessiveVowels(text));


// QUESTION 08


// function kmToMeters(km) {
//     return km * 1000;
// }

// function kmToFeet(km) {
//     return km * 3280.84;
// }

// function kmToInches(km) {
//     return km * 39370.1;
// }

// function kmToCentimeters(km) {
//     return km * 100000;
// }

// const distanceInKm = 5;
// console.log("Meters:", kmToMeters(distanceInKm));
// console.log("Feet:", kmToFeet(distanceInKm));
// console.log("Inches:", kmToInches(distanceInKm));
// console.log("Centimeters:", kmToCentimeters(distanceInKm));


// QUESTION 09

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12;
//     let overtimeHours = hoursWorked - regularHours;

//     if (overtimeHours > 0) {
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
//     }
// }

// console.log("Overtime Pay:", calculateOvertimePay(45)); 
// console.log("Overtime Pay:", calculateOvertimePay(40));


// QUESTION 10


// function calculateCurrencyNotes(amount) {
//     const notes = { hundred: 0, fifty: 0, ten: 0 };

//     if (amount >= 100) {
//         notes.hundred = Math.floor(amount / 100);
//         amount %= 100;
//     }
//     if (amount >= 50) {
//         notes.fifty = Math.floor(amount / 50);
//         amount %= 50;
//     }
//     if (amount >= 10) {
//         notes.ten = Math.floor(amount / 10);
//     }

//     return notes;
// }

// const amountToWithdraw = 580;
// const notes = calculateCurrencyNotes(amountToWithdraw);
// console.log(`100s: ${notes.hundred}, 50s: ${notes.fifty}, 10s: ${notes.ten}`);
