//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

const arr = [1, 3, 2, "null", 22, 19, 0, 12, 10];
var resultEven = 0;
var resultUneven = 0;

for (let i = 0; i <= arr.length; i++){
  if (arr[i] == 0){
      console.log (`Элемент №${i} равен ${arr[i]}`);
  }
  else if(arr[i] %2 == 0){
    ++resultEven;
  }
  
  else if(arr[i] %2 == 1){
      ++resultUneven
  }
  else if(typeof arr[i] == "string"){
      console.log (`Элемент №${i} не является числом`);
  }
}
console.log(resultEven + ' - Чётных элементов в массиве')
console.log(resultUneven + ' - Нечётных элементов в массиве')
