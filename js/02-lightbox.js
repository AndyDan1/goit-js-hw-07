import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const createGalleryLayout = ({ preview, original, description }) => {
  return `
           <a title="asdfghjkl" self class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"  />
          </a>
         `;
};

const addLayout = () => {
  const arr = galleryItems
    .map(item => {
      return createGalleryLayout(item);
    })
    .join('');
  gallery.insertAdjacentHTML('afterbegin', arr);
};

addLayout();

let describeOptionsBigImg = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  scrollZoom: false,
});
