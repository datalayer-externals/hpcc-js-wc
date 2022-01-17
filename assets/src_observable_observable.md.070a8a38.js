import{_ as o,c as n,e as a,w as r,b as e,d as s,a as l,r as i,o as d}from"./app.db3d4f43.js";const S='{"title":"Observable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"More Examples","slug":"more-examples"},{"level":3,"title":"Observable Markdown","slug":"observable-markdown"}],"relativePath":"src/observable/observable.md","lastUpdated":1642448495715}',c={},h=e("h1",{id:"observable",tabindex:"-1"},[s("Observable "),e("a",{class:"header-anchor",href:"#observable","aria-hidden":"true"},"#")],-1),b=e("p",null,[e("strong",null,"tag"),s(": "),e("code",null,"<hpcc-observable>")],-1),p=e("hpcc-preview",{style:{width:"100%",height:"800px"}},[e("pre",null,[e("code",null,`<hpcc-observable style="width:100%;height:100%">
  md\`# Confirmed Cases v Deaths (\${my_country}) - \${lastDate.toLocaleDateString("en-US", {dateStyle: "medium"})}\`

  chart;

  //  Dependencies
  my_country = "Germany";
  import { chart, lastDate } with { my_country as overrideLocation } from "@gordonsmith/irish-confirmed-cases-v-deaths";
</hpcc-observable>
`)])],-1),m=l('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See <a href="./../../README.html">Getting Started</a> for details on how to include @hpcc-js/web-components in your application</p></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><h2 id="more-examples" tabindex="-1">More Examples <a class="header-anchor" href="#more-examples" aria-hidden="true">#</a></h2><h3 id="observable-markdown" tabindex="-1">Observable Markdown <a class="header-anchor" href="#observable-markdown" aria-hidden="true">#</a></h3><p><strong>tag</strong>: <code>&lt;hpcc-observable mode=&quot;markdown&quot;&gt;</code></p>',6),u=e("hpcc-preview",{style:{width:"100%",height:"800px"}},[e("pre",null,[e("code",null,`<hpcc-observable mode="markdown" style="width:100%;height:100%">
  # Confirmed Cases v Deaths (\${my_country}) - \${lastDate.toLocaleDateString("en-US", {dateStyle: "medium"})}

  \`\`\`
  chart;

  //  Dependencies
  my_country = "Ireland";
  import { chart, lastDate } with { my_country as overrideLocation } from "@gordonsmith/irish-confirmed-cases-v-deaths";
  \`\`\`
</hpcc-observable>
`)])],-1);function _(v,f,y,g,w,x){const t=i("ClientOnly");return d(),n("div",null,[h,b,a(t,null,{default:r(()=>[p]),_:1}),m,a(t,null,{default:r(()=>[u]),_:1})])}var k=o(c,[["render",_]]);export{S as __pageData,k as default};
