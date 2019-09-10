const request = require('request');

const WEATHER_API = 'https://api.darksky.net/forecast/cf636706e5ce98854aa819eeaa4d8e60/37.8267,-122.4233?units=si&lang=pt';

request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log('Serviço de previsão do tempo temporariamente indisponível.');
    } else if (response.body.error) {
        console.log('Não foi possível encontrar a localização.')
    } else {
        const temperature = response.body.currently.temperature;
        const precipitation = response.body.currently.precipProbability;
        console.log(response.body.daily.data[0].summary + ' A temperatura atual é ' + temperature + 'ºC. Existe ' + precipitation + '% de chance de chuva.');
    };
});

const COORD_API = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGlsbGFyeWR1bW15IiwiYSI6ImNrMGN6aTF5aTAycm8zbnJuZnRod29rcmwifQ.mn5hVFtVQal6dQcglXm2dw&limit=1';

request({url: COORD_API, json: true}, (error, response) => {
    if (error) {
        console.log('Serviço de localização temporariamente disponível.');
    } else if (response.body.features.length === 0) {
        console.log('Não foi possível encontrar a localização. Verifique os termos pesquisados e tente novamente.');
    } else {
        const long = response.body.features[0].center[0];
        const lat = response.body.features[0].center[1];
        console.log('Latitude: ' + lat);
        console.log('Longitude: ' + long);
    };
});