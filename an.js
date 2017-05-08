$(document).ready(function () {


  $('#invite_can').on('click', function () {

    $('#invite_thing').animate({height:"toggle"},2500)
    ;
})




$('#free_shop_code').mouseover({a:12, b:"abc"}, function(eventObject){

  $('.over').hide("slow");  /*hide*/
  $('#over_code').hide("slow");

  $('.out').show("slow");  /*show*/
  $('#out_code').show("slow");

});

$('#free_shop_code').mouseleave({a:12, b:"abc"}, function(eventObject){

  $('.out').hide("slow");   /*hide*/
  $('#out_code').hide("slow");

  $('.over').show("slow");  /*show*/
  $('#over_code').show("slow");

})

})
