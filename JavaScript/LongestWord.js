/*
Have the function LongestWord(sen) take the sen parameter
being passed and return the longest word in the string.
If there are two or more words that are the same length,
return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.
Words may also contain numbers, for example "Hello world123 567"
*/
function LongestWordJavascript(sen) {
    // code goes here  
    var strWithoutSpecialChar = sen.replace(/[^a-zA-Z ]/g, "");
    var txt = strWithoutSpecialChar.split(" ");
    var t = "";
    txt.forEach(function (word) {
        if (word.trim().length > t.trim().length) {
            t = word.trim();
        }
    });
    return t;
}
// keep this function call here 
// @ts-ignore
console.log(LongestWordJavascript("I love dogs"));
