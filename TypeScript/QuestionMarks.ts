/*
Questions Marks
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.
For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
*/

function isNumericTypeScript(value : string ) {
    return /^\d+$/.test(value);
}

function QuestionsMarksTypeScript(str : string) { 

    // code goes here  
    let strR : string = str.replace(/[a-zA-Z]/g,"")
    let sum : number = 0;

    for(let i = 0; i < strR.length; i++){

        if (isNumericTypeScript(strR[i])){
            let value :number = Number(strR[i])
            sum = sum + value
            if (sum == 10){
                return true
            }else if (sum > 10){
                sum = 0
            }
        }
    }
    return false; 
}
     
  // keep this function call here 
  // @ts-ignore
  console.log(QuestionsMarksTypeScript("aa6?9"));