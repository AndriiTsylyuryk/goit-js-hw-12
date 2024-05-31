import{a as L,S,i as l}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();async function f(e,r=1,n=15){return(await L("https://pixabay.com/api/",{params:{key:"44051747-21f0728748ba5e469c568f2fa",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:n}})).data}const q=document.querySelector(".pictures");let d;function w(e){return`
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
    `}function R(e){return e.map(w).join("")}function m(e){const r=R(e);q.insertAdjacentHTML("beforeend",r),d?d.refresh():d=new S(".pictures a",{captionsData:"alt",captionDelay:250})}const p=document.querySelector(".search"),h=document.querySelector(".pictures"),y=document.querySelector(".loader"),i=document.querySelector(".more__btn"),g=document.querySelector(".loader1");let s=1,a="",b;p.addEventListener("submit",v);function v(e){if(e.preventDefault(),h.innerHTML="",a=e.target.elements.query.value.trim(),!a){l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});return}s=1,x(),f(a).then(r=>{if(r){if(r.hits.length===0)throw Error("Sorry, there are no images matching your search query. Please try again!");m(r.hits),b=h.querySelector(".gallery-item").getBoundingClientRect(),i.hidden=!1,s+=1}}).catch(r=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{P(),p.reset()})}function x(){y.style.display="block"}function P(){y.style.display="none"}i.addEventListener("click",$);function $(){s+=1,i.hidden=!0,E(),f(a,s).then(e=>{m(e.hits),window.scrollBy({top:b.height*2,behavior:"smooth"}),s*15>=e.totalHits&&(l.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),i.hidden=!0)}).catch(e=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{O(),i.hidden=!1})}function E(){g.hidden=!1}function O(){g.hidden=!0}
//# sourceMappingURL=commonHelpers.js.map
