import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{G as d,b as i,A as a,I as n,g as e,f as t,K as l,o as c}from"./vendor.64eac49d.js";const y='{"title":"CodeMirror Editor","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"height","slug":"height"},{"level":3,"title":"width","slug":"width"},{"level":3,"title":"mode","slug":"mode"},{"level":3,"title":"text","slug":"text"},{"level":3,"title":"theme","slug":"theme"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/codemirror.md","lastUpdated":1639814527783}',h={},s=e("h1",{id:"codemirror-editor",tabindex:"-1"},[t("CodeMirror Editor "),e("a",{class:"header-anchor",href:"#codemirror-editor","aria-hidden":"true"},"#")],-1),p=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-codemirror>")],-1),u=e("hpcc-preview",{width:"100%",height:"404px"},[e("pre",null,[e("code",null,`  <hpcc-codemirror mode="json" theme="light" width="100%" height="400px"></hpcc-codemirror>
  <script>
      document.querySelector('hpcc-codemirror').text = \`\\
{
  "aaa":123, 
  "bbb":"ddd", 
  "c":3, 
  "d":true
}\`;
  <\/script>
`)])],-1),g=l('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See <a href="./../guide/getting-started.html">Getting Started</a> for details on how to include @hpcc-js/web-components in your application</p></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><p>HPCCCodemirrorElement HPCCResizeElement HPCCElement</p><h3 id="height" tabindex="-1"><code>height</code> <a class="header-anchor" href="#height" aria-hidden="true">#</a></h3><p><i>The element height</i></p><p><strong>Type:</strong> <code>number | string</code></p><p><strong>Default Value:</strong></p><h3 id="width" tabindex="-1"><code>width</code> <a class="header-anchor" href="#width" aria-hidden="true">#</a></h3><p><i>The element width</i></p><p><strong>Type:</strong> <code>number | string</code></p><p><strong>Default Value:</strong></p><h3 id="mode" tabindex="-1"><code>mode</code> <a class="header-anchor" href="#mode" aria-hidden="true">#</a></h3><p><i>Text to be displayed in the editor</i></p><p><strong>Type:</strong> <code>&quot;html&quot; | &quot;json&quot;</code></p><ul><li><p><code>html</code>: HTML document</p></li><li><p><code>JSON</code>: JSON document</p></li></ul><p><strong>Default Value:</strong> html</p><h3 id="text" tabindex="-1"><code>text</code> <a class="header-anchor" href="#text" aria-hidden="true">#</a></h3><p><i>Text to be displayed in the editor</i></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong></p><h3 id="theme" tabindex="-1"><code>theme</code> <a class="header-anchor" href="#theme" aria-hidden="true">#</a></h3><p><i>Text to be displayed in the editor</i></p><p><strong>Type:</strong> <code>&quot;light&quot; | &quot;dark&quot;</code></p><ul><li><p><code>light</code>: Light theme</p></li><li><p><code>dark</code>: Dark theme</p></li></ul><p><strong>Default Value:</strong> light</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2>',26);function m(_,b,f,x,v,T){const o=d("ClientOnly");return c(),i("div",null,[s,p,a(o,null,{default:n(()=>[u]),_:1}),g])}var V=r(h,[["render",m]]);export{y as __pageData,V as default};