// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    return str.split('')
              .reverse()
              .filter(val => /[a-zA-Z]/.test(val))
              .join('');  
  }