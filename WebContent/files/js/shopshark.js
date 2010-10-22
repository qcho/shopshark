/**
 * SHOPSHARK FUNCTIONALITY
 */

var shopshark = shopshark || {
	language_id : "1",
	category_id : "1",
	subcategory_id : "1",
	order : "ASC",
	items_per_page : "8",
	page : "1",

	formatNumber : function(myNum, numOfDec) {
		var decimal = 1;
		for (i = 1; i <= numOfDec; i++) {
			decimal = decimal * 10;
		}
		;
		var formatedNumber = (Math.round(myNum * decimal) / decimal).toFixed(numOfDec);
		return formatedNumber;
	},

	populateBySearch : function(criteria) {
		if (criteria) {
			$("#main_title").html(locale.web.l_search_results + ": <span>" + criteria + "</span>");
			$("#main_content").load('content/loading.html');
			hci.fetch(hci.GetProductListByName(criteria, this.order, this.items_per_page, this.page), function(prodResp) {
				shopshark.renderProducts(prodResp);
			});
		} else {
			// TODO: show default page.
		}
	},
	populateByCategory : function(category_id) {
		if (category_id) {
			// activate link and set title.
			$("#categories a.active").removeClass("active");
			var link = $("#category_" + category_id);
			link.addClass("active");
			$("#main_title").html(locale.web.l_category + ": <span>" + link.text() + "</span>");
			$("#main_content").load('content/loading.html');
			hci.fetch(hci.GetProductListByCategory(this.language_id, category_id, this.order, this.items_per_page, this.page), function(prodResp) {
				shopshark.renderProducts(prodResp);
			});
		}
	},
	populateBySubcategory : function(category_id, subcategory_id) {
		if (category_id && subcategory_id) {
			$("#categories a.active").removeClass("active");
			var link = $("#subcategory_" + category_id + "_" + subcategory_id);
			link.addClass("active");
			var title = locale.web.l_subcategory + " <span>" + $("#category_" + category_id).text() + ": " + link.text() + "</span>";
			$("#main_title").html(title);
			$("#main_content").load('content/loading.html');
			hci.fetch(hci.GetProductListBySubcategory(this.language_id, category_id, subcategory_id, this.order, this.items_per_page, this.page), function(prodResp) {
				shopshark.renderProducts(prodResp);
			});
		}
	},

	renderProducts : function(prodResp) {
		// Parse XML to JSON.
		var prodList = $.xml2json(prodResp);

		// Add products.
		$('#main_content').empty();
		if (prodList.products.size > 0) {
			prodList.products.loc = locale.template.product_thumb;
			
			if (prodList.products.product && !$.isArray(prodList.products.product)) {
				// make it array
				prodList.products.product = [ prodList.products.product ];
			}
			
			$.tmpl("product_thumb", prodList.products).appendTo("#main_content");

			// Add paginator.
			var page_count = Math.ceil(prodList.products.size / shopshark.items_per_page);
			var data = {
				pages : new Array()
			};
			for (i = 0; i < page_count; i++) {
				data.pages[i] = (i + 1 == shopshark.page);
			}
			if (shopshark.page != 1) {
				data.prev = parseInt(shopshark.page) - 1;
			}
			if (shopshark.page != page_count) {
				data.next = parseInt(shopshark.page) + 1;
			}
			data.loc = locale.template.paginator;
			$.tmpl("paginator", data).appendTo("#main_content");
		} else {
			$('#main_content').text("No products found.");
		}
	},

	renderUserPanel : function() {
		var username = $.cookie('username');
		var token = $.cookie('token');
		var lang_id = $.cookie('language_id');
		
		$("#main_title").html(locale.web.l_user_panel);
		
		hci.fetch(hci.GetAddressList(username, token), hci.GetCountryList(lang_id), hci.GetAccountPreferences(username, token), function(addList, CountryList, Account) {
			console.info('pepe');
			var jAddList = $.xml2json(addList);
			var jCountryList = $.xml2json(CountryList);
			var jAccount = $.xml2json(Account);
			
			jAddList.loc = locale.template.address_form;
			jAddList.country_list = jCountryList.countries.country;
			
			$('#main_content').empty();
			
			if (jAddList.addresses.address && !$.isArray(jAddList.addresses.address)) {
				// make it array
				jAddList.addresses.address = [ jAddList.addresses.address ];
			}
			
			jAddList.addresses.address = jAddList.addresses.address.concat([{  'id' : -1,
										     'full_name' : '',
										     'address_line_1' : '',
										     'address_line_2' : '',
										     'phone_number' : '',
										     'zip_code' : '',
										     'country_id': '1',
										     'state_id' : '1',
										     'city' : '' }]);
			
			$.tmpl("address_form", jAddList).appendTo("#main_content");
			
			var $countrySelects = $("#main_content").find('.country');
			$countrySelects.bind('change', function(e){
				hci.fetch(hci.GetStateList(lang_id, e.target.value), function(states){
					console.info(e);
					var $stateSelect = $(e.target).closest('.address').find('.state');
					$stateSelect.empty();
					$(states).find('state').each(function(index){
						$stateSelect.append('<option>'+$(this).find('name').text()+'</option>');
					});
				});
			});
			$countrySelects.trigger('change');
			
			
			console.info("test", jAddList, jCountryList, jAccount);
		});
		shopshark.renderAddressList("<response status='ok'>" + "  <addresses>" + "    <address id='1'>" + "      <full_name>ITBA 1</full_name>" + "      <address_line_1>Av. Eduardo Madero 399</address_line_1>" + "      <address_line_2 />" + "      <country_id>1</country_id>" + "      <state_id>1</state_id>" + "      <city>Capital Federal</city>" + "      <zip_code>C1106ACD</zip_code>" + "      <phone_number>0800-888-ITBA</phone_number>" + "    </address>" + "  </addresses>" + "</response>");
	},

	renderAddressList : function(response) {
		/*
		 * $('#addresses').empty();
		 * 
		 * if (response.addresses.size > 0) {
		 * 
		 * response.adresses.loc = locale.template.addresses;
		 * response.country_list = [{'id':1, 'name':'Mi Pais Imaginario'}]
		 * $.tmpl('address_form', response.addresses).appendTo('#addresses'); }
		 */
	},

	populateMenu : function(handler) {
		hci.fetch(hci.GetCategoryList(this.language_id), function(catList) {
			shopshark.renderCategories(catList);
			var categories = $(catList).find('category');
			categories.each(function(index) {
				var category_id = $(this).attr('id');
				hci.fetch(hci.GetSubcategoryList(shopshark.language_id, category_id), function(subcatList) {
					shopshark.renderSubcategories(subcatList, category_id);
					if (index == categories.length - 1) {
						handler();
					}
				});
			});
		});
	},

	renderCategories : function(catList) {
		var catList = $.xml2json(catList);
		$('#categories').empty();
		$.tmpl("category", catList.categories.category).prependTo("#categories");
	},

	renderSubcategories : function(subcatList, catId) {
		var subcatList = $.xml2json(subcatList);
		$("#category_" + catId + "_div .submenu").empty();
		$.tmpl("subcategory", subcatList.subcategories.subcategory).prependTo("#category_" + catId + "_div .submenu");
	},

	renderLangSelect : function() {
		hci.fetch(hci.GetLanguageList(), function(langList) {
			$(langList).find('language').each(function(index) {
				var opt_id = $(this).attr('id');
				var opt = $("<option/>");
				opt.val(opt_id);
				opt.text($(this).find('name').text());
				if (opt_id == shopshark.language_id) {
					opt.attr('selected', 'selected');
				}
				$('select[name=language]').append(opt);
			});
		});
		$('select[name=language]').bind('change', function(e) {
			$.cookie("language_id", e.target.value);
			window.location.reload(true);
		});
	},

	renderProductInfo : function(product_id) {
		if (product_id) {
			$("#main_content").load('content/loading.html');
			hci.fetch(hci.GetProduct(product_id), function(prodResp) {
				var resp = $.xml2json(prodResp);
				resp.product.category = $("#category_" + resp.product.category_id).text();
				resp.product.subcategory = $("#subcategory_" + resp.product.category_id + "_" + resp.product.subcategory_id).text();
				resp.product.loc = locale.template.product;
				$("#main_title").html(resp.product.name + " <span>" + resp.product.category + ":" + resp.product.subcategory + "</span>");
				$("#main_content").empty();
				$.tmpl("product", resp.product).appendTo("#main_content");
				if (resp.product.actors) {
					$.ajax( {
						url : "youtube/?q=" + escape(resp.product.name + " HD trailer") + "&lang=es&setSafeSearch=STRICT&max-results=10&v=2&fields=entry(title,media:group(yt:videoid),yt:noembed)",
						success : shopshark.loadVideo
					});
				} else {
					// GOOGLE API DOES NOT HAVE THE BOOKS for preview.
					/*
					 * var book = " <iframe class='youtube-player'
					 * type='text/html' width='640' height='385'
					 * src='content/book.html?isbn=" + resp.product.ISBN_10 +"'
					 * frameborder='0'>" + " Your browser does not support
					 * iframes." + " </iframe>";
					 * 
					 * 0738531367
					 * 
					 * $("#gallery").append($(book));
					 */
					var book = "<img src='" + resp.product.image_url + "'></img>";
					$("#gallery").append($(book));
				}
			});
		}
	},

	loadVideo : function(resp) {
		var video = $(resp).find("entry").not('entry:has("[nodeName=yt:noembed]")').first();
		var videoid = video.find("[nodeName=yt:videoid]").text();

		var iframe = "	<iframe class='youtube-player' width='640' height='385' src='//www.youtube.com/embed/" + videoid + "?autoplay=1' frameborder='0'>" + "		Your browser does not support iframes." + "	</iframe>";

		$("#gallery").append($(iframe));
	},

	loadUser : function() {
		var data = {
			"user_id" : $.cookie("user_id"),
			"username" : $.cookie("username"),
			"name" : $.cookie("name"),
			"last_login_date" : $.cookie("last_login_date")
		};
		data.loc = locale.template.userNav;
		$.tmpl("userNav", data).appendTo("#user");
	},

	loadCart : function() {
		var username = $.cookie('username');
		var token = $.cookie('token');
		hci.fetch(hci.GetOrderList(username, token), function(list) {
			var orders = $(list).find("order status:contains(1)");
			if (orders.length) {
				order_id = orders.first().parent().attr('id');
				shopshark.renderCart(order_id);
			} else {
				// Create new Order for user to start shopping.
				hci.fetch(hci.CreateOrder(username, token), function(orderResp) {
					order_id = $(orderResp).find('order').attr('id');
					shopshark.renderCart(order_id);
				});
			}
		});

		$('a.cart_buy').live('click', function(e) {
			$('#loading_cart').show();
			var pid = $(this).attr('id').split('_')[1];
			hci.fetch(hci.AddOrderItem(username, token, shopshark.cartData.order.id, pid, "1"), function(orderResp) {
				shopshark.renderCart(shopshark.cartData.order.id);
			});

		});
	},

	loadAnonymous : function() {
		$.tmpl("signIn", locale.template.signIn).appendTo("#user");
		$('#user').find('form').bind('submit', function(e) {
			var l = $.deparam($(this).serialize());
			shopshark.signIn(l.username, l.password);
			return false;
		});

		$('a.cart_buy').live('click', function(e) {
			var pid = $(this).attr('id').split('_')[1];
			$.bbq.pushState("#register=" + pid, 2);
		});
	},

	signIn : function(username, password) {
		hci.fetch(hci.SignIn(username, password), function(signInResp) {
			var signIn = $.xml2json(signInResp);
			if (signIn.authentication) {
				$.cookie("token", signIn.authentication.token);
				$.cookie("user_id", signIn.authentication.user.id);
				$.cookie("username", signIn.authentication.user.username);
				$.cookie("name", signIn.authentication.user.name);
				$.cookie("last_login_date", signIn.authentication.user.last_login_date);
				window.location.reload();
			} else {
				alert(locale.error[signIn.error.code]);
			}
			$.bbq.removeState('clear');
		});

	},

	signOut : function() {
		hci.fetch(hci.SignOut($.cookie("username"), $.cookie("token")), function(signOutResp) {
			var signOut = $.xml2json(signOutResp);
			if (signOut.status == "ok") {
				$.cookie("token", null);
				$.cookie("user_id", null);
				$.cookie("username", null);
				$.cookie("name", null);
				$.cookie("last_login_date", null);
				$.bbq.removeState('logout');
				window.location.reload();
			} else {
				alert(signOut.error.message);
			}
		});

	},

	renderCart : function(order_id) {
		$('#loading_cart').show();
		hci.fetch(hci.GetOrder($.cookie("username"), $.cookie("token"), order_id), function(orderResp) {
			shopshark.cartData = $.xml2json(orderResp);
			var order = shopshark.cartData.order;
			order.total = 0.0;
			if (order.items.item) {
				if (order.items.item && !$.isArray(order.items.item)) {
					// make it array
					order.items.item = [ order.items.item ];
				}

				$.each(order.items.item, function(i, v) {
					order.total += parseFloat(v.price) * parseInt(v.count);
				});
				order.loc = locale.template.cart;
				$('#cart').empty();
				order.total = shopshark.formatNumber(order.total, 2);
				$.tmpl("cart", order).appendTo("#cart");

				// Store cart names in cookies so we do not have to call the api
				// every time.
				$('#cart').find('a[href^=#product]').each(function(i, v) {
					var p_id = $(v).attr('href').split('=')[1];
					var name = $.cookie('c_p_' + p_id);
					if (name) {
						$(v).html(name);
					} else {
						hci.fetch(hci.GetProduct(p_id), function(prodResp) {
							name = $(prodResp).find('name').text();
							$.cookie('c_p_' + p_id, name);
							$(v).html(name);
						});
					}
				});

				// Set changes

				$('input.quantity').bind('change', function(e) {
					var o_id = $('a[href^=#checkout]').attr('href').split('=')[1];
					var p_id = $(this).attr('id').split('_')[1];
					var new_count = e.target.value;
					hci.fetch(hci.DeleteOrderItem($.cookie("username"), $.cookie("token"), o_id, p_id, "9999"), function(resp) {
						if (new_count > 0) {
							hci.fetch(hci.AddOrderItem($.cookie("username"), $.cookie("token"), o_id, p_id, new_count), function(resp) {
								shopshark.renderCart(shopshark.cartData.order.id);
							});
						} else {
							shopshark.renderCart(shopshark.cartData.order.id);
						}
					});

				});

			} else {
				$('#cart').prepend('<div id="empty_cart"><p>' + locale.web.p_noitems + '</p></div>');
			}
			$('#loading_cart').hide();
		});
	},

	renderRegisterForm : function() {
		var data = {
			loc : locale.template.register
		};
		$("#main_title").html(locale.web.l_newaccount);
		$("#main_content").empty();
		$.tmpl("register", data).appendTo("#main_content");
		$("#register form").validate( {
			messages : locale.validator,
			submitHandler : function(form) {
				shopshark.register(form);
			}
		});
	},

	register : function(form) {
		var u = $.deparam($(form).serialize());

		hci.fetch(hci.CreateAccount(u.username, u.name, u.password, u.email, u.dateISO), function(response) {
			var error_code = $(response).find('error').attr('status');
			if (error_code) {
				alert(locale.error[error_code]);
			} else {
				alert(locale.web.success_register);
				shopshark.signIn(u.username, u.password);
			}
			$.bbq.removeState('register');
		});

	},

	clearCart : function(order_id) {
		$('#cart').empty();
		hci.fetch(hci.DeleteOrder($.cookie('username'), $.cookie('token'), order_id), function(response) {
			var error_code = $(response).find('error').attr('status');
			if (error_code) {
				alert(locale.error[error_code]);
			} else {
				shopshark.loadCart();
			}
			$.bbq.removeState('clear');
		});
	}

};

