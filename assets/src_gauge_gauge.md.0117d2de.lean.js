import{_ as a,c as i,e as r,w as l,b as e,d as t,a as n,r as c,o as s}from"./app.5f4b5f7f.js";const w='{"title":"Gauge","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"color_domain","slug":"color-domain"},{"level":3,"title":"color_range","slug":"color-range"},{"level":3,"title":"empty_color","slug":"empty-color"},{"level":3,"title":"show_tick","slug":"show-tick"},{"level":3,"title":"tick_color","slug":"tick-color"},{"level":3,"title":"tick_value_description","slug":"tick-value-description"},{"level":3,"title":"tick_value","slug":"tick-value"},{"level":3,"title":"title_description","slug":"title-description"},{"level":3,"title":"title","slug":"title"},{"level":3,"title":"tooltip","slug":"tooltip"},{"level":3,"title":"value_description","slug":"value-description"},{"level":3,"title":"value","slug":"value"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"src/gauge/gauge.md","lastUpdated":1642713967499}',d={},p=e("h1",{id:"gauge",tabindex:"-1"},[t("Gauge "),e("a",{class:"header-anchor",href:"#gauge","aria-hidden":"true"},"#")],-1),u=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-gauge>")],-1),h=e("hpcc-preview",{preview_border:"0px",preview_height_ratio:"0.33",style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`<hpcc-splitpanel style="width:100%;height:100%">
  <hpcc-gauge show_tick title="G-01" title_description="Gauge 01" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge title="G-02" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge show_tick title="G-03" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
  <hpcc-gauge title="G-04" style="width:100%;min-width:48px;height:100%">
  </hpcc-gauge>
</hpcc-splitpanel>
<script>
    for (const gauge of document.querySelectorAll("hpcc-gauge")) {
        gauge.value = Math.random();
        gauge.tick_value = Math.random();
    }
<\/script>
`)])],-1),g=n("",51);function v(_,f,m,q,y,b){const o=c("ClientOnly");return s(),i("div",null,[p,u,r(o,null,{default:l(()=>[h]),_:1}),g])}var x=a(d,[["render",v]]);export{w as __pageData,x as default};
