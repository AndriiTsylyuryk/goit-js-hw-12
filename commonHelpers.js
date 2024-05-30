import{a as L,S,i as a}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function h(e,r=1,s=15){return(await L("https://pixabay.com/api/",{params:{key:"44051747-21f0728748ba5e469c568f2fa",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s}})).data}const q=document.querySelector(".pictures");let u;function w(e){return`
    <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${e.webformatURL}" 
        alt="${e.tags}" 
      />
    </a>
    <div class="img-info-box">
      <p class="detail-text"><b class="detail-title">Likes</b> ${e.likes}</p>
      <p class="detail-text"><b class="detail-title">Views</b> ${e.views}</p>
      <p class="detail-text"><b class="detail-title">Comments</b> ${e.comments}</p>
      <p class="detail-text"><b class="detail-title">Downloads</b> ${e.downloads}</p>
    </div>
    </li>
    `}function R(e){return e.map(w).join("")}function m(e){const r=R(e);q.insertAdjacentHTML("beforeend",r),u?u.refresh():u=new S(".pictures a",{captionsData:"alt",captionDelay:250})}const p=document.querySelector(".search"),f=document.querySelector(".pictures"),y=document.querySelector(".loader"),d=document.querySelector(".more__btn"),g=document.querySelector(".loader1");let i=1,n="",b;p.addEventListener("submit",v);function v(e){if(e.preventDefault(),f.innerHTML="",n=e.target.elements.query.value.trim(),!n){a.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});return}i=1,x(),h(n).then(r=>{if(r){if(r.hits.length===0)throw Error("Sorry, there are no images matching your search query. Please try again!");m(r.hits),b=f.querySelector(".gallery-item").getBoundingClientRect(),d.hidden=!1,i+=1}}).catch(r=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{P(),p.reset()})}function x(){y.style.display="block"}function P(){y.style.display="none"}d.addEventListener("click",$);function $(){E(),h(n,i).then(e=>{m(e.hits),i+=1,window.scrollBy({top:b.height*2,behavior:"smooth"}),i*15>=e.totalHits&&(a.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d.hidden=!0)}).catch(e=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{O()})}function E(){g.hidden=!1}function O(){g.hidden=!0}
//# sourceMappingURL=commonHelpers.js.map
