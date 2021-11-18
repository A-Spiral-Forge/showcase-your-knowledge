const express = require('express');
const path = require('path');
const pug = require('pug');
const request = require('request');
const fs = require('fs');

const app = express();
const port = 80;

// Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Pug specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// End points
app.get('/', function (req, res) {
    res.status(200).render('home');
});

app.get('/game', function (req, res) {
    res.status(200).render('queTemplate');
});

let queNumber = 0;
let questions ;

app.post('/game', function (req, res) {
    const topic = req.body.selecttopic;
    // console.log(topic);
    // reading API
    let topicLink = 'https://api.trivia.willfry.co.uk/questions?limit=15';
    if(topic != 'all'){
        topicLink = `https://api.trivia.willfry.co.uk/questions?categories=${topic}&limit=15`
    }
    request(topicLink, { json: true }, (err, res, body) => {

        // console.log(body);
        // Writing is to JSON file
        // fs.writeFileSync('./views/ques.json', JSON.stringify(body));
        questions = body;
    });
    res.render('game.pug');
});

// Server starting
app.listen(port);
console.log(`Server started at http://localhost:${port}`);