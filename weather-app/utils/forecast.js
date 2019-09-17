const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/cf636706e5ce98854aa819eeaa4d8e60/' + lat + ',' + long + '?units=si&lang=pt';

    request({url, json: true}, (error, {body}) => {
        if (error) {
            const errorMsg = 'Serviço de previsão do tempo temporariamente indisponível.';
            callback(errorMsg, undefined);
        } else if (body.error) {
            const errorMsg = 'Não foi possível encontrar a localização.';
            callback(errorMsg, undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' A temperatura atual é ' + body.currently.temperature + 'ºC. Existe ' + body.currently.precipProbability + '% de chance de chuva.');
        };
    });
};

module.exports = forecast;