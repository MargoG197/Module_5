//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.


function getRandomInt (min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) +min;
}
console.log(getRandomInt(1,100))
