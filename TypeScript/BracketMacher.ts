/*
Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly 
matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", 
then the output should be 1, but if str is "((hello (world))" 
the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. 
If str contains no brackets return 1.
*/ 


function BracketMatcherTypeScript(str : string): number { 

    // code goes here  
    let strBracket : string = str.replace(/[a-zA-Z]/g,"")
    let strLeft : number = 0
    let strRight : number = 0;

    for(let i = 0; i < strBracket.length; i++){
        if (strBracket[i] == "("){
            strLeft++
        }
        else if (strBracket[i] == ")"){
            strRight++
        }
    }

    if (strLeft == strRight) return 1
    return 0; 
  
  }
     
  // keep this function call here 
  // @ts-ignore
  console.log(BracketMatcherTypeScript("(c(oder)) b(yte)"));