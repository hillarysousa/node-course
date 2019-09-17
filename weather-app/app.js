const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (!location) {
  return console.log('Por favor, insira uma localização.');
}

geocode(location, (error, {lat, long, location}) => {
  if (error) {
    return console.log(error);
  };

  forecast(lat, long, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }; 

    console.log(location);
    console.log(forecastData);
  });
});

