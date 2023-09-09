import ref from './js/refs';
import { onFetchError } from './js/showError';
import './styles.css';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const { selector, divCatInfo, loader, error } = ref;


loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');

let arrBreedsId = [];
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      arrBreedsId.push({ text: element.name, value: element.id });
    });
    new SlimSelect({
      select: selector,
      data: arrBreedsId,
    });
  })
  .catch(onFetchError);

selector.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
  loader.classList.replace('is-hidden', 'loader');
  selector.classList.add('is-hidden');
  divCatInfo.classList.add('is-hidden');

  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds } = data[0];

      divCatInfo.innerHTML = `<div class="box-img">
      <img src="${url}" alt="${breeds[0].name}" width="600"/></div>
      <div class="box">
      <h1>${breeds[0].name}</h1>
      <p>${breeds[0].description}</p>
      <p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`;
      divCatInfo.classList.remove('is-hidden');

      loader.classList.replace('loader', 'is-hidden');
      selector.classList.remove('is-hidden');
    })
    .catch(onFetchError);
}
