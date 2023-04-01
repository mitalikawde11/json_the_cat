// Cats as a Service
// Implementing a Breed Details Fetcher

const request = require('request'); 

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }  
    if (!breedName) {
      return callback('enter breed name', null)
    }
    // convert string version into object using 'JSON.parse()'
    const data = JSON.parse(body);
    
    if(data.length === 0) {
      return callback('invalid breed name', null)
    }
    // if data then return description of data. There is only one data as response for that breed that's why- data[0]
    if(data) {
      return callback(null, data[0].description);
    }
    
  })
};


module.exports = { fetchBreedDescription };