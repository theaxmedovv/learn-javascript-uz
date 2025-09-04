// alert buyrug'i bilan xabar oynasini chiqarish mumkin
alert("Salom Dunyo!");

let work = confirm("Siz ishlashni hohlaysizmi?"); // Ok va Bekor qilish tugmalari bor oynani chiqaradi
console.log(work); // Ok tugmasi bosilsa true, Bekor qilish tugmasi bosilsa false qiymat qaytaradi

let age = +prompt("Yoshingiz nechida?"); // Foydalanuvchidan ma'lumot kiritishni so'raydi
console.log(age); // Foydalanuvchi kiritgan ma'lumotni konsolga chiqaradi

// Nan bu qiymat son emasligini bildiradi
// agar mani promptdan oldin + belgisini qo'ysam, kiritilgan ma'lumotni son turiga o'tkazadi


// Interpolation - bu o'zgaruvchilarni matn ichida ishlatish usuli
//CamelCase - o'zgaruvchi nomlarini yozishda so'zlarni birlashtirish usuli bo'shi kichik harf bilan boshlanadi, keyingi so'zlar esa katta harf bilan boshlanadi
let firstName = "John";
let surName = "Doe";
let age2 = 20;


// My full name is firstName surName, and I am age2 years old.
console.log("My full name is " + firstName + " " +surName, + " I am " + age2 + "years old."); // Eski usul
console.log(`My full name is ${firstName} ${surName}, and I am ${age2} years old.`); // Yangi usul (template literals)