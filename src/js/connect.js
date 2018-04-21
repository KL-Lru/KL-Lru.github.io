$(function(){
  if(document.readyState !== "loading") {
    setTimeout(_.highlightAll, 0);
  }
  else {
    document.addEventListener('DOMContentLoaded', _.highlightAll);
  }
});

$(document).ready(function(){
  $("#navigater").load("/src/html/navi.html");
  $("#top").load("/src/html/top.html");
  $("#profile").load("/src/html/profile.html");
  $("#nlp").load("/src/html/nlp.html",function(){
    $("#nlp_top").load("/src/html/nlp/top.html");
    $("#chapter1").load("/src/html/nlp/chapter1.html");
    $("#chapter2").load("/src/html/nlp/chapter2.html");
  });
  $("#blog").load("/src/html/blog.html");
});