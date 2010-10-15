$.template("product_thumb", 
"<div class='product' id='product_${id}'>" +
"	<h4>${name} <span></span></h4>" +
"	<div class='imgholder'>" +
"		<a href='item/'>" +
"			<img src='${image_url}' class='productimg' height='104' width='119'>" +
"		</a>" +
"	</div>" +
"	<div class='description'>" +
"		<div class='wrap'>" +
"			Sales Rank: <span>${sales_rank}</span>" +
"		</div>" +
"		<div class='buttons'>" +
"			<a href='http://examplestore.enstore.com/item/a-clock' class='greybutton'>" +
"				<span class='left'></span><span class='right'></span>" +
"				Info" +
"			</a>" +
"			<a class='greenbutton' onclick='enstore.cart.addItem('256d6b9dd3dd46d7ab65aa45e3db7486')'>" +
"				<span class='left'></span><span class='right'></span>" +
"				<span class='formattedCurrency'>$${price}</span>" +
"			</a>" +
"			<span class='in_cart'>" +
"				<span class='totalincart'>1</span> in<br>cart" +
"			</span>" +
"		</div>" +
"	</div>" +
"</div>"
);

var shopshark = shopshark
 || {
	lang_id : "1",
	category_id : "1",
	order : "DESC",
	items_per_page : "8",
	page : "1",
	product_count : 0,
	populateProducts: function(){
		hci.fetch(
			hci.GetProductListByCategory(this.lang_id, this.category_id, this.order, this.items_per_page, this.page), 
			function(prodResp){
				shopshark.renderProducts(prodResp);
			}
		);
	},
	populateByQuery: function(criteria){
		if("" != criteria){
			hci.fetch(
				hci.GetProductListByName(criteria, this.order, this.items_per_page, this.page), 
				function(prodResp){
					shopshark.renderProducts(prodResp);
				}
			);
		} else {
			shopshark.populateProducts();
		}
		
	},
	renderProducts: function(prodResp){
		var prodList = $.xml2json(prodResp);
		$('.product').remove();
		if(prodList.products.size > 0){
			$.tmpl("product_thumb", prodList.products.product).prependTo( "#main" );
		}
	}
	
	
};




function JRapidTutorial(first, last, frame) {
	var step = first;
	
	var loadStep = function(index){
		if ( index < first || index > last ) {
			return -1;
		}
		step = index;
		$(frame).load('steps/'+ index +'.html', function(responseText, textStatus, XMLHttpRequest) {
			SyntaxHighlighter.highlight();
		});
		
		
		return step;
	};
	
	this.goStep = function(index){
		loadStep(index);
	};
	
	this.prevStep = function(){
		loadStep(step - 1);
	};
	
	this.nextStep = function(){
		loadStep(step + 1);
	};
	
	this.goFirst = function(){
		loadStep(first);
	};
	
	this.goLast = function(){
		loadStep(last);
	};
}
//tut = new JRapidTutorial(0, 9, '#tutorial_frame');
//tut.goFirst();






$(document).ready(function(){
	
	//Set defaults from url.
	
	
	//Main products.
	shopshark.populateProducts();

	//Search bar.
	$('input[name=query]').keyup(function(event){
		shopshark.populateByQuery(event.currentTarget.value);
	});
});