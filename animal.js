function animalCalculator(depth){
   let animal = 0;
   if (depth <= 10){
      animal = depth * 50;
   }
   else if (depth <= 20){
      let firstPart = 10 * 50;
      let remaining = depth - 10;
      let secondPart = remaining * 100;
      animal = firstPart + secodPart;
   }
   else{
      let firstPart = 10 * 50;
      let secondPart = 10 * 100;
      let remaining = depth - 20;
      let thirdPart = remaining * 300;
      animal = firstPart + secondPart + thirdPart;
   }
   return animal;
}

let calculate = animalCalculator(5);
console.log(calculate);