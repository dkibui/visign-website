import{_ as t,a as e,b as a,c as s,i as c,d as l,S as n,s as r,e as o,t as u,m as i,f as p,g as v,h as f,j as h,n as b,o as d,k as y,l as x,E,r as m,F as I,p as T,q as j,G as D}from"./client.4d975f8a.js";function P(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,l=e(t);if(s){var n=e(this).constructor;c=Reflect.construct(l,arguments,n)}else c=l.apply(this,arguments);return a(this,c)}}function g(t){var e,a,s,c,l,n,r,P,g,N,R,V,S,U,F,O,C,J,w,A,k,q,B,G,H,M,X;return{c:function(){e=o("div"),a=o("h1"),s=u("Create Job Page"),c=i(),l=o("form"),n=o("div"),r=o("input"),P=i(),g=o("div"),N=o("input"),R=i(),V=o("div"),S=o("input"),U=i(),F=o("div"),O=o("input"),C=i(),J=o("div"),w=o("input"),A=i(),k=o("div"),q=o("textarea"),B=i(),G=o("button"),H=u("Submit Form"),this.h()},l:function(t){e=p(t,"DIV",{class:!0});var o=v(e);a=p(o,"H1",{class:!0});var u=v(a);s=f(u,"Create Job Page"),u.forEach(h),c=b(o),l=p(o,"FORM",{});var i=v(l);n=p(i,"DIV",{class:!0});var d=v(n);r=p(d,"INPUT",{type:!0,placeholder:!0,class:!0}),d.forEach(h),P=b(i),g=p(i,"DIV",{class:!0});var y=v(g);N=p(y,"INPUT",{type:!0,placeholder:!0,class:!0}),y.forEach(h),R=b(i),V=p(i,"DIV",{class:!0});var x=v(V);S=p(x,"INPUT",{type:!0,placeholder:!0,class:!0}),x.forEach(h),U=b(i),F=p(i,"DIV",{class:!0});var E=v(F);O=p(E,"INPUT",{type:!0,placeholder:!0,class:!0}),E.forEach(h),C=b(i),J=p(i,"DIV",{class:!0});var m=v(J);w=p(m,"INPUT",{type:!0,placeholder:!0,class:!0}),m.forEach(h),A=b(i),k=p(i,"DIV",{class:!0});var I=v(k);q=p(I,"TEXTAREA",{cols:!0,rows:!0,placeholder:!0,class:!0}),v(q).forEach(h),I.forEach(h),B=b(i),G=p(i,"BUTTON",{type:!0,class:!0});var T=v(G);H=f(T,"Submit Form"),T.forEach(h),i.forEach(h),o.forEach(h),this.h()},h:function(){d(a,"class","svelte-1bbxu0t"),d(r,"type","text"),d(r,"placeholder","Enter job title"),d(r,"class","svelte-1bbxu0t"),d(n,"class","input svelte-1bbxu0t"),d(N,"type","text"),d(N,"placeholder","Enter job category"),d(N,"class","svelte-1bbxu0t"),d(g,"class","input svelte-1bbxu0t"),d(S,"type","text"),d(S,"placeholder","Enter job location"),d(S,"class","svelte-1bbxu0t"),d(V,"class","input svelte-1bbxu0t"),d(O,"type","text"),d(O,"placeholder","Enter company"),d(O,"class","svelte-1bbxu0t"),d(F,"class","input svelte-1bbxu0t"),d(w,"type","text"),d(w,"placeholder","Enter salary"),d(w,"class","svelte-1bbxu0t"),d(J,"class","input svelte-1bbxu0t"),d(q,"cols","30"),d(q,"rows","10"),d(q,"placeholder","Enter job details"),d(q,"class","svelte-1bbxu0t"),d(k,"class","input svelte-1bbxu0t"),d(G,"type","submit"),d(G,"class","svelte-1bbxu0t"),d(e,"class","form-div svelte-1bbxu0t")},m:function(o,u){y(o,e,u),x(e,a),x(a,s),x(e,c),x(e,l),x(l,n),x(n,r),E(r,t[0]),x(l,P),x(l,g),x(g,N),E(N,t[1]),x(l,R),x(l,V),x(V,S),E(S,t[2]),x(l,U),x(l,F),x(F,O),E(O,t[3]),x(l,C),x(l,J),x(J,w),E(w,t[4]),x(l,A),x(l,k),x(k,q),E(q,t[5]),x(l,B),x(l,G),x(G,H),M||(X=[m(r,"input",t[7]),m(N,"input",t[8]),m(S,"input",t[9]),m(O,"input",t[10]),m(w,"input",t[11]),m(q,"input",t[12]),m(l,"submit",I(t[6]))],M=!0)},p:function(t,e){var a=T(e,1)[0];1&a&&r.value!==t[0]&&E(r,t[0]),2&a&&N.value!==t[1]&&E(N,t[1]),4&a&&S.value!==t[2]&&E(S,t[2]),8&a&&O.value!==t[3]&&E(O,t[3]),16&a&&w.value!==t[4]&&E(w,t[4]),32&a&&E(q,t[5])},i:j,o:j,d:function(t){t&&h(e),M=!1,D(X)}}}function N(t,e,a){var s,c,l,n,r,o;return[s,c,l,n,r,o,function(){var t={title:s,category:c,location:l,company:n,salary:r,details:o};fetch("/jobs.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),console.log(t)},function(){s=this.value,a(0,s)},function(){c=this.value,a(1,c)},function(){l=this.value,a(2,l)},function(){n=this.value,a(3,n)},function(){r=this.value,a(4,r)},function(){o=this.value,a(5,o)}]}var R=function(e){t(o,n);var a=P(o);function o(t){var e;return s(this,o),e=a.call(this),c(l(e),t,N,g,r,{}),e}return o}();export default R;