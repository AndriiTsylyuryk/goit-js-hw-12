import{a as b,S as L,i as n}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function h(e,r=1,i=15){return(await b("https://pixabay.com/api/",{params:{key:"44051747-21f0728748ba5e469c568f2fa",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:i}})).data}const S=document.querySelector(".pictures");let u;function q(e){return`
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
    `}function w(e){return e.map(q).join("")}function f(e){const r=w(e);S.insertAdjacentHTML("beforeend",r),u?u.refresh():u=new L(".pictures a",{captionsData:"alt",captionDelay:250})}const y=document.querySelector(".search"),m=document.querySelector(".pictures"),g=document.querySelector(".loader"),p=document.querySelector(".more__btn");let s=1,a="",d;y.addEventListener("submit",R);function R(e){if(e.preventDefault(),m.innerHTML="",a=e.target.elements.query.value.trim(),!a){n.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});return}s=1,v(),h(a).then(r=>{if(r){if(r.hits.length===0)throw Error("Sorry, there are no images matching your search query. Please try again!");f(r.hits),d=m.querySelector(".gallery-item").getBoundingClientRect(),p.hidden=!1,s+=1}}).catch(r=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{x(),y.reset()})}function v(){g.style.display="block"}function x(){g.style.display="none"}p.addEventListener("click",E);function E(){h(a,s).then(e=>{f(e.hits),s+=1,console.log(d.height),window.scrollBy({top:d.height*2,behavior:"smooth"}),s*15>=e.totalHits&&(n.error({title:"Error",message:"Were sorry, but youve reached the end of search results.",position:"topRight"}),p.hidden=!0)}).catch(e=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
