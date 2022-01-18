import{_ as o,c as i,e as a,w as r,b as e,d as s,a as n,r as l,o as c}from"./app.db3d4f43.js";const S='{"title":"Pie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"columns","slug":"columns"},{"level":3,"title":"data","slug":"data"},{"level":3,"title":"inner_radius","slug":"inner-radius"},{"level":3,"title":"label_height","slug":"label-height"},{"level":3,"title":"min_outer_radius","slug":"min-outer-radius"},{"level":3,"title":"series_percentage_format","slug":"series-percentage-format"},{"level":3,"title":"series_value_format","slug":"series-value-format"},{"level":3,"title":"show_labels","slug":"show-labels"},{"level":3,"title":"show_series_percentage","slug":"show-series-percentage"},{"level":3,"title":"show_series_value","slug":"show-series-value"},{"level":3,"title":"start_angle","slug":"start-angle"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"More Examples","slug":"more-examples"},{"level":3,"title":"Start Angle","slug":"start-angle-1"}],"relativePath":"src/pie/pie.md","lastUpdated":1642521808754}',h={},d=e("h1",{id:"pie",tabindex:"-1"},[s("Pie "),e("a",{class:"header-anchor",href:"#pie","aria-hidden":"true"},"#")],-1),p=e("p",null,[e("strong",null,"tag"),s(": "),e("code",null,"<hpcc-pie>")],-1),u=e("hpcc-preview",{preview_border:"0px",style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`<hpcc-splitpanel style="width:100%;height:100%">
  <hpcc-pie style="width:100%;min-width:48px;height:100%">
  </hpcc-pie>
  <hpcc-pie inner_radius=80 style="width:100%;min-width:48px;height:100%">
  </hpcc-pie>
</hpcc-splitpanel>
<script>
  for (const pie of document.querySelectorAll("hpcc-pie")) {
    pie.columns = ["Subject", "Score"];
    pie.data = [
      ["Math", 88],
      ["English", 72],
      ["Science", 60],
      ["History", 50],
      ["Geography", 40],
      ["Biology", 30],
      ["Physics", 20],
      ["Chemistry", 10]
    ];
  }
<\/script>
`)])],-1),g=n("",52),f=e("hpcc-preview",{preview_border:"0px",style:{width:"100%",height:"400px"}},[e("pre",null,[e("code",null,`<hpcc-splitpanel style="width:100%;height:100%">
  <hpcc-pie style="width:100%;min-width:48px;height:100%">
  </hpcc-pie>
  <hpcc-pie inner_radius=80 style="width:100%;min-width:48px;height:100%">
  </hpcc-pie>
</hpcc-splitpanel>
<script>
  for (const pie of document.querySelectorAll("hpcc-pie")) {
    pie.columns = ["Subject", "Score"];
    pie.data = [
      ["Math", 88],
      ["English", 72],
      ["Science", 60],
      ["History", 50],
      ["Geography", 40],
      ["Biology", 30],
      ["Physics", 20],
      ["Chemistry", 10]
    ];
  }
  let i = 0;
  setInterval(()=>{
    for (const pie of document.querySelectorAll("hpcc-pie")) {
      pie.setAttribute("start_angle", i);
      ++i;
    }
  }, 150)
<\/script>
`)])],-1);function m(_,b,v,w,y,x){const t=l("ClientOnly");return c(),i("div",null,[d,p,a(t,null,{default:r(()=>[u]),_:1}),g,a(t,null,{default:r(()=>[f]),_:1})])}var V=o(h,[["render",m]]);export{S as __pageData,V as default};
