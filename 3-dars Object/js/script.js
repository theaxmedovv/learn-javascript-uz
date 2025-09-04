// Object - kompleks ma'lumot turi
    // Array - massiv
    // Function - funksiya
    // Muntazam iboralar (Regular Expressions)
    // Errorlar (Errors)
    // Primitive data types - oddiy ma'lumot turlari
    // Complex data types - kompleks ma'lumot turlari


// 1. Object bu kalit va qiymat juftliklaridan tashkil topgan ma'lumot turidir. Object - bu o'zgaruvchiga o'xshaydi, lekin u ko'proq ma'lumot saqlashi mumkin. Object ichida boshqa object yoki array ham bo'lishi mumkin.
   
const person = {
        // xususiyatlar - properties , qiymatlar - values | key va value   //qiymatga hohlagan ma'lumot turi berish mumkin String, Number, Boolean, Array, Object, Function
        
        name: "Muhammadjon",
        age: 20,
        hobbies: {
            first: "Dasturlash",
            second: "Futbol",
            third: "Kitob o'qish"
        },
    }

// Array - bu ma'lumotlar to'plami bo'lib, u tartiblangan ro'yxat shaklida saqlanadi. Array ichida har xil ma'lumot turlari bo'lishi mumkin va ular indekslar orqali tartiblanadi.

const colors = ["Qizil", "Yashil", "Moviy", 56, true, null, undefined, {name: "Axmedov"}, [1, 2, 3]];
console.log(colors[1]);  
