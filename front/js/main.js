import funkoData from '/back/data/funkoData.js';

/**
 * Generates an array of random unique numbers between 0 and numMax.
 * @param {number} numMax - The maximum value for the random numbers.
 * @param {number} cantNumber - The number of random numbers to generate.
 * @returns {Array} - An array of unique random numbers.
 */
function generateRandomNumbers(numMax, cantNumber) {
  let randomNumbers = [];
  while (randomNumbers.length < cantNumber) {
    let number = Math.floor(Math.random() * (numMax + 1));
    if (randomNumbers.indexOf(number) === -1) {
      randomNumbers.push(number);
    }
  }
  return randomNumbers;
}




const collectionsCount = funkoData.getCollectionCount()
const collectionsIndex = generateRandomNumbers(collectionsCount - 1, 3)

console.log(collectionsCount)
console.log(collectionsIndex)