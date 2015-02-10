$(function() {
  $( ".flip__board--trigger" ).click(function() {
  	event.preventDefault();
    $( ".flip__board" ).closest(".flip__board").toggleClass( "flip__board--flip" );
  });
});

$(function() {
    var email = $("#email");
    var name = $("#name");

    function validateEmail(emailValue) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailValue);
    }

    function validate(field) {
      if(field.selector==="#email"){
        //console.log(validateEmail(field.val()));
        if(validateEmail(field.val())===false){
           field.removeClass().addClass("error");
           field.next().removeClass().addClass("icon-alert");
        }
        
      }
        else if (field.val().length === 0) {
            field.removeClass().addClass("error");
            field.next().removeClass().addClass("icon-alert");
        } 
      else {
            field.removeClass().addClass("success");
            field.next().removeClass().addClass("icon-done");
        }
        return field;
    }

    $('input').blur(function() {
        validate($(this));
    });

    $("#button").on("click", function() {
       validate(email);
       validate(name);
      console.log(email.val());
       var EmailValidation = validateEmail(email.val()) ;
	        console.log(EmailValidation);
        if ($(email).val().length === 0 || $(name).val().length === 0){
            $("#button").removeClass("submit-success").addClass("submit-error");
        }
        else {
            $("#button").removeClass("submit-error").addClass("submit-success");
        }
        window.setTimeout(function() {
            $("#button").removeClass("submit-success");
            $("#button").removeClass("submit-error");
        }, 2000)
        return false;
    });

});