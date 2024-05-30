import axios from 'axios';

//  export function getImages (img) {
//     const BASE_URL = 'https://pixabay.com/api/'

//     const params = new URLSearchParams({
//         key: '44051747-21f0728748ba5e469c568f2fa',
//         q: img,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true
//     })

//     const url = `${BASE_URL}?${params}`;

//     return fetch(url).then(res => res.json());
// }}

// let pageQ = 1;
// console.log(pageQ);
let perPage = 15;

export async function getImages(img, page = 1, perPage = 15) {
  const BASE_URL = 'https://pixabay.com/api/';

  const response = await axios(BASE_URL, {
    params: {
      key: '44051747-21f0728748ba5e469c568f2fa',
      q: img,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });

  return response.data;
}
