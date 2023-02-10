const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
  params: {format: 'json', from: 'AUD', to: 'CAD', amount: '1'},
  headers: {
    'X-RapidAPI-Key': 'd9838b4b4bmsh6c85d2bd9e7a8ecp1e50adjsnef1e7e516031',
    'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});