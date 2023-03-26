// Cats as a Service
// Implementing a Breed Details Fetcher

const request = require('request'); 

const breedFetcher = function(breed) {
  request('http://api.thecatapi.com/v1/breeds/', (error, response, body) => {
    if (error) {
      return console.log(error);
    }  
    if (!breed) {
      return console.log('enter breed name');
    }

    // convert string version into object using 'JSON.parse()'
    const data = JSON.parse(body);
    // taking only starting 4 chars to search as id value
    breedName = breed.slice(0, 4); 
    //  loop over array of objects
    for (const obj of data) {
      if (obj.id === breedName.toLowerCase()) {
        return console.log(obj.description);
      }
    }
    
    return console.log('Breed not found');
  })
;}

const cmdLineArgbreed = process.argv[2];
breedFetcher(cmdLineArgbreed);