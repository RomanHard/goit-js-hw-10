const COUNTRY_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  return fetch(`${COUNTRY_URL}${name}?fields=name,capital,popular,flags,languages`).then(response => {
    console.log(response);
    if (response.ok) {
        return response.json();
    }
    throw new Error(respone.statusText);
};