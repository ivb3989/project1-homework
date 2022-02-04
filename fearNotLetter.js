export const fearNotLetter = (letters) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (alphabet.includes(letters)) {
    return undefined;
  }

  const firstAppearance = alphabet.indexOf(letters[0]);
  const lastAppearance = alphabet.indexOf(letters[letters.length - 1]);
  const fragment = alphabet.slice(firstAppearance, lastAppearance);

  for (let index = 0; index < letters.length; index++) {
    if (letters[index] !== fragment[index]) {
      return fragment[index];
    }
  }
};
