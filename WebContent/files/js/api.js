ApiWrapper = new function api() {
	this.baseUrl = "service/Common.groovy?method=";

	this.getLanguageList = function() {
		$.ajax( {
			url : this.baseUrl + 'GetLanguageList',
			dataType : "xml",
			success : function(xml) {
				$(xml).find('language').each(
						function() {
							var id_text = $(this).attr('id');
							var code_text = $(this).find('code').text();
							var name_text = $(this).find('name').text();

							$('<div></div>').html(
									"code: " + code_text + ". name: "
											+ name_text + ' (' + id_text + ')')
									.appendTo('#content');
						}); // close each(

			}
		});
	};
};

ApiWrapper.getLanguageList();
var intel = asda;