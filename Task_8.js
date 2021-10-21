//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.


let myFirstMap = new Map();
myFirstMap.set("China capital", "Beijing");
myFirstMap.set("Malasia capital", "Kuala Lumpur");
myFirstMap.set("Nepal capital", "Katmandu");

//console.log(myFirstMap.get("China capital"));
//console.log(myFirstMap.size);

for (let country of myFirstMap.keys()){
  console.log("Key - " + country);
}
for(let capital of myFirstMap.values()){
  console.log("Prop - " + capital);
}
//for (let elem of myFirstMap){
//  console.log(elem);
//}
