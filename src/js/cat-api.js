import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_3lWHdBmCRkORBwwge7C6rKHKeLPtRYmr6vYQG7h17d0IxgNtfn0cXkwUqPQ4eldI';


export async function fetchBreeds() {
  const responce = await axios.get("/breeds");
  return responce.data;
  
}

export async function fetchCatByBreed(breedId) {
  const responce = await axios.get(`/images/search?breed_ids=${breedId}`);
  return responce.data;
  
}

