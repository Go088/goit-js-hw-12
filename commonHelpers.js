import{i as p,S as m,a as f}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";let g=1;const y=async s=>{const r="https://pixabay.com/api/",o="41530032-c682b7302a1559a8b9f540776",a=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:g,per_page:40}),e=await f.get(`${r}?${a}`);return console.log(e.data),e};l.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",n.style.display="inline-block";const r=s.target.elements.search.value;y(r).then(o=>{n.style.display="none",o.hits.length||p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"11",backgroundColor:"#EF4040",messageColor:"#FFF"}),c.innerHTML=h(o.data.hits),new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(o=>{n.style.display="none",console.error("Error")})});const h=s=>s.reduce((r,{largeImageURL:o,webformatURL:a,tags:e,likes:t,views:i,comments:d,downloads:u})=>r+`
            <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${e}"
              width="360"
            />
          </a>
          <div class="info">
            <div class="info-item">
              <h2>Likes</h2>
              <p>${t}</p>
            </div>
            <div class="info-item">
              <h2>Views</h2>
              <p>${i}</p>
            </div>
            <div class="info-item">
              <h2>Comments</h2>
              <p>${d}</p>
            </div>
            <div class="info-item">
              <h2>Downloads</h2>
              <p>${u}</p>
            </div>
          </div>
        </li>`,"");
//# sourceMappingURL=commonHelpers.js.map
