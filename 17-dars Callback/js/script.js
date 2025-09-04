// Callback - bu bitta function bajarilgandan kegin ikkinchi functionni chaqirish uchun ishlatiladi.


// bu joyda salomBer function bajariladi va ichidagi console.log ishlaydi keyin callback function chaqiriladi va xayrlash function ishlaydi.
function salomBer(nomi, callback) {
  console.log("Salom, " + nomi);
  callback(); // keyin callback ishlaydi
}

function xayrlash() {
  console.log("Xayr!");
}

salomBer("Ali", xayrlash);
// Salom, Ali
// Xayr!

// Asinxron kod misoli. bu yerda setTimeout function 2 soniyadan keyin ishlaydi va shu vaqt ichida boshqa kodlar bajariladi.
console.log("Boshlanish...");

setTimeout(function() {
  console.log("Bu 2 soniyadan keyin chiqadi");
}, 2000);

console.log("Tugash...");



// hayotiy misoli
function buyurtmaQilish(meal, callback) {
  console.log(meal + " buyurtma qilindi.");
  setTimeout(function() {
    callback(meal + " tayyor bo'ldi.");
  }, 3000);
}


buyurtmaQilish("Pizza", function(message) {
  console.log(message);
});