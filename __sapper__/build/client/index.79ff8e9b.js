import{S as s,i as t,s as a,e,t as l,a as o,c as r,b as n,d as i,f as c,g as h,h as f,j as d,k as g,v as u,u as v,x as m,n as p,y as b}from"./client.0aa6f2f8.js";function y(s,t,a){const e=s.slice();return e[1]=t[a],e}function E(s,t){let a,v,m,p,b,y,E,w,S,j,x,A,D=t[1].title+"",I=new Date(t[1].created_at).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric",hour:"2-digit",timeZone:"Africa/Nairobi"})+"",N=t[1].summary+"";return{key:s,first:null,c(){a=e("a"),v=e("div"),m=e("p"),p=l(D),b=o(),y=e("p"),E=l(I),w=o(),S=e("p"),j=l(N),x=o(),this.h()},l(s){a=r(s,"A",{href:!0,class:!0});var t=n(a);v=r(t,"DIV",{class:!0});var e=n(v);m=r(e,"P",{class:!0});var l=n(m);p=i(l,D),l.forEach(c),b=h(e),y=r(e,"P",{class:!0});var o=n(y);E=i(o,I),o.forEach(c),w=h(e),S=r(e,"P",{class:!0});var f=n(S);j=i(f,N),f.forEach(c),e.forEach(c),x=h(t),t.forEach(c),this.h()},h(){f(m,"class","title svelte-1ion1hp"),f(y,"class","date svelte-1ion1hp"),f(S,"class","svelte-1ion1hp"),f(v,"class","blog svelte-1ion1hp"),f(a,"href",A="/blogs/"+t[1].id),f(a,"class","svelte-1ion1hp"),this.first=a},m(s,t){d(s,a,t),g(a,v),g(v,m),g(m,p),g(v,b),g(v,y),g(y,E),g(v,w),g(v,S),g(S,j),g(a,x)},p(s,e){t=s,1&e&&D!==(D=t[1].title+"")&&u(p,D),1&e&&I!==(I=new Date(t[1].created_at).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric",hour:"2-digit",timeZone:"Africa/Nairobi"})+"")&&u(E,I),1&e&&N!==(N=t[1].summary+"")&&u(j,N),1&e&&A!==(A="/blogs/"+t[1].id)&&f(a,"href",A)},d(s){s&&c(a)}}}function w(s){let t,a,u,w,S,j,x=[],A=new Map,D=s[0];const I=s=>s[1].id;for(let t=0;t<D.length;t+=1){let a=y(s,D,t),e=I(a);A.set(e,x[t]=E(e,a))}return{c(){t=e("main"),a=e("div"),u=e("h1"),w=l("Our recent blogs"),S=o();for(let s=0;s<x.length;s+=1)x[s].c();j=o(),this.h()},l(s){t=r(s,"MAIN",{});var e=n(t);a=r(e,"DIV",{class:!0});var l=n(a);u=r(l,"H1",{class:!0});var o=n(u);w=i(o,"Our recent blogs"),o.forEach(c),S=h(l);for(let s=0;s<x.length;s+=1)x[s].l(l);l.forEach(c),e.forEach(c),j=h(s);v('[data-svelte="svelte-1th8gdc"]',document.head).forEach(c),this.h()},h(){f(u,"class","svelte-1ion1hp"),f(a,"class","card-container width svelte-1ion1hp"),document.title="Blogs"},m(s,e){d(s,t,e),g(t,a),g(a,u),g(u,w),g(a,S);for(let s=0;s<x.length;s+=1)x[s].m(a,null);d(s,j,e)},p(s,[t]){1&t&&(D=s[0],x=m(x,t,I,1,s,D,A,a,b,E,null,y))},i:p,o:p,d(s){s&&c(t);for(let s=0;s<x.length;s+=1)x[s].d();s&&c(j)}}}async function S(s,t){const a=await this.fetch("blogs.json");return{blogs:await a.json()}}function j(s,t,a){let{blogs:e}=t;return s.$$set=s=>{"blogs"in s&&a(0,e=s.blogs)},[e]}export default class extends s{constructor(s){super(),t(this,s,j,w,a,{blogs:0})}}export{S as preload};
