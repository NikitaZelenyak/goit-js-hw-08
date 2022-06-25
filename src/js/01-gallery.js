// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryEl = document.querySelector('.gallery');
const markupImg = getImagesMarkup(galleryItems);
galleryEl.innerHTML = markupImg;

function getImagesMarkup(items) {
    return items.map(({preview,original,description}) => {
        return `

  <li>  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
title="${description}"
      alt="${description}"
    />
  </a></li>


        `
    }).join('')
    
}

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250} );
