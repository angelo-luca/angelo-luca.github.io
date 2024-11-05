import{q as n,R as f,T as v,k as b,w as l,G as k,r as I,a as P,j as t,y as r,Y as _,U as M,u as d,Z as y,D as z,b as L,_ as $,f as T,$ as A,l as C}from"./index-BZtqkk9T.js";import{M as G}from"./NavigationItem-CpnD39PX.js";const R=n.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 330px;
  height: 450px;
  overflow: hidden;
  margin: 20px 10px;
  background: ${({darkTheme:e})=>e?f:v};
  border-radius: 10px;
`,W=n.img`
  width: 100%;
  min-height: 200px;
`,q=n.p`
  font-size: 24px;
  margin-top: 10px;
`,D=n.p`
  font-size: 16px;
  margin: 10px 0;
`,E=n.div`
  margin: 2px 5px 2px 0;
  padding: 2px 3px;
  border-radius: 5px;
  color: black;
  background: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${b};
    color: ${l};
  }
`,c=n.a`
  font-size: 14px;
  margin: 0 0 0 5px;
  cursor: pointer;
  text-decoration: none;
  color: ${l};

  &:hover {
    text-decoration: underline;
  }
`;function N(e){return k({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"},child:[]}]})(e)}const S=I.forwardRef(({project:e},i)=>{const{name:s,description:o,image_path:p,preview_link:x,tech:h,github_link:j,git_label:m,preview_label:g}=e,{switcher:u}=P(a=>a.switcher);return t.jsxs(R,{darkTheme:u,ref:i,children:[t.jsx(W,{src:p,alt:s}),t.jsxs(r,{direction:"column",margin:"0",padding:"0 10px",children:[t.jsx(q,{children:s}),t.jsx(D,{children:o}),t.jsx(r,{align:"center",wrap:"wrap",width:"100%",margin:"0 0 30px 0",children:h.map((a,w)=>t.jsx(E,{children:a},w))}),t.jsxs(r,{width:"100%",align:"center",justify:"space-between",children:[t.jsxs(r,{align:"center",margin:"0",children:[t.jsx(_,{color:"white",size:20}),t.jsx(c,{href:x,target:"_blank",children:g})]}),t.jsxs(r,{align:"center",margin:"0",children:[t.jsx(N,{color:"white",size:20}),t.jsx(c,{href:j,target:"_blank",children:m})]})]})]})]})}),V=M(S),B=()=>{const{t:e}=d(),i=e("projectsPart.projects",{returnObjects:!0});return t.jsx(y,{initial:"hidden",whileInView:"visible",viewport:{amount:.2,once:!0},children:i.map((s,o)=>t.jsx(V,{variants:z,custom:o,project:s},s.id))})},U=()=>{const{windowWidth:e}=L(),{t:i}=d();return t.jsxs($,{initial:"hidden",whileInView:"visible",viewport:{amount:.2,once:!0},children:[t.jsxs(r,{width:"auto",direction:"column",justify:"center",children:[t.jsx(G,{variants:T,custom:1,align:"center",margin:e>768?"50px 0 30px 0":"50px 0 20px 0",id:"projects",children:i("projectsPart.navItem")}),t.jsx(A,{variants:C,custom:1,children:i("projectsPart.title")})]}),t.jsx(B,{})]})};export{U as default};
