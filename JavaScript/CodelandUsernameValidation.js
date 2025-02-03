function CodelandUsernameValidationJavaScript(str) {
    // code goes here 
    if (!(str.length > 3 && str.length < 26)) {
        console.log(str.length);
        return false;
    }
    var r = new RegExp("[a-zA-Z]");
    if (!r.exec(str[0])) {
        console.log("[a-zA-Z] :" + str[0]);
        return false;
    }
    if (str[str.length] === '_') {
        console.log("_ " + str);
        return false;
    }
    r = new RegExp("[a-zA-Z|_]");
    if (!r.exec(str)) {
        console.log("[a-zA-Z|_]:" + str);
        return false;
    }
    return true;
}
// keep this function call here 
// @ts-ignore
console.log(CodelandUsernameValidationJavaScript("aa_"));
