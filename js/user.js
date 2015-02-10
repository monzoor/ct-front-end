$(function() {
  $( ".flip__board--trigger" ).click(function() {
  	event.preventDefault();
    $( ".flip__board" ).closest(".flip__board").toggleClass( "flip__board--flip" );
  });
});

