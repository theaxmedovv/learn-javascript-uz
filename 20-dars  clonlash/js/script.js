// Yuzaki clonlash va unga harakat berish
// Primitiv va non-primitiv ma'lumot turlari
//  object va array larni clonlash
// primitiv ma'lumot turlari

let a = 10;
let b = a; // b endi a ning qiymatini oladi
console.log(a, b); // 10 10
a = 20; // a ning qiymatini o'zgartiramiz
console.log(a, b); // 20 10 chunki b endi a ga bog'liq emas u o'zining qiymatini saqlab qoldi

// non-primitiv ma'lumot turlari
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1, arr2); // [1, 2, 3] [1, 2, 3]
arr1.push(4);
console.log(arr1, arr2); // [1, 2, 3, 4] [1, 2, 3, 4] chunki arr2 endi arr1 ga bog'liq va arr1 o'zgarganda arr2 ham o'zgaradi

// object clonlash
let person = {
    name: "John",
    age: 30
};
console.log(person); // {name: 'John', age: 30}

const secontPerson = person; // secontPerson endi person ga bog'liq
secontPerson.name = "Muhammadjon"; // secontPerson ning name ni o'zgartiramiz
secontPerson.age = 25; // secontPerson ning age ni o'zgartiramiz
console.log(secontPerson); // {name: 'Muhammadjon', age: 25}

console.log("--------------------------------");

// Yuzaki clonlash bu object yoki array ni yangi o'zgaruvchiga nusxalashdir lekin bu clonlash chuqur clonlash emas.
// 1 - usuli Object.assign() metodi yordamida clonlash
let person2 = Object.assign({}, person);
person2.name = "Ali"; // person2 ning name ni o'zgartiramiz
person2.age = 40; // person2 ning age ni o'zgartiramiz
console.log(person2); // {name: 'Ali', age: 40}
console.log(person); // {name: 'Muhammadjon', age: 25} person o'zgarmadi chunki person2 endi person ga bog'liq emas.

// 2 - usuli spread operator yordamida clonlash
let person3 = {...person};
person3.name = "Vali"; // person3 ning name ni o'zgartiramiz
person3.age = 35; // person3 ning age ni o'zgartiramiz
console.log(person3); // {name: 'Vali', age: 35}
console.log(person); // {name: 'Muhammadjon', age: 25} person o'zgarmadi chunki person3 endi person ga bog'liq emas.

console.log("--------------------------------");

// Chuqur clonlash bu object yoki array ni yangi o'zgaruvchiga nusxalashdir va bu clonlash chuqur clonlashdir.
// 1 - usuli JSON.parse() va JSON.stringify() metodlari yordamida clonlash
let person4 = JSON.parse(JSON.stringify(person));
person4.name = "Zafar"; // person4 ning name ni o'zgartiramiz
person4.age = 28; // person4 ning age ni o'zgartiramiz
console.log(person4); // {name: 'Zafar', age: 28}
console.log(person); // {name: 'Muhammadjon', age: 25} person o'zgarmadi chunki person4 endi person ga bog'liq emas.

console.log("--------------------------------");

// Array clonlash
let arr3 = [1, 2, 3, 4, 5];

// 1 - usuli slice() metodi yordamida clonlash
let arr4 = arr3.slice();
arr4.push(6); // arr4 ga 6 ni qo'shamiz
console.log(arr4); // [1, 2, 3, 4, 5, 6]
console.log(arr3); // [1, 2, 3, 4, 5] arr3 o'zgarmadi chunki arr4 endi arr3 ga bog'liq emas.

// 2 - usuli spread operator yordamida clonlash
let arr5 = [...arr3];
arr5.push(7); // arr5 ga 7 ni qo'shamiz
console.log(arr5); // [1, 2, 3, 4, 5, 7]
console.log(arr3); // [1, 2, 3, 4, 5] arr3 o'zgarmadi chunki arr5 endi arr3 ga bog'liq emas.

// function - spread operator
function sum(x, y, z) {
    console.log(`first number: ${x}`);
    console.log(`second number: ${y}`);
    console.log(`third number: ${z}`);
    return x + y + z;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6