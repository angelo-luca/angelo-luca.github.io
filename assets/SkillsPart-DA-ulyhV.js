import{q as n,R as l,T as r,w as g,r as v,a as h,j as i,U as m,V as p,D as j,b as u,u as x,W as w,y as a,f as k,X as f,l as S}from"./index-BZtqkk9T.js";import{M as y}from"./NavigationItem-CpnD39PX.js";const b=[{id:1,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",title:"Typescript"},{id:2,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",title:"Javascript"},{id:3,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",title:"React JS"},{id:4,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",title:"C#"},{id:5,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",title:".Net"},{id:16,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",title:"NodeJS"},{id:20,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",title:"Python"},{id:6,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",title:"Vue3"},{id:7,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",title:"Figma"},{id:8,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",title:"GitHub"},{id:9,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",title:"Redux(Toolkit)"},{id:10,image:"/media/icons/sass.png",title:"Sass"},{id:11,image:"/media/icons/styledComponents.png",title:"Styled components"},{id:12,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",title:"Tailwindcss"},{id:13,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",title:"Next JS"},{id:14,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",title:"VScode"},{id:15,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",title:"Git"},{id:17,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",title:"Storybook"},{id:18,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",title:"Tailwind CSS"},{id:19,image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",title:"Material UI"}],I=n.div`
  width: 150px;
  height: 150px;
  margin: 20px;
  border-radius: 10px;
  background: ${({darkTheme:e})=>e?l:r};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`,T=n.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`,M=n.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
  color: ${g};
`,P=v.forwardRef(({item:e},t)=>{const{image:s,title:o}=e,{switcher:d}=h(c=>c.switcher);return i.jsxs(I,{darkTheme:d,ref:t,children:[i.jsx(T,{src:s,alt:o}),i.jsx(M,{children:o})]})}),C=m(P),R=({data:e})=>i.jsx(p,{initial:"hidden",whileInView:"visible",viewport:{amount:.2,once:!0},children:e.map((t,s)=>i.jsx(C,{item:t,variants:j,custom:s},t.id))}),N=()=>{const{windowWidth:e}=u(),{t}=x();return i.jsx(w,{initial:"hidden",whileInView:"visible",viewport:{amount:.1,once:!0},children:i.jsxs(a,{direction:"column",justify:"center",align:"center",children:[i.jsxs(a,{width:"auto",direction:"column",justify:"center",children:[i.jsx(y,{variants:k,custom:1,align:"center",margin:e>768?"0 0 30px 0":"0 0 20px 0",id:"skills",children:t("skillsPart.navItem")}),i.jsxs(f,{variants:S,custom:1,children:[t("skillsPart.title.firstPart"),i.jsx("br",{}),t("skillsPart.title.secondPart")]})]}),i.jsx(R,{data:b})]})})};export{N as default};
