document.addEventListener("DOMContentLoaded",function(){
  $("#navigater").load("/src/html/navi.html",function(){
    $("#version").load("/version");
  });
  $("#top").load("/src/html/top.html");
  $('body').bootstrapMaterialDesign();
});