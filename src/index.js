import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { debounce } from 'lodash';
import { fetchCountries } from './fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const ref = {
  inputRef: document.querySelector('#search-box'),
  listRef: document.querySelector('.country-list'),
  countryInfoRef: document.querySelector('.country-info'),
};
refs.inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const inputValue = e.target.value.trim();
  clearInput;
}
