import{S as s,i as a,s as t,e as l,t as e,h as c,c as o,a as r,b as n,d as h,j as f,k as i,f as v,g as d,w as u,q as p,n as j,x}from"./client.e524e583.js";function g(s,a,t){const l=s.slice();return l[1]=a[t],l}function b(s){let a,t,p,j,x,g,b,m,q,E,y,P,w,D,I,V,k,K,$=s[1].title+"",H=s[1].salary+"",J=s[1].company+"",S=s[1].location+"",z=s[1].category+"";return{c(){a=l("div"),t=l("p"),p=e($),j=c(),x=l("p"),g=e("Ksh. "),b=e(H),m=c(),q=l("div"),E=l("p"),y=e(J),P=c(),w=l("p"),D=e(S),I=c(),V=l("p"),k=e(z),K=c(),this.h()},l(s){a=o(s,"DIV",{class:!0});var l=r(a);t=o(l,"P",{class:!0});var e=r(t);p=n(e,$),e.forEach(h),j=f(l),x=o(l,"P",{class:!0});var c=r(x);g=n(c,"Ksh. "),b=n(c,H),c.forEach(h),m=f(l),q=o(l,"DIV",{class:!0});var i=r(q);E=o(i,"P",{class:!0});var v=r(E);y=n(v,J),v.forEach(h),P=f(i),w=o(i,"P",{class:!0});var d=r(w);D=n(d,S),d.forEach(h),I=f(i),V=o(i,"P",{class:!0});var u=r(V);k=n(u,z),u.forEach(h),i.forEach(h),K=f(l),l.forEach(h),this.h()},h(){i(t,"class","title svelte-txaqfl"),i(x,"class","svelte-txaqfl"),i(E,"class","svelte-txaqfl"),i(w,"class","svelte-txaqfl"),i(V,"class","svelte-txaqfl"),i(q,"class","div-grid svelte-txaqfl"),i(a,"class","job svelte-txaqfl")},m(s,l){v(s,a,l),d(a,t),d(t,p),d(a,j),d(a,x),d(x,g),d(x,b),d(a,m),d(a,q),d(q,E),d(E,y),d(q,P),d(q,w),d(w,D),d(q,I),d(q,V),d(V,k),d(a,K)},p(s,a){1&a&&$!==($=s[1].title+"")&&u(p,$),1&a&&H!==(H=s[1].salary+"")&&u(b,H),1&a&&J!==(J=s[1].company+"")&&u(y,J),1&a&&S!==(S=s[1].location+"")&&u(D,S),1&a&&z!==(z=s[1].category+"")&&u(k,z)},d(s){s&&h(a)}}}function m(s){let a,t,u,m,q,E=s[0],y=[];for(let a=0;a<E.length;a+=1)y[a]=b(g(s,E,a));return{c(){a=l("div"),t=l("h1"),u=e("hello jobs"),m=c();for(let s=0;s<y.length;s+=1)y[s].c();q=c(),this.h()},l(s){a=o(s,"DIV",{class:!0});var l=r(a);t=o(l,"H1",{class:!0});var e=r(t);u=n(e,"hello jobs"),e.forEach(h),m=f(l);for(let s=0;s<y.length;s+=1)y[s].l(l);l.forEach(h),q=f(s);p('[data-svelte="svelte-kfiydh"]',document.head).forEach(h),this.h()},h(){i(t,"class","svelte-txaqfl"),i(a,"class","card-container svelte-txaqfl"),document.title="Jobs"},m(s,l){v(s,a,l),d(a,t),d(t,u),d(a,m);for(let s=0;s<y.length;s+=1)y[s].m(a,null);v(s,q,l)},p(s,[t]){if(1&t){let l;for(E=s[0],l=0;l<E.length;l+=1){const e=g(s,E,l);y[l]?y[l].p(e,t):(y[l]=b(e),y[l].c(),y[l].m(a,null))}for(;l<y.length;l+=1)y[l].d(1);y.length=E.length}},i:j,o:j,d(s){s&&h(a),x(y,s),s&&h(q)}}}async function q(s,a){const t=await this.fetch("/jobs.json");return{jobs:await t.json()}}function E(s,a,t){let{jobs:l}=a;return s.$$set=s=>{"jobs"in s&&t(0,l=s.jobs)},[l]}export default class extends s{constructor(s){super(),a(this,s,E,m,t,{jobs:0})}}export{q as preload};