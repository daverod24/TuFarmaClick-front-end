(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3xaX":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var o=r("lJxs"),s=r("AytR"),a=r("fXoL"),n=r("tk/3");let c=(()=>{class t{constructor(t){this.http=t,this.baseUrl=s.a.baseUrl}validate(t){return this.http.get(`${this.baseUrl}usuarios?email=${t.value}`).pipe(Object(o.a)(t=>0===t.total?null:{emailTomado:!0}))}}return t.\u0275fac=function(e){return new(e||t)(a.ac(n.a))},t.\u0275prov=a.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},NtuB:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r("AytR"),s=r("tk/3"),a=r("fXoL");let n=(()=>{class t{constructor(t){this.http=t,this.baseUrl=o.a.baseUrl}getMedicamentos(){return this.http.get(`${this.baseUrl}productos`)}deleteProducto(t){const e=(new s.c).set("x-token",JSON.parse(localStorage.getItem("token"))||"");return this.http.delete(`${this.baseUrl}productos/${t}`,{headers:e})}createProducto(t){const e=(new s.c).set("x-token",JSON.parse(localStorage.getItem("token"))||"");return this.http.post(`${this.baseUrl}productos`,t,{headers:e})}getCategorias(){return this.http.get(`${this.baseUrl}categorias`)}getProductoPorId(t){return this.http.get(`${this.baseUrl}productos/${t}`)}actualizarProducto(t,e){const r=(new s.c).set("x-token",JSON.parse(localStorage.getItem("token"))||"");return this.http.put(`${this.baseUrl}productos/${t}`,e,{headers:r})}}return t.\u0275fac=function(e){return new(e||t)(a.ac(s.a))},t.\u0275prov=a.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);