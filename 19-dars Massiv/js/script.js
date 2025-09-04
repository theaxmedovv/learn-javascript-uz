// Massivlar bilan ishlash

const colors = ['red', 'green', 'blue'];

console.log(colors.length)
console.log(colors)
console.log(colors[0]); // red



console.log(colors.pop()); // blue - oxirgi elementni o'chiradi va o'chirilgan elementni qaytaradi
console.log(colors); // ['red', 'green']

colors.push('yellow'); // massiv oxiriga element qo'shadi
console.log(colors); // ['red', 'green', 'yellow']

colors.shift(); // massiv boshidan element o'chiradi
console.log(colors); // ['green', 'yellow']

colors.unshift('purple'); // massiv boshiga element qo'shadi
console.log(colors); // ['purple', 'green', 'yellow']

console.log('-------------------');
const cars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'];


// Itteration - takrorlash 
// for in loop
for(let i=0; i < cars.length; i++){
    console.log(cars[i]);
}
console.log('-------------------');
// for...of loop
for(let car of cars){
    console.log(car);
}

console.log('-------------------');
// forEach method
cars.forEach(function(car, index, array){
    console.log(car, index, array);
});

console.log('-------------------');
// splint method - stringni massivga aylantiradi
const socialMedia = 'Facebook, Twitter, Instagram, LinkedIn';
const socialMediaArray = socialMedia.split(', '); // vergul va bo'sh joy bo'yicha ajratib massivga aylantiradi
console.log(socialMediaArray);

// join method - massivni stringga aylantiradi
const socialMediaString = socialMediaArray.join(' - '); // massiv elementlarini ' - ' bilan ajratib stringga aylantiradi
console.log(socialMediaString);

console.log('-------------------');
// sort method - massiv elementlarini alifbo tartibida yoki sonlar bo'yicha tartiblaydi
const fruits = ['Banana', 'Apple', 'Orange', 'Mango'];
fruits.sort();
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange']