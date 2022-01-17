import{_ as r,c as d,e as i,w as a,b as e,d as t,a as n,r as c,o as s}from"./app.db3d4f43.js";const w='{"title":"CodeMirror Editor","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"mode","slug":"mode"},{"level":3,"title":"text","slug":"text"},{"level":3,"title":"theme","slug":"theme"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"src/codemirror/codemirror.md","lastUpdated":1642427383537}',l={},h=e("h1",{id:"codemirror-editor",tabindex:"-1"},[t("CodeMirror Editor "),e("a",{class:"header-anchor",href:"#codemirror-editor","aria-hidden":"true"},"#")],-1),p=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-codemirror>")],-1),u=e("hpcc-preview",{previewBorder:"0px",previewHeightRatio:"0.5",style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`  <hpcc-codemirror mode="json" theme="dark" style="width:100%;height:100%">
  </hpcc-codemirror>
  <script>
    customElements.whenDefined("hpcc-codemirror").then(() => {
      document.querySelector('hpcc-codemirror').text = \`\\
{
  "aaa":123, 
  "bbb":"ddd", 
  "c":3, 
  "d":true
}\`;
    });
  <\/script>
`)])],-1),m=n("",17);function _(g,b,x,f,v,T){const o=c("ClientOnly");return s(),d("div",null,[h,p,i(o,null,{default:a(()=>[u]),_:1}),m])}var q=r(l,[["render",_]]);export{w as __pageData,q as default};
