const request = require('request');

const url = 'https://api.darksky.net/forecast/cf636706e5ce98854aa819eeaa4d8e60/37.8267,-122.4233?units=si&lang=pt';

request({url: url, json: true}, (error, response) => {
    const temperature = response.body.currently.temperature;
    const precipitation = response.body.currently.precipProbability;
    console.log(response.body.daily.data[0].summary + ' A temperatura atual é ' + temperature + 'ºC. Existe ' + precipitation + '% de chance de chuva.');
});
