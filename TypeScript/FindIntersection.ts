/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.
*/

function FindIntersectionTypeScript(strArr : string[]) : string | boolean { 
 
    let elementOne : string[] = strArr[0].replace(/\s/g, '').split(",")
    let elementTwo : string[] = strArr[1].replace(/\s/g, '').split(",")
    let size : number = 0
    let str : string = "";

    if (elementOne.length >= elementTwo.length){
        size = elementOne.length
    }else{
        size = elementTwo.length
    }

    for (let i = 0; i < size ; i++){
        for (let j = 0; j < size; j++){
            if (elementOne[i] == elementTwo[j]){
                str += elementOne[i] + ","
            }
        }
    }

    if (str != ""){
        return str.slice(0,-1)
    }
    return false; 
  }
     
  // keep this function call here 
  // @ts-ignore
  console.log(FindIntersectionTypeScript(new Array("1, 3, 4, 7, 13", "1, 2, 4, 13, 15")));