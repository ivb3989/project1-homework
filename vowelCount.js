export const vowelCount = (str) => {
    let matches = str.match(/[aeiou]/gi);
    return matches === null ? 0 : matches.length;
}
