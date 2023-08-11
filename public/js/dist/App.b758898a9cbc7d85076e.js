(()=>{"use strict";var e,t={335:(e,t,n)=>{var r=n(526),o=n(470),i=n(701),c=n.n(i),a=n(236),s=n.n(a),l=n(80),A=n.n(l),d=n(850),u=n.n(d),p=n(182),f=n.n(p),m=n(213),b=n.n(m),y=n(770),v={};v.styleTagTransform=b(),v.setAttributes=u(),v.insert=A().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),c()(y.Z,v);const C=y.Z&&y.Z.locals?y.Z.locals:void 0;var g=n(426),h={};h.styleTagTransform=b(),h.setAttributes=u(),h.insert=A().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=f(),c()(g.Z,h);const O=g.Z&&g.Z.locals?g.Z.locals:void 0;var w=n(526);function x(e){let{todo:t,buttonAction:n,buttonText:r}=e;return w.createElement("div",{className:O.todo}," ",t.title,w.createElement("button",{className:O.button,onClick:()=>n(t._id)},r))}var j=n(526);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){let{newTodo:t,createTodo:n,setNewTodo:r,todos:o,completedTodos:i,moveToCompleted:c,deleteTodo:a}=e;return j.createElement("div",{className:C.todolist},"Add New Todo:",j.createElement("input",{className:C.input,type:"text",value:t.title,onChange:e=>{r(P(P({},t),{},{title:e.target.value}))},onKeyDown:e=>{"Enter"===e.key&&n()}}),j.createElement("h3",null,"Todos"),o.map((e=>j.createElement(x,{key:e._id,todo:e,buttonAction:c,buttonText:"Complete"}))),j.createElement("h3",null,"Completed Todos"),i.map((e=>j.createElement(x,{key:e._id,todo:e,buttonAction:a,buttonText:"Delete"}))))}var S=n(526);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,o)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){z(i,r,o,c,a,"next",e)}function a(e){z(i,r,o,c,a,"throw",e)}c(void 0)}))}}function D(){const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)([]),[i,c]=(0,r.useState)({title:"",completed:!1}),a=function(){var n=I((function*(){const n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i);try{const r=yield fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),o=[yield r.json(),...e];t(o),c({title:"",completed:!1})}catch(e){console.error(e)}}));return function(){return n.apply(this,arguments)}}(),s=function(){var e=I((function*(e){try{const t=n.findIndex((t=>t._id===e)),r=[...n],i=yield fetch("/api/todos/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});yield i.json(),r.splice(t,1),o(r)}catch(e){console.error(e)}}));return function(t){return e.apply(this,arguments)}}(),l=function(){var r=I((function*(r){try{const i=e.findIndex((e=>e._id===r)),c=[...e],a=c[i];a.completed=!0;const s=yield fetch("/api/todos/".concat(r),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),l=[yield s.json(),...n];o(l),c.splice(i,1),t(c)}catch(e){console.error(e)}}));return function(e){return r.apply(this,arguments)}}(),A=function(){var e=I((function*(){try{const e=yield fetch("/api/todos"),n=yield e.json();t(n.reverse());const r=yield fetch("/api/todos/completed"),i=yield r.json();o(i.reverse())}catch(e){console.error(e)}}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((()=>{A()}),[]),S.createElement(S.Fragment,null,S.createElement(k,{newTodo:i,setNewTodo:c,createTodo:a,todos:e,moveToCompleted:l,completedTodos:n,deleteTodo:s}))}var F=n(526);(0,o.s)(document.getElementById("app")).render(F.createElement(r.StrictMode,null,F.createElement(D,null)))},426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(864),o=n.n(r),i=n(352),c=n.n(i)()(o());c.push([e.id,".dF90VpCFmFTIHpnHLKQv{font-size:1.5rem;color:rgba(23,5,58,.8)}.dF90VpCFmFTIHpnHLKQv .QxYmIa1HnHqyxrkndPO_{background-color:rgba(23,5,58,.8);text-transform:uppercase;cursor:pointer;color:#f8f8ff;padding:.25rem 1rem;font-size:1rem;font-weight:700;display:inline-block;margin-left:1rem;border:2px;box-shadow:0 2px 5px rgba(23,5,58,.5)}","",{version:3,sources:["webpack://./src/components/Todo/Todo.module.scss"],names:[],mappings:"AAAA,sBACI,gBAAA,CACA,sBAAA,CACA,4CACI,iCAAA,CACA,wBAAA,CACA,cAAA,CACA,aAAA,CACA,mBAAA,CACA,cAAA,CACA,eAAA,CACA,oBAAA,CACA,gBAAA,CACA,UAAA,CACA,qCAAA",sourcesContent:[".todo {\n    font-size: 1.5rem;\n    color: rgba(23, 5, 58, 0.8);\n    .button {\n        background-color: rgba(23, 5, 58, 0.8);\n        text-transform: uppercase;\n        cursor: pointer;\n        color: ghostwhite;\n        padding: 0.25rem 1rem;\n        font-size: 1rem;\n        font-weight: 700;\n        display: inline-block;\n        margin-left: 1rem;\n        border: 2px;\n        box-shadow: 0 2px 5px rgba(23, 5, 58, 0.5);\n    }\n}"],sourceRoot:""}]),c.locals={todo:"dF90VpCFmFTIHpnHLKQv",button:"QxYmIa1HnHqyxrkndPO_"};const a=c},770:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(864),o=n.n(r),i=n(352),c=n.n(i)()(o());c.push([e.id,".wnFJvwW6SXbdzT0JPncz{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:2rem;color:rgba(23,5,58,.8);background-color:#fff;border-radius:9px;border:1px solid rgba(23,5,58,.1);padding:2rem;box-shadow:2px 4px 8px rgba(23,5,58,.5)}.wnFJvwW6SXbdzT0JPncz .nvJYrRRxdDNaUqfYENmW{color:rgba(23,5,58,.8);display:inline-block;font-size:2.5rem;height:3.5rem;margin:1rem;border:0;background-color:#f3f5fe}","",{version:3,sources:["webpack://./src/components/TodoList/TodoList.module.scss"],names:[],mappings:"AAAA,sBACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,sBAAA,CACA,qBAAA,CACA,iBAAA,CACA,iCAAA,CACA,YAAA,CACA,uCAAA,CACA,4CACI,sBAAA,CACA,oBAAA,CACA,gBAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CACA,wBAAA",sourcesContent:[".todolist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    color: rgba(23,5, 58, 0.8);\n    background-color: white;\n    border-radius: 9px;\n    border: 1px solid rgba(23,5, 58, 0.1);\n    padding: 2rem;\n    box-shadow: 2px 4px 8px rgba(23,5, 58, 0.5);\n    .input {\n        color:rgba(23,5, 58, 0.8);\n        display: inline-block;\n        font-size: 2.5rem;\n        height: 3.5rem;\n        margin: 1rem;\n        border: 0;\n        background-color: rgb(243, 245, 254);\n    }\n}"],sourceRoot:""}]),c.locals={todolist:"wnFJvwW6SXbdzT0JPncz",input:"nvJYrRRxdDNaUqfYENmW"};const a=c}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var c=1/0;for(A=0;A<e.length;A++){for(var[n,o,i]=e[A],a=!0,s=0;s<n.length;s++)(!1&i||c>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(a=!1,i<c&&(c=i));if(a){e.splice(A--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var A=e.length;A>0&&e[A-1][2]>i;A--)e[A]=e[A-1];e[A]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={768:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[c,a,s]=n,l=0;if(c.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var A=s(r)}for(t&&t(n);l<c.length;l++)i=c[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(A)},n=self.webpackChunkbig_poppa_code_react_starter_kit=self.webpackChunkbig_poppa_code_react_starter_kit||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[202],(()=>r(335)));o=r.O(o)})();
//# sourceMappingURL=App.38bf46668eb602a97606be9339b73d1b.js.map