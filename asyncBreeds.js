const fs = require('fs');

const breedDetailsFromFile = function (breed, result) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) result(data);
  });
};
const CatBreed = breed => {
  console.log('Return Value: ', breed)
};
breedDetailsFromFile('Bombay', CatBreed);
