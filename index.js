// 1 number question
function calculateSum(x,y){
    var sum = x+y;
    return sum
}
var result = calculateSum(20,20);
console.log(result);

// 2 number question
function isEven(num){
    if(num % 2 === 0){
        console.log(true);
        return true;
    }
   else{
    console.log(false);
    return false;
   }
}
isEven(98);
isEven(55);
