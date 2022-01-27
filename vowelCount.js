export const vowelCount = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches === null ? 0 : matches.length;
}
