/**
 * Write a JavaScript program to replace every character in a given
 * string with the character following it in the alphabet.
 * Note: 'a' will be replace with 'b' or 'z' would be replaced with 'a'.
 * Sample Data and output:
 * abcxyz -> bcdyza
 * python -> qzuipo
 *
 */
const replace = str => {
  const arr = str.split('');
  const result = arr.map(elem => {
    if (elem === 'z') return 'a';
    if (elem === 'Z') return 'A';
    return String.fromCharCode(elem.charCodeAt(0) + 1);
  });
  return result.join('');
};

console.log('abcxyz ->', replace('abcXyZ'));
console.log('pyThon ->', replace('python'));
