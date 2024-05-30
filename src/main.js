import './js/pixabay-api';
import { getImages } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search');
const container = document.querySelector('.pictures');
const loader = document.querySelector('.loader');
const moreBtn = document.querySelector('.more__btn');


// console.log(domRect)

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
        // console.log(li)
        domRect = li.getBoundingClientRect();
        // console.log(domRect)
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



moreBtn.addEventListener('click', handleClick)

function handleClick() {
  getImages(query, pageQ)
    .then(data => {
      imagesRender(data.hits);
      pageQ += 1;


      console.log(domRect.height)

      
      window.scrollBy({
        top: domRect.height,
        behavior: 'smooth',
      });
    


      if (pageQ * 15 >= data.totalHits) {
       iziToast.error({
      title: 'Error',
      message:
        'Were sorry, but youve reached the end of search results.',
      position: 'topRight',
       })
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
}