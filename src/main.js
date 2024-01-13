import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

const searchForm = document.querySelector(".form")
const imageGallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadButton = document.querySelector(".load-button")

loader.style.display = "none";
loadButton.style.display = "none";

const perPage = 40;
let inputValue;
let page = 1;
const galleryPage = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
});

async function getImages (searchTerm, page) {
  const BASE_URL = "https://pixabay.com/api/";
  const API_KEY = "41530032-c682b7302a1559a8b9f540776";

  try {
    const response = await axios.get(`${BASE_URL}`, {params: {
      key: API_KEY,
      q: searchTerm,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: perPage,
    }});

    return response;

  } catch (error) {
      iziToast.error({
        title: "Error",
        message: "Sorry, request failed. Please try again later!",
    });
    console.error(error);
  }
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  imageGallery.innerHTML = "";
 
  inputValue = event.target.elements.search.value;
  if (inputValue.trim() === '') {
    loadButton.style.display = "none";
    return;
   }

  loader.style.display = "inline-block";
  loadButton.style.display = "none";

  page = 1;

  getImages(inputValue, page)
    .then(response => {
      loader.style.display = "none";
      loadButton.style.display = "flex";
      
      if (!response.data.hits.length) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
          messageSize: "11",
          backgroundColor: "#EF4040",
          messageColor: "#FFF"
        });
        loadButton.style.display = "none";
      }
      
      else if (response.data.hits.length < perPage) {
        loadButton.style.display = "none";
        iziToast.show({
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight",
          });
        
        }

     renderImage(response.data.hits);
      

      galleryPage.refresh();

      searchForm.reset();
    }
)
    .catch((error) => {
      loader.style.display = "none";
      console.error("Error");
  })
})

loadButton.addEventListener("click", () => {
  try {
    page += 1;

    loadButton.style.display = "none";
    loader.style.display = "inline-block";
    
    const itemHeight = document.querySelector(".gallery-item").getBoundingClientRect().height;

    getImages(inputValue, page)
      .then(response => {
        renderImage(response.data.hits);

        window.scrollBy(0, itemHeight * 2);

        const totalPages = Math.ceil(response.data.totalHits / perPage);
        
        if (page === totalPages) {
          loadButton.style.display = "none";
          iziToast.show({
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight",
          });
          
          loader.style.display = "none";
          loadButton.style.display = "none";
          return;
        }
        galleryPage.refresh();

        loader.style.display = "none";
        loadButton.style.display = "flex";
      });
    
  } catch (error) {
    console.log(error);
  }
});

function renderImage(hits) {
  const markup = hits.reduce((html, { largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => html + `
            <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="info">
            <div class="info-item">
              <h2>Likes</h2>
              <p>${likes}</p>
            </div>
            <div class="info-item">
              <h2>Views</h2>
              <p>${views}</p>
            </div>
            <div class="info-item">
              <h2>Comments</h2>
              <p>${comments}</p>
            </div>
            <div class="info-item">
              <h2>Downloads</h2>
              <p>${downloads}</p>
            </div>
          </div>
        </li>`, "");
  
  imageGallery.insertAdjacentHTML("beforeend", markup);
}
  

