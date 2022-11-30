function getArraySum(numbers){
   let sum = 0;
   for (let i = 0; i < numbers.length; i++){
      let element = numbers[i];
      sum = sum + element;
   }
   return sum;
}
let numbers = [12,23,2312,43,123,23,34];
let result = getArraySum(numbers);
console.log(result);