const axios = require("axios");
const Request = require("./request");
const ligue1Id = 61;

const request = new Request();

const allMatchs = request.getresults();