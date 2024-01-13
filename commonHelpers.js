import{i as y,S,a as w}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const h=document.querySelector(".form"),g=document.querySelector(".gallery"),n=document.querySelector(".loader"),r=document.querySelector(".load-button");n.style.display="none";r.style.display="none";const p=40;let d,c=1,u;async function m(s,t){const i="https://pixabay.com/api/",a="41530032-c682b7302a1559a8b9f540776";try{return await w.get(`${i}`,{params:{key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:p}})}catch(e){console.error(e)}}h.addEventListener("submit",s=>{if(s.preventDefault(),g.innerHTML="",d=s.target.elements.search.value,d.trim()===""){r.style.display="none";return}n.style.display="inline-block",r.style.display="none",c=1,m(d,c).then(t=>{n.style.display="none",r.style.display="flex",t.data.hits.length?t.data.hits.length<p&&(r.style.display="none",y.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"11",backgroundColor:"#EF4040",messageColor:"#FFF"}),r.style.display="none"),f(t.data.hits),u=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),u.refresh(),h.reset()}).catch(t=>{n.style.display="none",console.error("Error")})});r.addEventListener("click",()=>{try{c+=1,r.style.display="none",n.style.display="inline-block";const s=document.querySelector(".gallery-item").getBoundingClientRect().height;m(d,c).then(t=>{f(t.data.hits),window.scrollBy(0,s*2);const i=Math.ceil(t.data.totalHits/p);if(c===i){r.style.display="none",y.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.style.display="none",r.style.display="none";return}u.refresh(),n.style.display="none",r.style.display="flex"})}catch(s){console.log(s)}});function f(s){const t=s.reduce((i,{largeImageURL:a,webformatURL:e,tags:o,likes:l,views:v,comments:b,downloads:L})=>i+`
            <li class="gallery-item">
          <a class="gallery-link" href="${a}">
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
        </li>`,"");g.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
