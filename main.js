// let money = 500;
// let price = 200;
// let quantity = 3;

// let total = price * quantity;

// console.log("total cost : $ " + total);

// if (total > money) {
//   console.log("Not enough money");
// } else {
//   console.log("enough money");
// }

// let money = 1000;
// let price = 250;
// let quantity = 3;

// let total = price * quantity;

// let remaining = money - total;

// console.log("Total cost : $" + total + " Remaining : $" + remaining);

// let score = 75;

// if (score >= 90) {
//   console.log("Excellent");
// } else if (score >= 70) {
//   console.log("Good");
// } else {
//   console.log("Need improvement");
// }

// let age = 27;
// let hasTicket = true;

// if (age >= 18 && hasTicket) {
//   console.log("Welcome");
// } else {
//   console.log("Access denied");
// }

// let isAdmin = false;
// let isModerator = true;

// if (isAdmin || isModerator) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }
// let isBanned = false;
// if (!isBanned) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }

// for (let i = 1; i <= 8; i++) {
//   console.log(i);
// }

let user = {
  name: "",
  city: "Odessa",
  age: 0,
  isAdmin: false,
};

user.name ||= "guest";
user.city ||= "not specified";
user.age ||= 18;
user.isAdmin ||= true;

console.log(user);

let settings = {
  username: "",
  theme: "dark",
  notifications: false,
  language: "",
};

settings.username ||= "Guest";
settings.theme = "light";
settings.notifications ||= true;
settings.language ||= "ru";

console.log(settings);

let date = new Date();
console.log(date.getHours() + ":" + date.getMinutes());
