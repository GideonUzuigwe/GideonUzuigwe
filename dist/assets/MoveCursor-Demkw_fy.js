import{r as n,j as s}from"./index-S_XSmzup.js";const u=()=>{const e=n.useRef(null),r=n.useRef(null);return n.useEffect(()=>{function o(t){e.current.style.top=t.clientY+"px",e.current.style.left=t.clientX+"px",e.current.style.opacity=1,r.current.style.top=t.clientY+"px",r.current.style.left=t.clientX+"px",r.current.style.opacity=1}return window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[]),s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:e,className:"cursor"}),s.jsx("div",{ref:r,className:"cursor-2"})]})};export{u as default};