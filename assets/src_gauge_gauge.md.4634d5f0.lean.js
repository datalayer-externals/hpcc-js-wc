import{_ as a,c as i,e as r,w as l,b as e,d as t,a as n,r as c,o as s}from"./app.db3d4f43.js";const w='{"title":"Gauge","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"colorDomain","slug":"colordomain"},{"level":3,"title":"colorRange","slug":"colorrange"},{"level":3,"title":"emptyColor","slug":"emptycolor"},{"level":3,"title":"showTick","slug":"showtick"},{"level":3,"title":"tickColor","slug":"tickcolor"},{"level":3,"title":"tickValue","slug":"tickvalue"},{"level":3,"title":"tickValueDescription","slug":"tickvaluedescription"},{"level":3,"title":"title","slug":"title"},{"level":3,"title":"titleDescription","slug":"titledescription"},{"level":3,"title":"tooltip","slug":"tooltip"},{"level":3,"title":"value","slug":"value"},{"level":3,"title":"valueDescription","slug":"valuedescription"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"src/gauge/gauge.md","lastUpdated":1642408018438}',d={},p=e("h1",{id:"gauge",tabindex:"-1"},[t("Gauge "),e("a",{class:"header-anchor",href:"#gauge","aria-hidden":"true"},"#")],-1),u=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-gauge>")],-1),h=e("hpcc-preview",{previewBorder:"0px",previewHeightRatio:"0.33",style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`<hpcc-splitpanel style="width:100%;height:100%">
  <hpcc-gauge showTick title="G-01" titleDescription="Gauge 01" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge title="G-02" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge showTick title="G-03" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge title="G-04" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
</hpcc-splitpanel>
<script>
    customElements.whenDefined("hpcc-splitpanel").then(() => {
      const splitPanel = document.querySelector("hpcc-splitpanel");
      for (const gauge of splitPanel.querySelectorAll("hpcc-gauge")) {
          gauge.value = Math.random();
          gauge.tickValue = Math.random();
      }
    });
<\/script>
`)])],-1),g=n("",51);function f(v,m,q,y,_,b){const o=c("ClientOnly");return s(),i("div",null,[p,u,r(o,null,{default:l(()=>[h]),_:1}),g])}var T=a(d,[["render",f]]);export{w as __pageData,T as default};
