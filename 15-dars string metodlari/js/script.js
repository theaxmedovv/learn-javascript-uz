// string metodlari

console.log("------------------");
console.log("String metodlari");
console.log("------------------");

const str = "Hello World";

// Method  - bu obyekt ichidagi funksiyalarga aytiladi
// Property - bu obyekt ichidagi qiymatlarga aytiladi


// length - string uzunligini qaytaradi bu Property
console.log(str.length); // 11 

// toUpperCase() - stringni katta harflarga o'zgartiradi bu Method yani oxiriga qavs qo'yiladi.
console.log(str.toUpperCase()); // HELLO WORLD

// toLowerCase() - stringni kichik harflarga o'zgartiradi
console.log(str.toLowerCase()); // hello world

// slice() - bu method stringni kesib oladi va yangi string qaytaradi yani boshi va oxirgi index raqamini ko'rsatish kerak
console.log(str.slice(0, 4)); // Hell - bu yerda 0 dan 4 gacha kesib oladi 4 ni o'zini olmaydi

// Method charAt() - bu method string ichidagi belgini index raqami orqali qaytaradi
console.log( `Bu 1 - usuli ${str.charAt(0)}`); // H
console.log(`Bu 2 - usuli ${str[8]}`); // r 

console.log(str[1] = "A") // bu joyda xatolik bo'ladi chunki string o'zgarmas qiymatga ega yani uni o'zgartirish mumkin emas
console.log(str); // Hello World

// terimStart() - bu boshidan speceni olib tashlaydi
const str2 = "     Hello World     ";
console.log(str2.trimStart()); // "Hello World     "  ustiga 2 marta bosib ko'ring

// trimEnd() - bu oxiridan speceni olib tashlaydi
console.log(str2.trimEnd()); // "     Hello World"  ustiga 2 marta bosib ko'ring

// trim() - bu method stringning boshidan va oxiridan speceni olib tashlaydi
console.log(str2.trim()); // "Hello World"  ustiga 2 marta bosib ko'ring


console.log("------------------");
console.log("Number metodlari");
console.log("------------------");

// number metodlari
const num = 12.5;

// round() - bu method sonni yaxlitlaydi
console.log(Math.round(num)); // 13

//floor() - bu method sonni pastga qarab yaxlitlaydi
console.log(Math.floor(num)); // 12

// ceil() - bu method sonni yuqoriga qarab yaxlitlaydi
console.log( "bu method sonni yuqoriga qarab yaxlitlaydi: " ,Math.ceil(num)); // 13


const num1 = "12.4px"; // bu yerda son string ichida berilgan

// parseInt() - bu method string ichidan butun sonni ajratib oladi
console.log( "bu method string ichidan butun sonni ajratib oladi: ",parseInt(num1)); // 12





