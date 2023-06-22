/**
 * Generates an array of random unique numbers between 0 and numMax.
 * @param {number} numMax - The maximum value for the random numbers.
 * @param {number} cantNumber - The number of random numbers to generate.
 * @returns {Array} - An array of unique random numbers.
 */
function generateArrayRandomNumbers(numMax, cantNumber) {
  let randomNumbers = [];
  while (randomNumbers.length < cantNumber) {
    let number = Math.floor(Math.random() * (numMax + 1));
    if (randomNumbers.indexOf(number) === -1) {
      randomNumbers.push(number);
    }
  }
  return randomNumbers;
}

/**
 * Generates an array of random numbers within a given range without repetition.
 * @param {number} numMin - The minimum value for the random numbers (inclusive).
 * @param {number} numMax - The maximum value for the random numbers (inclusive).
 * @param {number} cantNumber - The desired number of random numbers to generate.
 * @returns {number[]} An array of unique random numbers.
 */
function generateRandomNumbers(numMin, numMax, cantNumber) {
  // Validate input parameters
  if (numMin > numMax || cantNumber > (numMax - numMin + 1)) {
    throw new Error('Invalid input parameters');
  }

  // Generate random numbers
  const result = [];
  while (result.length < cantNumber) {
    const randomNum = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    if (!result.includes(randomNum)) {
      result.push(randomNum);
    }
  }

  return result;
}


/**
 * Generate a random number between minNum and maxNum (inclusive).
 *
 * @param {number} minNum - The minimum value for the random number.
 * @param {number} maxNum - The maximum value for the random number.
 * @returns {number} A random number between minNum and maxNum.
 */
function generateRandomNumber(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

/**
 * Capitalizes the first letter of each word in a given text.
 * @param {string} text - The input text to capitalize.
 * @returns {string} The input text with the first letter of each word capitalized.
 */
function capitalizeFirstLetters(text) {
  const words = text.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(" ");
}

/**
 * Load a CSS file dynamically by adding a <link> element to the <head>.
 * @param {string} cssUrl - The URL of the CSS file to load.
 */
function loadCSS(cssUrl) {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssUrl;

  document.head.appendChild(linkElement);
}



export default {
  generateRandomNumber,
  generateArrayRandomNumbers,
  generateRandomNumbers,
  capitalizeFirstLetters,
  loadCSS
}