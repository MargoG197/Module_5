//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let a = [1, 5, 19, 19, 7, 8, 1, 4];
let equals = false;
for (let i = 0; i < a.length; i++) {
  for (let k = i + 1; k < a.length; k++) {
    if (a[i] === a[k]) {
      equals = true;
      console.log(`element[${i}] === element[${k}] (${a[i]})`);
    }
  }
}
console.log(equals);
