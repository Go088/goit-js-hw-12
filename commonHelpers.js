import{i as p,S,a as w}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y=document.querySelector(".form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".load-button");c.style.display="none";l.style.display="none";const f=40;let d,n,u;async function g(o,t){const s="https://pixabay.com/api/",i="41530032-c682b7302a1559a8b9f540776";try{return await w.get(`${s}`,{params:{key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:f}})}catch(e){console.error(e)}}y.addEventListener("submit",o=>{if(o.preventDefault(),m.innerHTML="",d=o.target.elements.search.value,d.trim()===""){l.style.display="none";return}c.style.display="inline-block",n=1,g(d,n).then(t=>{c.style.display="none",l.style.display="flex",t.data.hits.length||p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"11",backgroundColor:"#EF4040",messageColor:"#FFF"}),h(t.data.hits),u=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),u.refresh(),y.reset()}).catch(t=>{c.style.display="none",console.error("Error")})});l.addEventListener("click",()=>{try{n+=1;const o=document.querySelector(".gallery-item").getBoundingClientRect().height;g(d,n).then(t=>{h(t.data.hits),window.scrollBy(0,o*2);const s=Math.ceil(t.data.totalHits/f);n===s&&(l.style.display="none",p.show({message:"We're sorry, but you've reached the end of search results."})),u.refresh()})}catch(o){console.log(o)}});function h(o){const t=o.reduce((s,{largeImageURL:i,webformatURL:e,tags:r,likes:a,views:v,comments:b,downloads:L})=>s+`
            <li class="gallery-item">
          <a class="gallery-link" href="${i}">
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
        </li>`,"");m.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
