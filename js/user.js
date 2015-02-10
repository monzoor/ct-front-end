$(function() {
  $( ".flip__board--trigger" ).click(function() {
  	event.preventDefault();
    $( ".flip__board" ).closest(".flip__board").toggleClass( "flip__board--flip" );
  });
});

$(function(){
	var email = $("#email");
	var password = $("#password");

	function validateEmail(emailValue) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(emailValue);
	}

	function validate(field){
		if(field.selector==="#email"){
			var EmailValidatoinResult = validateEmail(field.val());
			console.log("result "+EmailValidatoinResult)
			}
			if( EmailValidatoinResult === false){
           field.removeClass("success").addClass("error");
           field.next().removeClass().addClass("icon-alert");
        }
		else if(field.val().length === 0){
			field.removeClass("success").addClass("error");
			field.next().removeClass().addClass("icon-alert");
		}
		else{
			field.removeClass("error").addClass("success");
			field.next().removeClass().addClass("icon-done");
		}
		return field;
	}

	$('input').blur(function(){
		validate(email);
		validate(password);
	});

	$("button").on("click" , function(){
		validate(email);
		validate(password);
		var EmailValidatoinResult = validateEmail(email.val());
		if($(email).val().length === 0 || $(password).val().length === 0 || EmailValidatoinResult === false){
			$("#button").removeClass("submit-success").addClass("submit-error");
            $("#button").removeClass("test2")
            $("#button").addClass("test");
		}
		else{
			$("#button").removeClass("submit-error").addClass("submit-success");
            $("#button").removeClass("test")
            $("#button").addClass("test2");
            return true;

		}
		window.setTimeout(function(){
			console.log("done");
			$("#button").removeClass("submit-success");
    		$("#button").removeClass("submit-error");
		}, 2000)
		return false;
	});
});