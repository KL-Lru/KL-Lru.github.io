document.addEventListener("DOMContentLoaded",function(){
  $("#navigater").load("/src/html/navi.html");
  $("#top").load("/src/html/top.html");
  $("#profile").load("/src/html/profile.html");
  $("#blog").load("/src/html/blog.html");
  $("#nlp").load("/src/html/nlp.html",function(){
    $("#nlp_top").load("/src/html/nlp/top.html");
    $("#chapter1").load("/src/html/nlp/chapter1.html",function(){
      self.Prism.fileHighlight();
    });
    $("#chapter2").load("/src/html/nlp/chapter2.html",function(){
      self.Prism.fileHighlight();
    });
  });
  $("#atcoder").load("/src/html/atcoder.html");
});

