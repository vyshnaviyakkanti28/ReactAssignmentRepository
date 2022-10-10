const express = require('express');
const axios = require('axios');
// import axios from 'axios';
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

let movies = [];
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/movies', (req, res) => {
    const spaceData = axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=10')
                        .then(function (response) {
                            res.json(response.data)
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
})

app.listen(port, () => console.log(`Hello world on ${port}`))