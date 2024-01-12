import{i as p,S,a as w}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const u=document.querySelector(".form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader"),s=document.querySelector(".load-button");n.style.display="none";s.style.display="none";const m=40;let d,c,y;async function g(o,t){const i="https://pixabay.com/api/",l="41530032-c682b7302a1559a8b9f540776";try{return await w.get(`${i}`,{params:{key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:m}})}catch(e){console.error(e)}}u.addEventListener("submit",o=>{if(o.preventDefault(),f.innerHTML="",d=o.target.elements.search.value,d.trim()===""){s.style.display="none";return}n.style.display="inline-block",c=1,g(d,c).then(t=>{n.style.display="none",s.style.display="flex",t.data.hits.length||p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"11",backgroundColor:"#EF4040",messageColor:"#FFF"}),h(t.data.hits),y=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),y.refresh(),u.reset()}).catch(t=>{n.style.display="none",console.error("Error")})});s.addEventListener("click",()=>{try{c+=1,s.style.display="none",n.style.display="inline-block";const o=document.querySelector(".gallery-item").getBoundingClientRect().height;g(d,c).then(t=>{h(t.data.hits),window.scrollBy(0,o*2);const i=Math.ceil(t.data.totalHits/m);if(c===i){s.style.display="none",p.show({message:"We're sorry, but you've reached the end of search results."}),n.style.display="none",s.style.display="none";return}y.refresh(),n.style.display="none",s.style.display="flex"})}catch(o){console.log(o)}});function h(o){const t=o.reduce((i,{largeImageURL:l,webformatURL:e,tags:r,likes:a,views:v,comments:b,downloads:L})=>i+`
            <li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${r}"
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
        </li>`,"");f.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
