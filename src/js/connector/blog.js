document.addEventListener("DOMContentLoaded",function(){
  var arg = location.search.substring(1);
  $("#navigater").load("/src/html/navi.html",function(){
    $("#version").load("/version");
  });
  if (arg){
    $("#blog").load("/src/html/blog/" + arg + ".html", function(){
      self.Prism.highlightAll();
    });
  }else{
    $("#blog").load("/src/html/blog.html",function(){
      self.Prism.highlightAll();
    });
  }
});