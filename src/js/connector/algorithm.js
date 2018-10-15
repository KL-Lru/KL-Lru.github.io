document.addEventListener("DOMContentLoaded",function(){
  var arg = location.search.substring(1);
  $("#navigater").load("/src/html/navi.html",function(){
    $("#version").load("/version");
  });
  if (arg){
    $("#algorithm").load("/src/html/comp/" + arg + ".html", function(){
      self.Prism.highlightAll();
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, "algorithm"]);
    });
  }else{
    $("#algorithm").load("/src/html/algorithm.html", function(){
      self.Prism.highlightAll();
    });
  }
});