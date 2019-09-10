const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/cf636706e5ce98854aa819eeaa4d8e60/' + lat + ',' + long + '?units=si&lang=pt';

    request({url: url, json: true}, (error, response) => {
        if (error) {
            const errorMsg = 'Serviço de previsão do tempo temporariamente indisponível.';
            callback(errorMsg, undefined);
        } else if (response.body.error) {
            const errorMsg = 'Não foi possível encontrar a localização.';
            callback(errorMsg, undefined);
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' A temperatura atual é ' + response.body.currently.temperature + 'ºC. Existe ' + response.body.currently.precipProbability + '% de chance de chuva.');
        };
    });
};

module.exports = forecast;