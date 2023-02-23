const axios = require("axios");

class Request {
    constructor() {
        this.options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };
    }
    getresults() {
        this.options.url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&season=2022';
        axios.request(this.options).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
}
module.exports = Request;