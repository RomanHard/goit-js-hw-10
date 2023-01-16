import { Notify } from 'notiflix/build/notiflix-notify-aio';
import  debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;


const refs = {
  inputRef: document.querySelector('#search-box'),
  listRef: document.querySelector('.country-list'),
  countryInfoRef: document.querySelector('.country-info'),
};

refs.inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const inputValue = e.target.value.trim();
  clearInput();
  if (!inputValue) {
    return;
  }
  fetchCountries(inputValue)
  .then(res => {
    console.log(res);
    const resLength = res.length;
    if (resLength === 1) {
        const murkup = createOneMarup(res);
        refs.countryInfoRef.insertAdjacentHTML('beforeend', markup);
    }
  })

  function createOneMarup(countries =[]) {
    return countries
    .map()
  }