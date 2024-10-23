var a=Object.defineProperty;var d=(n,e,r)=>e in n?a(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var c=(n,e,r)=>d(n,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const u=(n=0)=>new Promise(e=>{setTimeout(e,n)});class l{constructor(){c(this,"keys");this.keys=document.querySelectorAll(".key"),this.setupEventListeners(),this.playSound=this.playSound.bind(this),this.removeTransition=this.removeTransition.bind(this),this.clickPlaySound=this.clickPlaySound.bind(this),this.init()}playSound(e){const r=document.querySelector(`audio[data-key="${e.code}"]`),o=document.querySelector(`.key[data-key="${e.code}"]`);r&&(o.classList.add("playing"),r.currentTime=0,r.play())}removeTransition(e){const r=document.querySelector(`.key[data-key="${e.code}"]`);r&&r.classList.remove("playing")}async clickPlaySound(e){const o=e.currentTarget.dataset.key,t=document.querySelector(`audio[data-key="${o}"]`),i=document.querySelector(`.key[data-key="${o}"]`);t&&(i.classList.add("playing"),t.currentTime=0,t.play(),await u(50),i.classList.remove("playing"))}setupEventListeners(){window.addEventListener("keydown",this.playSound),window.addEventListener("keyup",this.removeTransition);for(const e of this.keys)e.addEventListener("click",r=>this.clickPlaySound(r))}init(){this.setupEventListeners()}}const y=()=>new l;window.addEventListener("DOMContentLoaded",y);
