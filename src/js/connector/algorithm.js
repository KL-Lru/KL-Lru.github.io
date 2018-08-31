document.addEventListener("DOMContentLoaded",function(){
  var arg = location.search.substring(1);
  $("#navigater").load("/src/html/navi.html",function(){
    $("#version").load("/version");
  });
  $("#algorithm").load("/src/html/comp/" + arg + ".html", function(){
    self.Prism.highlightAll();
  });
});