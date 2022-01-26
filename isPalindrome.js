export const isPalindrome = (str) => {
    let modifiedStr = str.toLowerCase().replace(/[ ,.?!]/g, "");
    return modifiedStr == modifiedStr.split("").reverse().join("");
}