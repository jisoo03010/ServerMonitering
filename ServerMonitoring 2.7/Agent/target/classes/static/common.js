/**
 * 
 */
 
 let updateData = {
	ServerName: $('input[name="ServerName"]').val()
	, ServerIP: $('input[name="ServerIP"]').val()
	, ServerPort: $('input[name="ServerPort"]').val()
	, ServerIN: $('input[name="ServerIN"]').val()
	, ServerPw: $('input[name="ServerPw"]').val()
	, serverName2: localStorage.getItem('key')
};

$.ajax({
	url: '/UpdateForm',
	type: "POST",
	async: false,
	dataType: "json",
	data: updateData,
	success: function() {
		$('#' + localStorage.getItem('key')).text($("#inputText2").val());
		$('#' + localStorage.getItem('key')).attr('id', $("#inputText2").val());
		localStorage.setItem('key', $("#inputText2").val());
	}
});