// Function declaration
function salomBer() {
    console.log("Salom");
}
salomBer();



function kankulator(son1, son2, ){
    return son1 + son2;  
    // agar return ishlatilsa function ichida return dan keyingi kodlar ishlamaydi
}
let natija = kankulator(5, 10); // nima uchun natija o'zgaruvchisini yaratdik chunki return qiymat qaytaradi va biz uni saqlab olamiz.

console.log(natija);  // bu joyda natija 15 chiqadi va bunga return qiymat qaytadiva bunga yana ishlov berish mumkin yani natijani yoniga son qo'shish yoki undan ayirish mumkin

// --------------------------------------------------------------------------------

//Function expression - bu functionni o'zgaruvchiga tenglashtirish
const salomBer2 = function() {
    console.log("Salom 2");
}
salomBer2();

const kankulator2 = function(son1, son2) {
    return son1 + son2;
}
console.log(kankulator2(20, 30));

// --------------------------------------------------------------------------------

// Arrow function - bu functionni qisqa yozish usuli || yozish usule shunday hech qanday function so'zi ishlatilmaydi. 

//1 - usuli
const salomBer3 = () => {
    console.log("Salom 3");
} 
salomBer3();

// 2 - usuli
const kankulator3 = (son1, son2) => { 
    return son1 + son2;
}
console.log(kankulator3(50, 70));

// 3 - usuli
const kankulator4 = (son1, son2) => son1 + son2; // agar function ichida faqat bitta amal bo'lsa return va qavslarni ishlatmaslik mumkin
console.log(kankulator4(100, 200));
