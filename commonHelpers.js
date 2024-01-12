import{i as h,S,a as w}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const p=document.querySelector(".form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader"),s=document.querySelector(".load-button");l.style.display="none";s.style.display="none";const u=40;let d,c,y;async function f(r,t){const i="https://pixabay.com/api/",n="41530032-c682b7302a1559a8b9f540776";try{return await w.get(`${i}`,{params:{key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:u}})}catch(e){console.error(e)}}p.addEventListener("submit",r=>{if(r.preventDefault(),m.innerHTML="",d=r.target.elements.search.value,d.trim()===""){s.style.display="none";return}l.style.display="inline-block",s.style.display="none",c=1,f(d,c).then(t=>{l.style.display="none",s.style.display="flex",t.data.hits.length?t.data.hits.length<u&&(s.style.display="none"):(h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"11",backgroundColor:"#EF4040",messageColor:"#FFF"}),s.style.display="none"),g(t.data.hits),y=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),y.refresh(),p.reset()}).catch(t=>{l.style.display="none",console.error("Error")})});s.addEventListener("click",()=>{try{c+=1,s.style.display="none",l.style.display="inline-block";const r=document.querySelector(".gallery-item").getBoundingClientRect().height;f(d,c).then(t=>{g(t.data.hits),window.scrollBy(0,r*2);const i=Math.ceil(t.data.totalHits/u);if(c===i){s.style.display="none",h.show({message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",s.style.display="none";return}y.refresh(),l.style.display="none",s.style.display="flex"})}catch(r){console.log(r)}});function g(r){const t=r.reduce((i,{largeImageURL:n,webformatURL:e,tags:o,likes:a,views:v,comments:b,downloads:L})=>i+`
            <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${o}"
              width="360"
            />
          </a>
          <div class="info">
            <div class="info-item">
              <h2>Likes</h2>
              <p>${a}</p>
            </div>
            <div class="info-item">
              <h2>Views</h2>
              <p>${v}</p>
            </div>
            <div class="info-item">
              <h2>Comments</h2>
              <p>${b}</p>
            </div>
            <div class="info-item">
              <h2>Downloads</h2>
              <p>${L}</p>
            </div>
          </div>
        </li>`,"");m.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
