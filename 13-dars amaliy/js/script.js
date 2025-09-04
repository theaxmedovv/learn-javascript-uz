const numbeOfSeries = +prompt("Nechta serial ko'rgansiz?");
console.log(numbeOfSeries);

const seriesDB ={
    count: numbeOfSeries, 
    series: {

    },
    actors: {},
    genres: [],
    privat: false
}

// console.log(seriesDB);


for(let i = 0; i < 2; i++){
    const a = prompt(`Oxirgi ko'rgan serialingiz ${i}?`);
    const b = prompt(`Nechi baho berasiz ${i}?`);

    if(a != null && b != null && a != "" && b != ""){
        seriesDB.series[a]=b
    }else{  
     i-- 
    }
}

if (seriesDB.count < 5){
    console.log("Kam serial ko'rgansiz");
}else if (seriesDB.count >=5 && seriesDB.count < 10){
    console.log("Siz serial ishqibozisiz");
}else if (seriesDB.count >=10){
    console.log("Siz judayam serial ishqibozisiz");
}else{
    console.log("Xatolik yuz berdi");
}


console.log(seriesDB);
