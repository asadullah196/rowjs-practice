function oilPrice(number1, number2, number3){

    let dijel =number1;
    let petrol = number2;
   let octen = number3;

   result = dijel*114 + petrol*130 + octen*135;
   document.getElementById("price").innerHTML = result;

   return result;

}

console.log(oilPrice(1,0,2));