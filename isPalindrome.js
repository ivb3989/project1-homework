export const isPalindrome = (str) => {
    const modifiedStr = str.toLowerCase().replace(/[\s,.?!]/g, "");
    return modifiedStr === modifiedStr.split("").reverse().join("");
}
