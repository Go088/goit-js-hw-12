import{S,i as y,a as q}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=document.querySelector(".form"),h=document.querySelector(".gallery"),a=document.querySelector(".loader"),s=document.querySelector(".load-button");a.style.display="none";s.style.display="none";const u=40;let d,c=1;const g=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});async function m(o,t){const i="https://pixabay.com/api/",n="41530032-c682b7302a1559a8b9f540776";try{return await q.get(`${i}`,{params:{key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:u}})}catch(e){y.error({title:"Error",message:"Sorry, request failed. Please try again later!"}),console.error(e)}}p.addEventListener("submit",o=>{if(o.preventDefault(),h.innerHTML="",d=o.target.elements.search.value,d.trim()===""){s.style.display="none";return}a.style.display="inline-block",s.style.display="none",c=1,m(d,c).then(t=>{a.style.display="none",s.style.display="flex",t.data.hits.length?t.data.hits.length<u&&(s.style.display="none",y.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"11",backgroundColor:"#EF4040",messageColor:"#FFF"}),s.style.display="none"),f(t.data.hits),g.refresh(),p.reset()}).catch(t=>{a.style.display="none",console.error("Error")})});s.addEventListener("click",()=>{try{c+=1,s.style.display="none",a.style.display="inline-block";const o=document.querySelector(".gallery-item").getBoundingClientRect().height;m(d,c).then(t=>{f(t.data.hits),window.scrollBy(0,o*2);const i=Math.ceil(t.data.totalHits/u);if(c===i){s.style.display="none",y.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.style.display="none",s.style.display="none";return}g.refresh(),a.style.display="none",s.style.display="flex"})}catch(o){console.log(o)}});function f(o){const t=o.reduce((i,{largeImageURL:n,webformatURL:e,tags:r,likes:l,views:v,comments:b,downloads:L})=>i+`
            <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${r}"
            />
          </a>
          <div class="info">
            <div class="info-item">
              <h2>Likes</h2>
              <p>${l}</p>
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
        </li>`,"");h.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
