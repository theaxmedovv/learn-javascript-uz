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

console.log(seriesDB);

const a = prompt("Oxirgi ko'rgan serialingiz?", " " );
const b = prompt("Nechi baho berasiz?", " ");

const c = prompt("Oxirgi ko'rgan serialingiz?", " " );
const d = prompt("Nechi baho berasiz?", " ");

seriesDB.series[a] = b;
seriesDB.series[c] = d;
console.log(seriesDB);
