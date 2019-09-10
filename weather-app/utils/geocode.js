const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGlsbGFyeWR1bW15IiwiYSI6ImNrMGN6aTF5aTAycm8zbnJuZnRod29rcmwifQ.mn5hVFtVQal6dQcglXm2dw&limit=1';

    request({url: url, json: true}, (error, response) => {
        if (error) {
            const errorMsg = 'Serviço de localização temporariamente disponível.';
            callback(errorMsg, undefined);
        } else if (response.body.features.length === 0) {
            const errorMsg = 'Não foi possível encontrar a localização. Verifique os termos pesquisados e tente novamente.';
            callback(errorMsg, undefined);
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[1],
                long: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;