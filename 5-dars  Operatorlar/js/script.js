// Operatorlar bu ma'lumotlarni o'zgartirish yoki ularga arifmetik amallarni bajarish uchun ishlatiladi.

const a = 10;
const b = 5;

// Qo'shish operatori
const sum = a + b; // 15

// Ayirish operatori
const difference = a - b; // 5

// Ko'paytirish operatori
const product = a * b; // 50

// Bo'lish operatori
const quotient = a / b; // 2

// Qoldiqni topish operatori
const remainder = a % b; // 0

const birthYear = "2005";

console.log("Qo'shish:", sum);
console.log("Ayirish:", difference);
console.log("Ko'paytirish:", product);
console.log("Bo'lish:", quotient);
console.log("Qoldiq:", remainder); 
console.log(birthYear + 5); // "20055" (string concatenation) har qanday string ga boshqa qiymat qo'shilsa stringga aylanadi