// shartli operatorlar switch

// switch va case bu lar if else ga o'xshaydi faqat bitta qiymatni tekshiradi va shu qiymatga mos keladigan case ni bajaradi
// agar hech qaysi case ga mos kelmasa default case ni bajaradi

const trafficLight = prompt("hozir qaysi rang yonmoqda?");
switch (trafficLight) {
    case "red":
        console.log("peshexod yuradi");
        break;
    case "yellow":
        console.log("peshexod tayyorlanadi");
        break;
    case "green":
        console.log("peshexod toxtaydi");
        break;
    default:
        console.log("bunaqa rang yo'q");
        break;
}

// == bu vaqat qiymatni solishtiradi
// === bu esa qiymat va turini solishtiradi

