// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
     return numbersArray.filter(function(number) {
      return number % 2 === 0;
    });
    
  }