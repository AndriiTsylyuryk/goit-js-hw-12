import './js/pixabay-api';
import { getImages } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search');
const container = document.querySelector('.pictures');
const loader = document.querySelector('.loader');
const moreBtn = document.querySelector('.more__btn');

let pageQ = 1;


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

  getImages(query, pageQ)
    .then(data => {
      if (data) {
        if (data.hits.length === 0) {
          throw Error(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        }
        imagesRender(data.hits);
        pageQ += 1;

        if (pageQ > 1) {
          moreBtn.hidden = false;
        }

      
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



moreBtn.addEventListener('click', handleClick)

function handleClick() {
  getImages(query, pageQ); 
}