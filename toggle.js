$('#toggle_message').click(function(){
	var value = $('#toggle_message').attr('value');
	$('#message').toggle('fast');
	if(value=='hide'){
		$('#toggle_message').attr('value','show');
	}else if(value=='show'){
		$('#toggle_message').attr('value',hide');
	}
});

