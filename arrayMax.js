let marks = [32,53,65,23,67,76,94,34,43];
let max = [0];
for (i = 0; i < marks.length; i++){
   let element = marks[i];
   if (element > max){
      max = element;
   }
}
console.log('Max Value is: ', max);