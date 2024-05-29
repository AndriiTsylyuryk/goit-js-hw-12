
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector('.pictures');

let lightbox;

function imageTemp(image){
    return `
    <li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${image.webformatURL}" 
        alt="${image.tags}" 
      />
    </a>
    <div class="img-info-box">
      <p class="detail-text"><b class="detail-title">Likes</b> ${image.likes}</p>
      <p class="detail-text"><b class="detail-title">Views</b> ${image.views}</p>
      <p class="detail-text"><b class="detail-title">Comments</b> ${image.comments}</p>
      <p class="detail-text"><b class="detail-title">Downloads</b> ${image.downloads}</p>
    </div>
    </li>
    `
}


function imagesTemplate(arr) {
    return arr.map(imageTemp).join('');
}

export function imagesRender (images) {
    const markup = imagesTemplate(images);
    container.innerHTML = markup;
    if (!lightbox) {
        lightbox = new SimpleLightbox('.pictures a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
      } else {
        lightbox.refresh();
      }
}