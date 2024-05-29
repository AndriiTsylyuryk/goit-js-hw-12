import './js/pixabay-api';
import { getImages } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search');
const container = document.querySelector('.pictures');
const loader = document.querySelector('.loader');
console.log(loader)

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  container.innerHTML = '';

  const query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message:
        '"Sorry, there are no images matching your search query. Please try again!"',
      position: 'topRight',
    });
    return;
  }

showLoader();

  getImages(query)
    .then(data => {
      if (data) {
        if (data.hits.length === 0) {
          throw Error(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        }
        imagesRender(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}


function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
