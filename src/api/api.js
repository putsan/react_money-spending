const ACCESS_KEY = '27847c22e9847b586451d4c459464bf6';
const API_BASE_URL = 'http://data.fixer.io/api';

export function getExchangeRate() {
  return fetch(`${API_BASE_URL}/latest?access_key=${ACCESS_KEY}`)
    .then(prepareResponse)
    .then(getData);
}

const prepareResponse = response => response.json();
const getData = result => result.rates;
