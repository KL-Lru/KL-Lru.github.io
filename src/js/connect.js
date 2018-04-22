function move(st){
  location.href = "/src/html/"+st+".html";
};

$(function(){
  $(".connect").on("click",function(){
    event.preventDefault();
    event.stopPropagation();
      $('document').animate(
        {opacity: '0'},
        {duration: 'slow',
        easing: 'swing',
        complete: move($(this).attr('value'))
        }
    );
    $('document').animate(
        {opacity: '1',},
        {duration: 'slow'});
  });
});

