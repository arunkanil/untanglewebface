
jQuery(document).ready(function() {

	$('#contactform').submit(function() {

		var action = $(this).attr('action');
		var values = $(this).serialize();

		$('#submit').attr('disabled', 'disabled');

		$("#message").slideUp(0, function() {


			$.post(action, values, function(data) {
				$('#message').html(data);
				$('#message').slideDown('slow');
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform')[0].reset();

			});

		});

		return false;

	});

});

//////////////////////////////////////

function validatePhone(txtPhone) {

		var a = document.getElementById(txtPhone).value;
		var filter = /^[0-9-+]+$/;

		if (filter.test(a)) {
				return true;
		}else {
				return false;
		}
}

function validateEmail(email) {
    var x = email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }else{
    	return true
    }
}

$(document).ready(function() {

	$('#phone_no').keyup(function(e) {
		 if (!validatePhone("phone_no")) {
			 $('#phone_no').val("")
		 		return false;
			}else {
				return true;
		}
	 })

$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var job = $("#job").val();
var phone_no = $("#phone_no").val();
var cname = $("#cname").val();
var website = $("#website").val();
var requirement = $("#requirement").val();
var budget = $("#budget").val();
var comments = $("#comments").val();
var requirement = $("#requirement").val();
var budget = $("#budget").val();
//var contact = $("#contact").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '') {
	$("#errmsg").text("Please enter your 'Name'")
	$("#name").addClass('err')
}
else if (email == '') {
	$("#name").removeClass('err')
	$("#email").addClass('err')
	$("#errmsg").text("Please enter your 'Email Address'")
}
else if (email!='' && !validateEmail(email)) {
	$("#email").addClass('err')
	$("#errmsg").text("Please enter valid Email")
}

else if (phone_no == '') {
	$("#email").removeClass('err')
	$("#errmsg").text("Please enter your 'Phone Number'")
	$("#phone_no").addClass('err')
}


else if (phone_no != '' && !validatePhone("phone_no")) {
	$("#email").removeClass('err')
	$("#errmsg").text("Please enter a valid 'Phone Number'")
	$("#phone_no").addClass('err')
}

else if (requirement == null) {
	$("#phone_no").removeClass('err')
	$("#errmsg").text("Please select your 'Requirement'")
	$("#req-wrap .multiselect").addClass('err-dd')
}

else if (budget == "") {
	$("#req-wrap .multiselect").removeClass('err-dd')
	$("#errmsg").text("Please select your 'Budget'")
	$("#budg-wrap p.SelectBox").addClass('err-dd')
}

else {

$("#name").removeClass('err')
	$("#email").removeClass('err')
	$("#comments").removeClass('err')
	$("#req-wrap .multiselect").removeClass('err-dd')
	$("#budg-wrap p.SelectBox").removeClass('err-dd')
	$("#errmsg").text("")


$("#contactform")[0].reset(); // To reset form fields on success.
$(".contactForm").hide()
$("#msg").fadeIn(4000)

// Returns successful data submission message when the entered information is stored in database.
$.post("contact_submit.php", {
name: name,
email: email,
job: job,
phone_no: phone_no,
cname: cname,
website: website,
requirement: requirement,
budget: budget,
comments: comments
});
}
});
});
