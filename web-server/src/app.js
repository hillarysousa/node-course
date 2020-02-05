const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static files
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Hillary Sousa'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Hillary Sousa'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Get help',
        name: 'Hillary Sousa',
        message: 'This is my help message'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Page not found',
        message: 'Help article not found',
        name: 'Hillary Sousa'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Article not found',
        name: 'Hillary Sousa',
        message: 'My 404 page',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});