$.template("product_thumb", 
"<div class='product' id='product_${id}'>" +
"	<h4>${name} <span></span></h4>" +
"	<div class='imgholder'>" +
"		<a href='#product=${id}'>" +
"			<img src='${image_url}' class='productimg' height='104' width='119'>" +
"		</a>" +
"	</div>" +
"	<div class='description'>" +
"		<div class='wrap'>" +
"			Sales Rank: <span>${sales_rank}</span>" +
"		</div>" +
"		<div class='buttons'>" +
"			<a href='#product=${id}' class='greybutton'>" +
"				<span class='left'></span><span class='right'></span>" +
"				+Info" +
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
"	<a id='category_${id}' href='#category=${id}'>${name}</a>" +
"	<hr>" +
"	<div class='submenu'>" +
"			<a href='#${code}'>loading...</a>" +
"	</div>" +
"</div>"
);

$.template("subcategory", 
"<a id='subcategory_${category_id}_${id}' href='#category=${category_id}&subcategory=${id}'>${name}</a>"
);

$.template("title",
"<h1 class='h1-for-tags'>${title}</h1>"
);

$.template("paginator",
"<div class='break'></div>" +
"<div id='bottombar'>" +
"	{{if prev}}" +
"		<a href='#page=${prev}' class='greybutton floatLeft'>" +
"			<span class='left'></span><span class='right'></span>" +
"			Prev" +
"		</a>" +
"	{{/if}}" +
"	{{if next}}" +
"		<a href='#page=${next}' class='greybutton floatRight'>" +
"			<span class='left'></span><span class='right'></span>" +
"			Next" +
"		</a>" +
"	{{/if}}" +
"	<div class='pagination'>" +
"		{{each pages}}" +
"			{{if $value}}" +
"				<span class='active'>${$index + 1}</span>&nbsp;" +
"    		{{else}}" +
"				<a href='#page=${$index + 1}'>${$index + 1}</a>&nbsp;" +
"    		{{/if}}" +
"		{{/each}}" +
"	</div>" +
"</div>"
);

$.template("product",
"<div id='gallery' class='centered'>" +
"</div>" +
"<div id='productdata'>" +
"	<div class='description-wrapper'>" +
"		<p>" +
"			<ul>" +
"				<li><strong>Category:</strong> ${category}</li>" +
"				<li><strong>Subcategory:</strong> ${subcategory}</li>" +
"				<li><strong>Name:</strong> ${name}</li>" +
"				<li><strong>Sales rank:</strong> ${sales_rank}</li>" +
"			{{if actors}}" +
"				<li><strong>Actors:</strong> ${actors}</li>" +
"    		{{/if}}" +
"			{{if format}}" +
"				<li><strong>Format:</strong> ${format}</li>" +
"    		{{/if}}" +
"			{{if language}}" +
"				<li><strong>Language:</strong> ${language}</li>" +
"    		{{/if}}" +
"			{{if subtitles}}" +
"				<li><strong>Subtitles:</strong> ${subtitles}</li>" +
"    		{{/if}}" +
"			{{if region}}" +
"				<li><strong>Region:</strong> ${region}</li>" +
"    		{{/if}}" +
"			{{if aspect_ration}}" +
"				<li><strong>Aspect ratio:</strong> ${aspect_ration}</li>" +
"    		{{/if}}" +
"			{{if number_discs}}" +
"				<li><strong>Number of discs:</strong> ${number_discs}</li>" +
"    		{{/if}}" +
"			{{if release_date}}" +
"				<li><strong>Release date:</strong> ${release_date}</li>" +
"    		{{/if}}" +
"			{{if run_time}}" +
"				<li><strong>Duration:</strong> ${run_time}</li>" +
"    		{{/if}}" +
"			{{if ASIN}}" +
"				<li><strong>ASIN(Amazon Standard Identification Number):</strong> ${ASIN}</li>" +
"    		{{/if}}" +
"			{{if authors}}" +
"				<li><strong>Authors:</strong> ${authors}</li>" +
"    		{{/if}}" +
"			{{if publisher}}" +
"				<li><strong>Publisher:</strong> ${publisher}</li>" +
"    		{{/if}}" +
"			{{if published_date}}" +
"				<li><strong>Published  date:</strong> ${published_date}</li>" +
"    		{{/if}}" +
"			{{if ISBN_10}}" +
"				<li><strong>ISBN 10:</strong> ${ISBN_10}</li>" +
"    		{{/if}}" +
"			{{if ISBN_13}}" +
"				<li><strong>ISBN 13:</strong> ${ISBN_13}</li>" +
"    		{{/if}}" +
"			{{if language}}" +
"				<li><strong>Language:</strong> ${language}</li>" +
"    		{{/if}}" +
"			</ul>" +
"		</p>" +
"	</div>" +
"	<div class='button-wrapper'>" +
"		<a class='greenbutton_big'>" +
"		<span class='left'></span><span class='right'></span>" +
"		Buy <span class='for'>for</span> <span class='formattedCurrency'>$${price}</span>" +
"	</a>" +
"	</div>" +
"</div>" +
"<div id='bottombar'>" +

"	<a href='#category=${category_id}' class='bluebutton'>" +
"		<span class='left'></span><span class='right'></span>" +
"		Back <span>to</span> ${category}" +
"	</a>" +
"</div>"
);

