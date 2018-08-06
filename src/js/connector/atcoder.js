document.addEventListener("DOMContentLoaded",function(){
  $("#navigater").load("/src/html/navi.html",function(){
    $("#version").load("/version");
  });
  $("#atcoder").load("/src/html/atcoder.html");
  $('body').bootstrapMaterialDesign();
});