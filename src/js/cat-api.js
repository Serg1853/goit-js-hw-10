import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_3lWHdBmCRkORBwwge7C6rKHKeLPtRYmr6vYQG7h17d0IxgNtfn0cXkwUqPQ4eldI';

// const API_KEY =
//   'live_3lWHdBmCRkORBwwge7C6rKHKeLPtRYmr6vYQG7h17d0IxgNtfn0cXkwUqPQ4eldI';

export async function fetchBreeds() {
  const responce = await axios.get('/breeds');
  return responce.data;
  // return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // });
}

export async function fetchCatByBreed(breedId) {
  const responce = await axios.get(`/images/search?breed_ids=${breedId}`);
  return responce.data;
  // return fetch(
  //   `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  // ).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // });
}

