// // count pairs in an array
// const n = 9;
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// function pairs(n, ar) {
//   let sortedArr = ar.sort((a, b) => a - b);
//   let pairs = 0;
//   for (let i = 0; i < n - 1; i++) {
//     if (sortedArr[i] === sortedArr[i + 1]) {
//       pairs++;
//       i += 1;
//     }
//   }
//   return pairs;
// }
// //const result = pairs(n, ar);

// Count valleys Gary on Gary's trip.
// allways ending at sea level -> 0
// up -> +      //down -> -
// n => numbers of steps
// s => string of types of steps
// function countingValleys(n, s) {
//   let seaLevel = 0;
//   let valleys = 0;
//   let steps = s.toLowerCase().split("");

//   for (let i = 0; i < n; i++) {
//     if (steps[i] === "d") {
//       if (seaLevel === 0) {
//         valleys++;
//       }
//       seaLevel--;
//     } else if (steps[i] === "u") {
//       seaLevel++;
//     }
//   }

//   return valleys;
// }
// let stepsDirection = "DDUUDDUU";
// let numberOfSteps = 8;
// const result = countingValleys(numberOfSteps, stepsDirection);

// Don't hit 1 "thunder clouds"
// Get "shortes route"
// ex: [0, 0, 0, 1, 0, 1, 0, 1] -> 3 jumps
// function jumpingOnClouds(c) {
//   let jumps = 0;
//   for (let i = 0; i < c.length - 1; i++) {
//     if (c[i + 2] === 0) {
//       jumps++;
//       i++;
//     } else {
//       jumps++;
//     }
//   }
//   return jumps;
// }
// const result = jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);

// // find repeated a's in the sample string
// function repeatedString(s, n) {
//   let min = 1;
//   let maxS = 100;
//   let maxN = 1000000000000;
//   let numberOfA = s.split("").filter((i) => i === "a").length;

//   if (
//     typeof s === "string" &&
//     s.length >= min &&
//     s.length <= maxS &&
//     n >= min &&
//     n === parseInt(n, 0) &&
//     n <= maxN
//   ) {
//     numberOfA =
//       parseInt(n / s.length, 0) * numberOfA +
//       s
//         .slice(0, n % s.length)
//         .split("")
//         .filter((i) => i === "a").length;
//   }
//   return numberOfA;
// }

// const result = repeatedString("a", 100000000000);

// // Does arr includes k?
// function test(arr, k) {
//   return arr.includes(k) ? "YES" : "NO";
// }
// function test(l, r) {
//   if (typeof l !== "number" && typeof r !== "number") {
//     return "I this function needs two numbers";
//   } else if (l.length < 1 || r.length < 1) {
//     return "Both parameters needs to be passed in";
//   } else {
//     let oddNumbers = [];
//     while (l <= r) {
//       console.log(l);
//       if (l % 2 === 1) {
//         oddNumbers.push(l);
//       }
//       l++;
//     }
//     return odd
//   }
// }

//  find vowel and nonvowels print letters on new lines
// function vowelsAndConsonants(s) {
//   const vowels = "aeiou";
//   let consonants = "";
//   let nonConst = "";

//   for (var i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       nonConst += s[i] + "\n";
//     } else {
//       consonants += s[i] + "\n";
//     }
//   }
//   let res = nonConst.trim() + consonants.trim();

//   return res;
// }
// let s = "javascriptloops";
// let result = vowelsAndConsonants(s);

// function vowelsAndConsonants(s) {
//   let vowels = "aeiou";
//   let strArr = s.split("");
//   let vowArr = [];
//   let nonVowArr = [];

//   strArr.map((letter) => {
//     vowels.includes(letter)
//       ? vowArr.push(letter + "\n")
//       : nonVowArr.push(letter + "\n");
//   });

//   console.log(vowArr.join("") + nonVowArr.join(""));
// }
// let string = "javascriptloops";
// const result = vowelsAndConsonants(string);

// function factorial(n) {
//   // 4 - 3 - 2 - 1

//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
// let result = factorial(4);
// function rotLeft(a, d) {
//   let newArr = [];
//   let i = 0;

//   while (i <= a.length - 1) {
//     console.log(i);
//     if (d < 0) {
//       return a;
//     }
//     if (i >= d - 1) {
//       newArr.push(a[i]);
//     } else if (i < d) {
//       console.log("les");
//     }
//     i++;
//   }
//   return newArr;
// }

// let arr = [1, 2, 3, 4, 5];
// let digit = 4;

// let result = rotLeft(arr, digit);

// function countOnline(usersObj) {
//   // Only change code below this line
//   let online = 0;
//   for (let user in usersObj) {
//     if (usersObj[user].online === true) online++;
//   }
//   return online;
// }
// let users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// let result = countOnline(users);
// document.getElementById("countPairsInArray").innerHTML = result;
