import{i as p,S as f,a as y}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";let g=1;async function m(i,r){const o="https://pixabay.com/api/",s="41530032-c682b7302a1559a8b9f540776";try{const e=await y.get(`${o}`,{key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40});return e}catch(e){console.error(e)}}l.addEventListener("submit",i=>{i.preventDefault(),c.innerHTML="",n.style.display="inline-block";const r=i.target.elements.search.value;m(r,g).then(o=>{n.style.display="none",o.hits.length||p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"11",backgroundColor:"#EF4040",messageColor:"#FFF"}),c.innerHTML=h(o.data.hits),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(o=>{n.style.display="none",console.error("Error")})});const h=i=>i.reduce((r,{largeImageURL:o,webformatURL:s,tags:e,likes:t,views:a,comments:d,downloads:u})=>r+`
            <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${s}"
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
              <p>${a}</p>
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