/**
 * ON DOCUMENT READY SETUP.
 */
$(document).ready(function() {
	// Set language from cookie
	if (!$.cookie("language_id")) {
		$.cookie("language_id", "1");
	}
	shopshark.language_id = $.cookie("language_id");

	// Load Language.
	$.getScript('files/js/lang/locale-' + shopshark.language_id + '.js', function() {
		$('#l_search').text(locale.web.l_search);
		$('#l_language').text(locale.web.l_language);
		$('#b_asc').text(locale.web.b_asc);
		$('#b_desc').text(locale.web.b_desc);
		$('#p_copyright').text(locale.web.p_copyright);
		$('#l_cart').text(locale.web.l_cart);
		$('#l_loading').text(locale.web.l_loading);
		$('#p_noitems').text(locale.web.p_noitems);
		// Load validator messages.
		jQuery.extend(jQuery.validator.messages, locale.validator);

		shopshark.renderLangSelect();

		// Menu
		shopshark.populateMenu(function() {
			$(window).trigger('hashchange');
		});

		// Display user or anonymous menu.
		var token = $.cookie("token");
		if (token) {
			shopshark.loadUser();
			shopshark.loadCart();
		} else {
			shopshark.loadAnonymous();
		}

		// Automatic Search bar
		$('input[name=query]').keyup(function(event) {
			$.bbq.removeState( [ 'category', 'subcategory', 'product' ]);
			$.bbq.pushState('search=' + escape(event.target.value));
		});

		// MyAccount
		// setup ul.tabs to work as tabs for each div directly under div.panes
		$("ul.tabs").tabs("div.panes > div");

		// Override click events to enable hashing ie #product=1
		$('a[href^=#]').live('click', function(e) {
			url = $(this).attr('href').replace(/^#/, '');
			console.info('click url:', url);
			
			if (url.indexOf("category") != -1) {
				$.bbq.pushState(url, 2);
			} else {
				$.bbq.pushState(url);
			}
			return false;
		});

		// Bind an event to window.onhashchange that, when the history state
		// changes,
		// iterates over all .bbq widgets, getting their appropriate url from
		// the
		// current state. If that .bbq widget's url has changed, display either
		// our
		// cached content or fetch new content to be displayed.
		$(window).bind('hashchange', function(e) {
			if (!window.location.hash) {
				$.bbq.pushState('category=1', 2);
			}

			var state_page = e.getState('page');
			var state_order = e.getState('order');
			var state_product = e.getState('product');
			var state_search = e.getState('search');
			var state_category = e.getState('category');
			var state_subcategory = e.getState('subcategory');
			var state_register = e.getState('register');
			var state_logout = e.getState('logout');
			var state_clear = e.getState('clear');
			var state_userpanel = e.getState('userpanel');

			if (state_page) {
				shopshark.page = state_page;
			} else {
				shopshark.page = "1";
			}

			if (state_order) {
				$("a.sortbutton_selected").removeClass("sortbutton_selected").addClass("sortbutton");
				$("a[href=#order=" + state_order + "]").addClass('sortbutton_selected');
				shopshark.order = state_order;
			} else {
				shopshark.order = "ASC";
			}

			if (state_userpanel === "" || state_userpanel) {
				console.info("panel", state_userpanel);
				shopshark.renderUserPanel();
				return;
			}
			
			if (state_register === "" || state_register) {
				shopshark.renderRegisterForm();
				return;
			}

			if (state_logout === "" || state_logout) {
				shopshark.signOut();
				return;
			}

			if (state_clear) {
				shopshark.clearCart(state_clear);
			}

			if (state_product) {
				shopshark.renderProductInfo(state_product);
				return;
			}

			if (state_search) {
				shopshark.populateBySearch(state_search);

				// set input value if coming from bookmark.
				if ($('input[name=query]').val() == "") {
					$('input[name=query]').val(state_search);
				}
				return;
			}

			if (state_category) {
				if (state_subcategory) {
					shopshark.populateBySubcategory(state_category, state_subcategory);
				} else {
					shopshark.populateByCategory(state_category);
				}
			}

		});

	});
});
