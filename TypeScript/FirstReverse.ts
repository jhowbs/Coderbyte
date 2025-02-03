/*
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" 
then your program should return the string sredoC dna dlroW olleH.
*/

function FirstReverseTypeScript(str: string) { 

    // code goes here
    var r : string = ""
    for (let i = 0; i < str.length ; ){
        i++
        r += str[str.length  - i]
    }
    return r; 
  }
     
  // keep this function call here 
  // @ts-ignore
  console.log(FirstReverseTypeScript("coderbyte"));