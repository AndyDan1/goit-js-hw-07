import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const itemLayout = galleryItems => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join('');
};
gallery.innerHTML = itemLayout(galleryItems);

function onClickImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
  <img src="${e.target.dataset.source}">
  `,
    {
      onShow: () => {
        document.addEventListener('keyup', closeOnEscape);
      },
    }
  );
  instance.show();
  function closeOnEscape(event) {
    if (event.code !== 'Escape') {
      return;
    }
    instance.close();
  }
}
gallery.addEventListener('click', onClickImg);
