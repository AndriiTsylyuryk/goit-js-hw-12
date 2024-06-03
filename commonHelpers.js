import{a as b,S as L,i as s}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function h(e,r=1,a=15){return(await b("https://pixabay.com/api/",{params:{key:"44051747-21f0728748ba5e469c568f2fa",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:a}})).data}const S=document.querySelector(".pictures"),w=new L(".pictures a",{captionsData:"alt",captionDelay:250});function q(e){return`
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
    `}function R(e){return e.map(q).join("")}function f(e){const r=R(e);S.insertAdjacentHTML("beforeend",r),w.refresh()}const p=document.querySelector(".search"),u=document.querySelector(".pictures"),y=document.querySelector(".loader"),i=document.querySelector(".more__btn"),m=document.querySelector(".loader1");let n=1,l="",g;p.addEventListener("submit",v);async function v(e){if(e.preventDefault(),u.innerHTML="",l=e.target.elements.query.value.trim(),!l){s.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});return}x();try{const r=await h(l);if(r.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");f(r.hits),g=u.querySelector(".gallery-item").getBoundingClientRect(),r.hits.length<15?(i.hidden=!0,s.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):i.hidden=!1,n=1}catch{s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{P(),p.reset()}}function x(){y.style.display="block"}function P(){y.style.display="none"}i.addEventListener("click",$);async function $(){n+=1,i.hidden=!0,E();try{const e=await h(l,n);f(e.hits),window.scrollBy({top:g.height*2,behavior:"smooth"}),n*15>=e.totalHits?s.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):i.hidden=!1}catch{s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{O()}}function E(){m.hidden=!1}function O(){m.hidden=!0}
//# sourceMappingURL=commonHelpers.js.map
