$(document).ready(function () {

  	$('form.formSubscribe').submit(function() {
	var inputString = $("#email-subscribe").val();
	//alert(inputString);
	//console.log(inputString);
	//$("#miModal").modal("show");

	$.ajax({
		url: "http://127.0.0.1:5000/api/mail_user/create",
		type: "Post",
		data: JSON.stringify({
			mail: inputString,
		}),
		contentType: 'application/json; charset=utf-8',
		success: function (data) {
		$("#miModal").modal("show");
		//alert('Registro aregado exitosamente !!!');
		},
		failure: function (data)
		{
		alert(data.responseText);
		},
		error: function (data)
		{
		alert(data.responseText);
		}
		});
		return false;
	});
});