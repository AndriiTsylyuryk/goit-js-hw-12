import './js/pixabay-api';
import { getImages } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search');
const container = document.querySelector('.pictures');
const loader = document.querySelector('.loader');
const moreBtn = document.querySelector('.more__btn');
const loader1 = document.querySelector('.loader1');

let pageQ = 1;
let query = '';
let domRect;

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  container.innerHTML = '';

  query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message:
        '"Sorry, there are no images matching your search query. Please try again!"',
      position: 'topRight',
    });
    return;
  }

  pageQ = 1;
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

        const li = container.querySelector('.gallery-item');
        domRect = li.getBoundingClientRect();
        moreBtn.hidden = false;
        pageQ += 1;
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

moreBtn.addEventListener('click', handleClick);

function handleClick() {
  pageQ += 1;
  moreBtn.hidden = true;
  showLoader1();

  getImages(query, pageQ)
    .then(data => {
      imagesRender(data.hits);

      window.scrollBy({
        top: domRect.height * 2,
        behavior: 'smooth',
      });

      if (pageQ * 15 >= data.totalHits) {
        iziToast.info({
          title: '',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
        moreBtn.hidden = true;
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
      hideLoader1();
      moreBtn.hidden = false;
    });
}

function showLoader1() {
  loader1.hidden = false;
}

function hideLoader1() {
  loader1.hidden = true;
}
