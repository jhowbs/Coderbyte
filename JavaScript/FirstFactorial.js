/*
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/
function FirstFactorialJavaScript(num) {
    // code goes here  
    var j = num;
    var r = 1;
    for (var i = 0; i < j; i++) {
        r = r * num;
        num--;
    }
    return r;
}
// keep this function call here 
// @ts-ignore
console.log(FirstFactorialJavaScript(16));
