$(document).ready(function(){
  $("#navigater").load("/src/html/navi.html");
  $("#top").load("/src/html/top.html");
  $("#profile").load("/src/html/profile.html");
  $("#nlp").load("/src/html/nlp.html",function(){
    $("#nlp_top").load("/src/html/nlp/top.html");
    $("#chapter1").load("/src/html/nlp/chapter1.html");
    $("#chapter2").load("/src/html/nlp/chapter2.html",function(){
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/src/js/prism.js';
    });
  });
});