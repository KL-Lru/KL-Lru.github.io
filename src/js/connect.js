document.addEventListener("DOMContentLoaded",function(){
  $("#navigater").load("/src/html/navi.html",function(){
    $("#version").load("/version");
  });
  $("#top").load("/src/html/top.html");
  $("#profile").load("/src/html/profile.html");
  $("#blog").load("/src/html/blog.html",function(){
    self.Prism.highlightAll();
  });
  $("#nlp").load("/src/html/nlp.html",function(){
    $("#nlp_top").load("/src/html/nlp/top.html");
    $("#chapter1").load("/src/html/nlp/chapter1.html",function(){
      self.Prism.fileHighlight();
    });
    $("#chapter2").load("/src/html/nlp/chapter2.html",function(){
      self.Prism.fileHighlight();
    });
    $("#chapter3").load("/src/html/nlp/chapter3.html",function(){
      self.Prism.fileHighlight();
    });
    $("#chapter4").load("/src/html/nlp/chapter4.html",function(){
      self.Prism.fileHighlight();
    });
    $("#chapter5").load("/src/html/nlp/chapter5.html",function(){
      self.Prism.fileHighlight();
    });
    $('body').bootstrapMaterialDesign();
  });
  $("#atcoder").load("/src/html/atcoder.html");
});
