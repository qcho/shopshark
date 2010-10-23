$.template("mobile_list",
"<ul data-role='listview'>" +
"{{each product}}" +
"	<li>" +
"		<img src='${$value.image_url}' />" +
"		<h3><a href='product?id=${$value.id}'>${$value.name}</a></h3>" +
"		<p>$${$value.price}</p>" +
"	</li>" +
"{{/each}}" +
"</ul>"
);

var shopshark = shopshark || {
	populateBySearch : function(criteria) {
		if (criteria) {
			//$("#main_title").html("Search: <span>" + criteria + "</span>");
			//$("#main_content").load('content/loading.html');
			hci.fetch(hci.GetProductListByName(criteria, this.order, this.items_per_page, this.page), function(response) {
				shopshark.renderProducts(response);
			});
		} else {
			// TODO: show default page.
		}
	},
	renderProducts : function(response){
		// Parse XML to JSON.
		var resp = $.xml2json(response);
		
		var $content = $('[data-role=content]');
		// Add products.
		$content.empty();
		if (resp.products.size > 0) {
			$.tmpl("mobile_list", resp.products).appendTo($content);
		} else {
			$content.text("No products found.");
		}
		$('[data-role=listview]').listview();
	}
};

shopshark.populateBySearch("a");