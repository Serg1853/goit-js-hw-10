import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selector, loader } from './refs';

export default function onFetchError() {
  selector.classList.remove('is-hidden');
  loader.classList.replace('loader', 'is-hidden');

  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or select another cat breed!',
    {
      position: 'center-center',
      width: '400px',
      fontSize: '16px',
    }
  );
}