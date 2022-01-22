import{_ as n,c as o,e as a,w as s,b as e,d as r,a as l,r as i,o as c}from"./app.5f4b5f7f.js";const D='{"title":"Observable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"More Examples","slug":"more-examples"},{"level":3,"title":"Observable Markdown","slug":"observable-markdown"}],"relativePath":"src/observable/observable.md","lastUpdated":1642839849367}',d={},h=e("h1",{id:"observable",tabindex:"-1"},[r("Observable "),e("a",{class:"header-anchor",href:"#observable","aria-hidden":"true"},"#")],-1),b=e("p",null,[e("strong",null,"tag"),r(": "),e("code",null,"<hpcc-observable>")],-1),p=e("hpcc-preview",{style:{width:"100%",height:"800px"}},[e("pre",null,[e("code",null,`<hpcc-observable style="width:100%;height:100%">
  md\`# Confirmed Cases v Deaths (\${my_country}) - \${lastDate.toLocaleDateString("en-US", {dateStyle: "medium"})}\`

  chart;

  //  Dependencies
  my_country = "Germany";
  import { chart, lastDate } with { my_country as overrideLocation } from "@gordonsmith/irish-confirmed-cases-v-deaths";
</hpcc-observable>
`)])],-1),u=l("",6),m=e("hpcc-preview",{style:{width:"100%",height:"800px"}},[e("pre",null,[e("code",null,`<hpcc-observable mode="markdown" style="width:100%;height:100%">
  # Liquid Fun

  \`\`\`
  canvas;

  //  Dependencies
  import { canvas } from "@mbostock/liquidfun";
  \`\`\`
</hpcc-observable>
`)])],-1);function v(_,f,g,w,x,y){const t=i("ClientOnly");return c(),o("div",null,[h,b,a(t,null,{default:s(()=>[p]),_:1}),u,a(t,null,{default:s(()=>[m]),_:1})])}var S=n(d,[["render",v]]);export{D as __pageData,S as default};
