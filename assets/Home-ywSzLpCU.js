import{u as b,a as c,j as t,M as k,f as M,A as x,I as S,r as C,b as u,c as V,s as B,G as L,d as _,S as v,e as E,g as H,l as $,B as W,h as f,i as I,k as r,w as F,m as D,C as q,q as y,t as G,n as N,o as P,p as R,F as O,v as U}from"./index-BZtqkk9T.js";const J=()=>{const{t:i}=b(),{switcher:e}=c(s=>s.switcher);return t.jsxs(k,{initial:"hidden",whileInView:"visible",viewport:{amount:.2,once:!0},variants:M,custom:1,children:[t.jsx(x,{darkTheme:e,top:"0",right:"170px",delay:"2.3s",children:i("intro.animatedItem.firstItem")}),t.jsx(x,{darkTheme:e,top:"100px",left:"-70px",delay:"2.2s",children:i("intro.animatedItem.secondItem")}),t.jsx(x,{darkTheme:e,top:"100px",right:"-30px",delay:"2.5s",children:i("intro.animatedItem.thirdItem")}),t.jsx(S,{src:"/media/robot.png"})]})},K=()=>{const[i,e]=C.useState([]),{windowWidth:s}=u(),d=V(),l=s>889?"28px":"22px",h=s>889?"40px":"30px",m=s>889?"24px":"18px";return{animatedString:o=>{e([]);const a=o.split(""),n=[];return a.forEach((p,z)=>{const T=setTimeout(()=>{e(A=>[...A,p])},200*z);n.push(T)}),()=>{n.forEach(clearTimeout)}},letters:i,sizeName:h,sizeText:m,sizeTitle:l,showModal:()=>{d(B({show:!0,scroll:!0}))},getCV:()=>{const o=document.createElement("a");o.href="/Angelo Luca CV.pdf",o.download="Angelo Luca CV.pdf",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}};function Q(i){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z"},child:[]}]})(i)}const X=()=>{const{windowWidth:i}=u(),{t:e}=b(),{show:s}=c(n=>n.modal),{switcher:d}=c(n=>n.switcher),{animatedString:l,letters:h,sizeName:m,sizeText:w,sizeTitle:g,showModal:j,getCV:o}=K(),a=e("intro.name");return C.useEffect(()=>l(a),[a]),t.jsxs(t.Fragment,{children:[t.jsxs(_,{darkTheme:d,id:"home",children:[t.jsx(v,{size:g,margin:"0 0 10px 0",weight:"600",children:e("intro.greeting")}),t.jsx("div",{style:{display:"flex",height:"90px"},children:t.jsx(v,{size:m,margin:"0 0 30px 0",weight:"600",children:h.map((n,p)=>t.jsx(E,{children:n===" "?" ":n},p))})}),t.jsxs(H,{initial:"hidden",whileInView:"visible",viewport:{amount:.2,once:!0},variants:$,custom:12,size:w,margin:"0 0 50px 0",weight:"600",children:[e("intro.description.firstPart"),t.jsxs("span",{children:[" ",e("intro.description.span")]})," ",t.jsx("br",{}),e("intro.description.secondPart")]}),t.jsxs(W,{children:[t.jsx(f,{initial:"hidden",whileInView:"visible",viewport:{amount:.2,once:!0},variants:I,custom:12,onClick:j,height:"44px",hoverBack:"transparent",hoverColor:r,margin:i>480?"0 10px 0 0":"0 0 15px 0",hoverBorder:`2px solid ${r}`,children:e("intro.button")}),t.jsxs(f,{initial:"hidden",whileInView:"visible",viewport:{amount:.2,once:!0},variants:I,custom:14,height:"44px",color:r,background:F,hoverBack:"transparent",hoverBorder:`2px solid ${r}`,onClick:o,children:[e("intro.downloadButton"),t.jsx(Q,{size:30})]})]})]}),t.jsx(D,{show:s,children:t.jsx(q,{})})]})},Y=y.section`
  width: 100%;
  height: 650px;
  padding: 15% 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media ${G} {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media ${N} {
    width: 100%;
    height: 400px;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media ${P} {
    width: 90%;
    height: 100%;
    margin: 50px 0 0 0;
  }
`,Z=y.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  animation: ${R} 2s infinite;
`,et=()=>{const{windowWidth:i}=u(),{switcher:e}=c(s=>s.switcher);return t.jsxs(Y,{children:[t.jsx(X,{}),t.jsx(J,{}),i>1110&&t.jsx(Z,{children:t.jsx(O,{size:35,color:e?r:U})})]})};export{et as default};
