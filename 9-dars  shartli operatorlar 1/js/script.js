// shartli operatorlar

//agar qizil rang yonsa peshexod yuradi
// agar sariq rang yonsa peshexod tayyorlanadi
// agar yashil rang yonsa peshexod toxtaydi

const trafficLight = prompt("hozir qaysi rang yonmoqda?");
if (trafficLight === "red") {
    console.log("peshexod yuradi");
}else if (trafficLight === "yellow"){
    console.log("peshexod tayyorlanadi");
}else if (trafficLight === "green"){
    console.log("peshexod toxtaydi");
}


//agar 18dan katta  yoki teng bo'lsa saytga kiradi aks holda kirilmaydi
const age = prompt("Saytga kirish uchun yoshingizni kiriting?");
if (age >= 18) {
    console.log("saytga kirish mumkin");
} else {
    console.log("saytga kirish mumkin emas");
}

// == bu vaqat qiymatni solishtiradi
// === bu esa qiymat va turini solishtiradi

