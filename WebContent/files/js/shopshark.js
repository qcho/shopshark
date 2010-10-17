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

$.template("category",
"<div id='category_${id}_div' class='supermenu'>" +
"	<a id='category_${id}' href='#${code}' onclick='shopshark.populateByCategory(${id})'>${name}</a>" +
"	<hr>" +
"	<div class='submenu'>" +
"			<a href='#'>loading...</a>" +
"	</div>" +
"</div>"
);

$.template("subcategory", 
"<a id='subcategory_${category_id}_${id}' href='#${code}' onclick='shopshark.populateBySubcategory(${category_id}, ${id})'>${name}</a>"
);

$.template("title",
"<h1 class='h1-for-tags'>${title}</h1>"
);

$.template("paginator",
"<div class='break'></div>" +
"<div id='bottombar'>" +
"	{{if prev}}" +
"		<a href='#' onclick='${prev}' class='greybutton floatLeft'>" +
"			<span class='left'></span><span class='right'></span>" +
"			Prev" +
"		</a>" +
"	{{/if}}" +
"	{{if next}}" +
"		<a href='#' onclick='${next}' class='greybutton floatRight'>" +
"			<span class='left'></span><span class='right'></span>" +
"			Next" +
"		</a>" +
"	{{/if}}" +
"	<div class='pagination'>" +
"		{{each pages}}" +
"			{{if $value}}" +
"				<span class='active'>${$index + 1}</span>&nbsp;" +
"    		{{else}}" +
"				<a href='#' onclick='shopshark.page=${$index + 1};${method}'>${$index + 1}</a>&nbsp;" +
"    		{{/if}}" +
"		{{/each}}" +
"	</div>" +
"</div>"
);

var shopshark = shopshark
 || {
	lang_id : "1",
	category_id : "1",
	subcategory_id : "1",
	order : "DESC",
	items_per_page : "8",
	page : "1",
	product_size : "0",
	populateByQuery: function(criteria){
		if(criteria){
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
	populateByCategory: function(category_id){
		if(category_id){
			hci.fetch(
				hci.GetProductListByCategory(this.lang_id, category_id, this.order, this.items_per_page, this.page), 
				function(prodResp){
					$("#categories a").removeClass("active");
					var link = $("#category_"+category_id);
					link.addClass("active");
					$('#main h1.h1-for-tags').text("Category " + link.text());
					shopshark.renderProducts(prodResp);
					
//					shopshark.product_count = $(prodResp).find("products").attr("size");
//					var data;
//					for (i = 1; i > (shopshark.product_count / shopshark.items_per_page); i++){
//						data.pages[i] = {};
//					}
					var page_count = Math.ceil(shopshark.product_size/shopshark.items_per_page);
					var data = {method: "shopshark.populateByCategory("+category_id+");",
								pages: new Array()};
					for (i=0;i<page_count;i++){
						data.pages[i]=(i+1==shopshark.page);
					}
					if (shopshark.page != 1){
						data.prev = "shopshark.page = " + (shopshark.page - 1) + ";" + data.method;
					}
					if (shopshark.page != page_count){
						data.next = "shopshark.page = " + (shopshark.page + 1) + ";" + data.method;
					}
					$.tmpl("paginator", data).appendTo("#main_content");
				}
			);
		}
	},
	populateBySubcategory: function(category_id, subcategory_id){
		if(category_id && subcategory_id){
			hci.fetch(
				hci.GetSubcategoryList(this.lang_id, category_id),
				hci.GetProductListBySubcategory(this.lang_id, category_id, subcategory_id, this.order, this.items_per_page, this.page), 
				function(subcatList, prodResp){
					$("#categories a").removeClass("active");
					var link = $("#subcategory_"+category_id+"_"+subcategory_id);
					link.addClass("active");
					$('#main h1.h1-for-tags').text("Subcategory " + $("#category_"+category_id).text() + ": " + link.text());
					shopshark.renderProducts(prodResp);
				}
			);
		}
	},
	renderProducts: function(prodResp){
		var prodList = $.xml2json(prodResp);
		$('#main_content').empty();
		this.product_size = prodList.products.size;
		if(this.product_size > 0){
			$.tmpl("product_thumb", prodList.products.product).appendTo("#main_content");
		} else {
			$('#main_content').prepend("No products found.");
		}
		
	},
	
	populateMenu: function(){
		hci.fetch(
			hci.GetCategoryList(this.lang_id), 
			function(catList){
				shopshark.renderCategories(catList);
				$(catList).find('category').each(function(index){
					var category_id = $(this).attr('id');
					hci.fetch(
						hci.GetSubcategoryList(shopshark.lang_id, category_id),function(subcatList){
							shopshark.renderSubcategories(subcatList, category_id);
						});
				});
			}
		);
	},
	
	renderCategories: function(catList){
		var catList = $.xml2json(catList);
		$('#categories').empty();
		$.tmpl("category", catList.categories.category).prependTo("#categories");
	},
	
	renderSubcategories: function(subcatList, catId){
		var subcatList = $.xml2json(subcatList);
		$("#category_" + catId +"_div .submenu").empty();
		$.tmpl("subcategory", subcatList.subcategories.subcategory).prependTo("#category_" + catId +"_div .submenu");
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
	
	//Menu
	shopshark.populateMenu();
	
	
	//Main products.
	shopshark.populateByCategory("1");

	//Search bar.
	$('input[name=query]').keyup(function(event){
		shopshark.populateByQuery(event.currentTarget.value);
	});
});