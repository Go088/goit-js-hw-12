import{i as p,S,a as w}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=document.querySelector(".form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".load-button");n.style.display="none";i.style.display="none";const m=40;let d,c,y;async function g(o,t){const s="https://pixabay.com/api/",a="41530032-c682b7302a1559a8b9f540776";try{return await w.get(`${s}`,{params:{key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:m}})}catch(e){console.error(e)}}u.addEventListener("submit",o=>{if(o.preventDefault(),f.innerHTML="",d=o.target.elements.search.value,d.trim()===""){i.style.display="none";return}n.style.display="inline-block",c=1,g(d,c).then(t=>{n.style.display="none",i.style.display="flex",t.data.hits.length||p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"11",backgroundColor:"#EF4040",messageColor:"#FFF"}),h(t.data.hits),y=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),y.refresh(),u.reset()}).catch(t=>{n.style.display="none",console.error("Error")})});i.addEventListener("click",()=>{try{c+=1,i.style.display="none",n.style.display="inline-block";const o=document.querySelector(".gallery-item").getBoundingClientRect().height;g(d,c).then(t=>{h(t.data.hits),window.scrollBy(0,o*2);const s=Math.ceil(t.data.totalHits/m);c===s&&(i.style.display="none",p.show({message:"We're sorry, but you've reached the end of search results."})),y.refresh(),i.style.display="flex",n.style.display="none"})}catch(o){console.log(o)}});function h(o){const t=o.reduce((s,{largeImageURL:a,webformatURL:e,tags:r,likes:l,views:v,comments:b,downloads:L})=>s+`
            <li class="gallery-item">
          <a class="gallery-link" href="${a}">
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
        </li>`,"");f.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
