// Object va destruktizatsiya bular qanday ishlaydi
// Object - bu kalit va qiymat juftliklaridan tashkil topgan ma'lumotlar to'plami
// Destruktizatsiya - bu object yoki array ichidagi qiymatlarni o'zgaruvchilarga ajratib olish usuli


const person = {
    name: "Muhammajon",
    age: 20,
    job: "Web developer",
    address: {
        city: "Toshkent",
        country: "Uzbekistan"
    },
    hobbies: ["coding", "reading", "gaming"],
    sayHello: function() {
        console.log("Hello");
    }
}
console.log(person); // bu yerda objectni to'liq chiqarish usuli
person.sayHello(); // bu yerda object ichidagi methodni chaqirish usuli

const {name, age, job, address, hobbies, sayHello} = person; // bu yerda destruktizatsiya usuli orqali object ichidagi qiymatlarni o'zgaruvchilarga ajratib olish usuli}
sayHello(); // bu yerda destruktizatsiya usuli orqali olingan methodni chaqirish usuli
console.log(name); // bu yerda destruktizatsiya usuli orqali olingan qiymatni chiqarish usuli



// 1 - usuli for in faqat object uchun ishlatiladi
// 2 - usulifor of massivlar uchun ishlatiladi

// // bu narsa object ichidagi ma'lumotlarni olish usuli yani iteratsiya qilish usuli
// for (let key in person) {
//     if (typeof person[key] === "object"){
//         for (let i in person[key]){
//             console.log("Property " + key + " " + "Value: " + person[key][i] );
//         }
//     }else{
//         console.log("Property " + key + " " + "Value: " + person[key]);
//     }
// }


// // bu narsa orqali qilgandan object.keys orqali olish ossonroq
// const keys = Object.keys(person);
// console.log(keys); // bu yerda object ichidagi kalitlarni massiv ko'rinishida olish mumkin

// // agar bizga uzunligi kerak bo'lsa
// console.log(keys.length); // bu yerda object ichidagi kalitlar sonini olish mumkin
