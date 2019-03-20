var string = "hello";
var number = 5;
var boolean = true;

var circle = $(".dot"); //contains element

//circle.css({"background": "blue"}) select element

$(document).on('mousemove', function(event){
   var pageX = event.pageX;
   var pageY = event.pageY;
   console.log(pageX + ":" + pageY);
  $(".dot").css({
    "opacity": (pageX/innerWidth),
    "top": pageY+"px",
    "right": pageX+"px",
    });
   $("p").css({
    "bottom": pageY+"px",
    "left": pageX+"px",
  }); 
});