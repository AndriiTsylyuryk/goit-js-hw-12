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

async function handleSubmit(event) {
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
  

  showLoader();

  try {
    const data = await getImages(query);
    if (data.hits.length === 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    };

    imagesRender(data.hits);
    
    const li = container.querySelector('.gallery-item');
    domRect = li.getBoundingClientRect();
    
    if (data.hits.length < 15) {
      moreBtn.hidden = true;
      iziToast.info({
        title: '',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      moreBtn.hidden = false;
    }
    pageQ = 1;
    }
  catch (error) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }
    finally {
    hideLoader();
    form.reset();
    };
}


function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

moreBtn.addEventListener('click', handleClick);

async function handleClick() {

  pageQ += 1;

  moreBtn.hidden = true;

  showLoader1();

  try {
    const data = await getImages(query, pageQ);
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
      
    } else {
      moreBtn.hidden = false;
    }
  }
  catch (error){
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
  }
  
  finally {
    hideLoader1();
    }
}

function showLoader1() {
  loader1.hidden = false;
}

function hideLoader1() {
  loader1.hidden = true;
}