$.template("signIn",
"<div id='signIn'>" +
"	<fieldset>" +
"		<legend>Sign In</legend>" +
"		<form action='' method='post'>" +
"			<div>" +
"				<label for='username'>Username: </label>" +
"				<input id='username' name='username'>" +
"				<label for='password'>Password: </label>" +
"				<input id='password' name='password' type='password'>" +
"			</div>" +
"			<div class='centered'>" +
"				<input class='greenbutton smalltopmargin' name='submit' type='submit' value='Login'>" +
"			</div>" +
"		</form>" +
"	</fieldset>" +
"	<div class='centered smalltopmargin'>" +
"		Not Registered?" +
"		<button class='bluebutton right smalltopmargin'>Register</button>" +
"	</div>" +
"</div>"		
);

$.template("userNav",
"<div id='signIn'>" +
"	<fieldset>" +
"		<legend>User</legend>" +
"		<p>${username}</p>" +
"		<p>${name}</p>" +
"		<p>${last_login_date}</p>" +
"	</fieldset>" +
"	<div class='centered smalltopmargin'>" +
"		<button class='bluebutton right smalltopmargin' onclick='shopshark.signOut()'>Sign Out</button>" +
"	</div>" +
"</div>"		
);

var shopshark = shopshark
 || {
	language_id : "1",
	category_id : "1",
	subcategory_id : "1",
	order : "ASC",
	items_per_page : "8",
	page : "1",
	populateBySearch: function(criteria){
		if(criteria){
			$("#main_title").html("Search: <span>" + criteria + "</span>");
			$("#main_content").load('content/loading.html');
			hci.fetch(
				hci.GetProductListByName(criteria, this.order, this.items_per_page, this.page), 
				function(prodResp){
					shopshark.renderProducts(prodResp);
				}
			);
		} else {
			//TODO: show default page.
		}
	},
	populateByCategory: function(category_id){
		if(category_id){
			// activate link and set title.
			$("#categories a.active").removeClass("active");
			var link = $("#category_"+category_id);
			link.addClass("active");
			$("#main_title").html("Category <span>" + link.text() + "</span>");
			$("#main_content").load('content/loading.html');
			hci.fetch(
				hci.GetProductListByCategory(this.language_id, category_id, this.order, this.items_per_page, this.page), 
				function(prodResp){
					shopshark.renderProducts(prodResp);
				}
			);
		}
	},
	populateBySubcategory: function(category_id, subcategory_id){
		if(category_id && subcategory_id){
			$("#categories a.active").removeClass("active");
			var link = $("#subcategory_"+category_id+"_"+subcategory_id);
			link.addClass("active");
			var title = "Subcategory <span>" + $("#category_"+category_id).text() + ": " + link.text() + "</span>";
			$("#main_title").html(title);
			$("#main_content").load('content/loading.html');
			hci.fetch(
				hci.GetProductListBySubcategory(this.language_id, category_id, subcategory_id, this.order, this.items_per_page, this.page), 
				function(prodResp){
					shopshark.renderProducts(prodResp);
				}
			);
		}
	},
	renderProducts: function(prodResp){
		// Parse XML to JSON.
		var prodList = $.xml2json(prodResp);
		
		// Add products.
		$('#main_content').empty();
		if(prodList.products.size > 0){
			$.tmpl("product_thumb", prodList.products.product).appendTo("#main_content");
		} else {
			$('#main_content').text("No products found.");
		}
		
		// Add paginator.
		var page_count = Math.ceil(prodList.products.size/shopshark.items_per_page);
		var data = {pages: new Array()};
		for (i=0;i<page_count;i++){
			data.pages[i]=(i+1==shopshark.page);
		}
		if (shopshark.page != 1){
			data.prev = parseInt(shopshark.page) - 1;
		}
		if (shopshark.page != page_count){
			data.next = parseInt(shopshark.page) + 1;
		}
		$.tmpl("paginator", data).appendTo("#main_content");
		
	},
	
	populateMenu: function(handler){
		hci.fetch(
			hci.GetCategoryList(this.language_id), 
			function(catList){
				shopshark.renderCategories(catList);
				var categories = $(catList).find('category');
				categories.each(function(index){
					var category_id = $(this).attr('id');
					hci.fetch(
						hci.GetSubcategoryList(shopshark.language_id, category_id),function(subcatList){
							shopshark.renderSubcategories(subcatList, category_id);
							if(index==categories.length-1){
								handler();
							}
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
	},
	
	renderLangSelect: function(){
		hci.fetch(
				hci.GetLanguageList(),function(langList){
					$(langList).find('language').each(function(index){
						var opt_id = $(this).attr('id');
						var opt = $("<option/>");
						opt.val(opt_id);
						opt.text($(this).find('name').text());
						if (opt_id == shopshark.language_id){
							opt.attr('selected', 'selected');
						}
						$('select[name=language]').append(opt);
					});
				});
		$('select[name=language]').bind('change', function(e){
			$.cookie("language_id", e.currentTarget.value);
			window.location.reload(true);
		});
	},
	
	renderProductInfo: function(product_id){
		if(product_id){
			$("#main_content").load('content/loading.html');
			hci.fetch(
				hci.GetProduct(product_id), 
				function(prodResp){
					var resp = $.xml2json(prodResp);
					resp.product.category = $("#category_"+resp.product.category_id).text();
					resp.product.subcategory = $("#subcategory_"+resp.product.category_id+"_"+resp.product.subcategory_id).text();
		
					$("#main_title").html(resp.product.name + " <span>" +resp.product.category + ":" + resp.product.subcategory + "</span>");
					$("#main_content").empty();
					$.tmpl("product", resp.product).appendTo("#main_content");
					test = resp.product;
					if(resp.product.actors){
					$.get("youtube/?q="+escape(resp.product.name + " HD trailer")+"&lang=es&setSafeSearch=STRICT&max-results=10&v=2&fields=entry(title,media:group(yt:videoid),yt:noembed)", function(resp){
						var video = $(resp).find("entry").not('entry:has(yt\\:noembed)').first();
						var videoid = video.find('yt\\:videoid').text();
						
						var iframe = 	"	<iframe class='youtube-player' width='640' height='385' src='http://www.youtube.com/embed/" + videoid +"?autoplay=1' frameborder='0'>" +
										"		Your browser does not support iframes." +
										"	</iframe>";
						
						$("#gallery").append($(iframe));
					});
					} else {
						//GOOGLE API DOES NOT HAVE THE BOOKS for preview.
						/*
						var book = 	"	<iframe class='youtube-player' type='text/html' width='640' height='385' src='content/book.html?isbn=" + resp.product.ISBN_10 +"' frameborder='0'>" +
									"		Your browser does not support iframes." +
									"	</iframe>";
						
						0738531367
						
						$("#gallery").append($(book));
						*/
						var book = "<img src='"+resp.product.image_url+"'></img>"
						$("#gallery").append($(book));
					}
				}
			);
		}
	},
	
	signIn: function(username, password){
		hci.fetch(
				hci.SignIn(username, password),
				function(signInResp){
					var signIn = $.xml2json(signInResp);
					if(signIn.authentication){
						$.cookie("token", signIn.authentication.token);
						$.cookie("user_id", signIn.authentication.user.id);
						$.cookie("username", signIn.authentication.user.username);
						$.cookie("name", signIn.authentication.user.name);
						$.cookie("last_login_date", signIn.authentication.user.last_login_date);
						window.location.reload();
					} else {
						alert(signIn.error.message);
					}
				}
			);
		
	},
	
	signOut: function(){
		hci.fetch(
				hci.SignOut($.cookie("username"), $.cookie("token")),
				function(signOutResp){
					var signOut = $.xml2json(signOutResp);
					if(signOut.status == "ok"){
						$.cookie("token", null);
						$.cookie("user_id", null);
						$.cookie("username", null);
						$.cookie("name", null);
						$.cookie("last_login_date", null);
						window.location.reload();
					} else {
						alert(signOut.error.message);
					}
				}
			);
		
	}
	
	
};


$(document).ready(function(){
	
	//Set language from cookie
	if($.cookie("language_id") == null){
		$.cookie("language_id", "1");
	}
	shopshark.language_id = $.cookie("language_id");
	shopshark.renderLangSelect();
	
	//Menu
	shopshark.populateMenu(function(){
		// Since the event is only triggered when the hash changes, we need to trigger
		// the event now, to handle the hash the page may have loaded with.
		  $(window).trigger( 'hashchange' );
	});
	
	//Sign in.
	if($.cookie("token")){
		var data = {
			"user_id" : $.cookie("user_id"),
			"username" : $.cookie("username"),
			"name" : $.cookie("name"),
			"last_login_date" : $.cookie("last_login_date")
		};
		$.tmpl("userNav", data).appendTo("#user");
	} else {
		$.tmpl("signIn", {}).appendTo("#user");
		$('#user').find('form').bind('submit', function(e){
			var l = $.deparam($(this).serialize());
			shopshark.signIn(l.username,l.password);
			return false;
		});
	}
	
	

	//Search bar.
	$('input[name=query]').keyup(function(event){
		$.bbq.removeState(['category', 'subcategory', 'product']);
		$.bbq.pushState('search='+escape(event.currentTarget.value));
	});
	
	//Sort
	

	  $('a[href^=#]').live( 'click', function(e){

		  url = $(this).attr( 'href' ).replace( /^#/, '' );
		  if(url.indexOf("order")!=-1 || url.indexOf("page")!=-1){
			  $.bbq.pushState(url);
		  } else {
			  //2 means override.
			  $.bbq.pushState(url,2);
		  }
		  
		  
		  if (url.indexOf("order") != -1){
			  $("a.sortbutton_selected").addClass("sortbutton");
			  $("a.sortbutton_selected").removeClass("sortbutton_selected");
			  $("a[href=#"+url+"]").addClass('sortbutton_selected');
			  shopshark.order = $.bbq.getState('order');
		  }
	    
	    // And finally, prevent the default link click behavior by returning false.
	    return false;
	  });
	  
	  // Bind an event to window.onhashchange that, when the history state changes,
	  // iterates over all .bbq widgets, getting their appropriate url from the
	  // current state. If that .bbq widget's url has changed, display either our
	  // cached content or fetch new content to be displayed.
	  $(window).bind( 'hashchange', function(e) {
		  
		  if(e.getState('page')){
			  shopshark.page = e.getState('page');
		  } else {
			  shopshark.page = "1";
		  }
		  
		  //PARSE CONTENT.
		  if(e.getState('product')){
			  shopshark.renderProductInfo(e.getState('product'));
		  } else if(e.getState('search')){
			  shopshark.populateBySearch(e.getState('search'));
			  
			  //set input value if coming from url.
			  if($('input[name=query]').val() == ""){
				  $('input[name=query]').val(e.getState('search'));
			  }
		  } else if(e.getState('category')){
			  if(e.getState('subcategory')){
				  shopshark.populateBySubcategory(e.getState('category'),e.getState('subcategory'));
			  } else {
				  shopshark.populateByCategory(e.getState('category'));
			  }
		  }
	  });
	});