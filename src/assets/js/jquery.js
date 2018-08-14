import $ from 'jquery'


$(document).ready(function() {
  $("button").click(function() {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});


function scrollToAnchor(aid){
$('html,body').animate({scrollTop: aid.offset().top},'slow');

}

var i = 1; $(document).keydown(function (event) {

if (event.keyCode == 38) {
        i--;
        scrollToAnchor($("#Section"+i+""));
 } else if (event.keyCode == 40) {
        i++;
        event.preventDefault();
        scrollToAnchor($("#Section"+i+""));
    }
});


// color changes months

$(window).scroll(function() {
   var hT = $('#octlabel').offset().top,
       hH = $('#octlabel').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $('#octtext').addClass('view')
   } else {
      $('#octtext').removeClass('view')
   }
});
$(window).scroll(function() {
   var hT = $('#scroll-to2').offset().top,
       hH = $('#scroll-to2').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $('#thisthing2').addClass('view')
   } else {
      $('#thisthing2').removeClass('view')
   }
});
$(window).scroll(function() {
   var hT = $('#scroll-to3').offset().top,
       hH = $('#scroll-to3').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $('#thisthing3').addClass('view')
   } else {
      $('#thisthing3').removeClass('view')
   }
});

// nav color changes
$(window).scroll(function() {
   var hT = $('#octlabel').offset().top,
       hH = $('#octlabel').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $('#oct').addClass('view')
   } else {
      $('#oct').removeClass('view')
   }
});
$(window).scroll(function() {
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $('#playoffs').addClass('view')
   } else {
      $('#playoffs').removeClass('view')
   }
});
$(window).scroll(function() {
   var hT = $('#scroll-to2').offset().top,
       hH = $('#scroll-to2').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $('#offseason').addClass('view')
   } else {
      $('#offseason').removeClass('view')
   }
});
