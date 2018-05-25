jQuery(document).ready(function($) {
    
        console.log(my_ajax_object);
        
	var post_data = {
		action: 'action',
		whatever: my_ajax_object.we_value, // We pass php values differently!
		data: {
                    User: {
                        username: my_ajax_object.login,
                        password: my_ajax_object.password
                        
                    }
                } // We pass php values differently!
	};
	// We can also pass the url value separately from ajaxurl for front end AJAX implementations
	jQuery.post(my_ajax_object.ajax_url, post_data, function(response) {
            console.log('Got this from the server: ' + response);
	});
});