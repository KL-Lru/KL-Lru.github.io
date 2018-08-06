document.addEventListener("DOMContentLoaded",function(){
  $("#navigater").load("/src/html/navi.html",function(){
    $("#version").load("/version");
  });
  $("#profile").load("/src/html/profile.html");
});