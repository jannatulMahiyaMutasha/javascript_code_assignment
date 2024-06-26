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


// 3 number question
function findMax(numbers){
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max
}
var numbers =[20,43,55,70,60];
console.log(findMax(numbers));


// 4 number question
function reverseString(str){
    return str.split("").reverse().join("")
}
var array = "ahsatum";
console.log(reverseString(array));


// 5 number question
function filterOddNumbers(array){
    return array.filter(function(item){
        return item % 2 !==0
    });
}
var arrayValue=[10,20,15,24,29,31,28,50,99,100];
console.log(filterOddNumbers(arrayValue));



// 6 number question
function sumArray(num){
    var sum=0;
    for(var i=0; i< num.length;i++){
        sum += num[i];
        
    }
    return sum
}
var array =[10,30,20,40,80];
console.log(sumArray(array));



// 7 number question
function sortArray(arr){
    return arr.slice().sort(((a, b) => a - b));

}
var num = [10,9,30,20,150,60];
console.log(sortArray(num));




// 8 number question
function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var strValue = "hello";
console.log(capitalizeFirstLetter(strValue));