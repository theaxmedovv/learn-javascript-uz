let numbeOfSeries;

startApp();
function startApp(){
    while(numbeOfSeries == "" || numbeOfSeries == null || isNaN(numbeOfSeries)){
        numbeOfSeries = +prompt("Nechta serial ko'rgansiz?");
    }
}
const seriesDB ={
    count: numbeOfSeries, 
    series: {},
    actors: {},
    genres: [],
    privat: false,
}

setFavoriteSeries();
detectingLevel();
writeYourGenres();
showDB(seriesDB.privat);



function setFavoriteSeries(){

    for(let i = 0; i < numbeOfSeries; i++){
        const a = prompt(`Oxirgi ko'rgan serialingiz ${i + 1}?`);
        const b = prompt(`Nechi baho berasiz ${i + 1}?`);
    
        if(a != null && b != null && a != "" && b != ""){
            seriesDB.series[a]=b
        }else{  
         i-- 
        }
    }
}

function detectingLevel(){

    if (seriesDB.count < 5){
    console.log("Kam serial ko'rgansiz");
    }else if (seriesDB.count >=5 && seriesDB.count < 10){
        console.log("Siz serial ishqibozisiz");
    }else if (seriesDB.count >=10){
        console.log("Siz judayam serial ishqibozisiz");
    }else{
        console.log("Xatolik yuz berdi");
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const genre = prompt(`Sevimli janringiz ${i + 1}?`);
        seriesDB.genres[i] = genre;

    }
}


function showDB(isPrivat){
    if(!isPrivat){
        console.log(seriesDB);
    }else{
        console.log("Ma'lumot maxfiy");
    }
}



