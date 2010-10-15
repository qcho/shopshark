/**
 * Copyright 2009 hci Group Inc. Licensed under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law
 * or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

var hci = hci
		|| {

			/** Path prefix to the API. */
			_path : "service/",

			/** Path prefix to the site. */
			_appPath : "http://www.shopshark.com/",

			/**
			 * Fetches public data from the API using script transport (a.k.a
			 * JSONP).
			 */
			fetch : function() {
				var numRpcs = arguments.length - 1;
				var callback = arguments[numRpcs];
				var results = new Array(numRpcs);
				var fetchCallback = this._newJoiningCallback(numRpcs, results,
						callback);
				for ( var i = 0; i < numRpcs; i++) {
					this._newRpcCallback(arguments[i], results, i, fetchCallback);
				}
			},

			_addParam : function(uri, name, value) {
				return [ uri, uri.indexOf('?') >= 0 ? '&' : '?', name, '=',
						escape(value) ].join('');
			},

			_newJoiningCallback : function(numExpectedCalls, results, callback) {
				var numCalls = 0;
				return function(o) {
					if (++numCalls == numExpectedCalls) {
						callback.apply(null, results);
					}
				};
			},

			_newRpcCallback : function(request, results, resultIndex, callback) {
				
				var url = this._path + request.url.join('');
				var type = request.type;
				
				var options = {
						type : type,
						url : url,
						dataType : "xml",
						success : function(xml) {
							results[resultIndex] = xml;
							callback();
						}
					}		
				if (type == "POST" ){
					options.data = request.data;
				}
				jQuery.ajax(options);
			},

			_queryString : function(params) {
				return "?" + this._queryParams(params);
			},

			_queryParams : function(params) {
				var pairs = [];
				for ( var key in params) {
					var value = params[key];
					if (value !== undefined && value !== null && String(value)) {
						pairs.push(key + "=" + escape(value));
					}
				}
				return pairs.join("&");
			},

/**
 * Resources. Common
 */

			GetLanguageList : function() {
				var queryStr = this._queryString({
					"method" : "GetLanguageList"
				});
				return {
					type : "GET",
					url : [ "Common.groovy", queryStr ]
				};
			},
			GetCountryList : function(language_id) {
				var queryStr = this._queryString({
					"method" : "GetCountryList",
					"language_id" : language_id
				});
				return {
					type : "GET",
					url : [ "Common.groovy", queryStr ]
				};
			},
			GetStateList : function(language_id, country_id) {
				var queryStr = this._queryString({
					"method" : "GetStateList",
					"language_id" : language_id,
					"country_id" : country_id
				});
				return {
					type : "GET",
					url : [ "Common.groovy", queryStr ]
				};
			},
			GetAccountPreferences : function(username, auth_token) {
				var queryStr = this._queryString({
					"method" : "GetAccountPreferences",
					"username" : username,
					"auth_token" : auth_token
				});
				return {
					type : "GET",
					url : [ "Common.groovy", queryStr ]
				};
			},
			SetAccountPreferences : function(username, auth_token, value) {
				var queryStr = this._queryString({
					"method" : "SetAccountPreferences",
					"username" : username,
					"auth_token" : auth_token,
					"value" : value
				});
				return {
					type : "GET",
					url : [ "Common.groovy", queryStr ]
				};
			},

/**
 * Resources. Security
 */
			SignIn : function(username, password) {
				var queryStr = this._queryString({
					"method" : "SignIn",
					"username" : username,
					"password": password
				});
				return {
					type : "GET",
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			SignOut : function(username, authentication_token) {
				var queryStr = this._queryString({
					"method" : "SignOut",
					"username" : username,
					"authentication_token": authentication_token
				});
				return {
					type : "GET",
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			ChangePassword : function(username, password, new_password) {
				var queryStr = this._queryString({
					"method" : "ChangePassword",
					"username" : username,
					"password": password,
					"new_password": new_password
				});
				return {
					type : "GET",
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			CreateAccount : function(username, name, password, email, birth_date) {
				var account = 	"<account>" +
									"<username>"+username+"</username>" +
									"<name>"+name+"</name>" +
									"<password>"+password+"</password>" +
									"<email>"+email+"</email>" +
									"<birth_date>"+birth_date+"</birth_date>" +
								"</account>";
				var queryStr = this._queryString({
					"method" : "CreateAccount",
				});
				return {
					type : "POST",
					data : account,
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			GetAccount : function(username, authentication_token) {
				var queryStr = this._queryString({
					"method" : "GetAccount",
					"username" : username,
					"authentication_token": authentication_token
				});
				return {
					type : "GET",
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			UpdateAccount : function(username, authentication_token, name, email, birth_date) {
				var account = 	"<account>" +
									"<name>"+name+"</name>" +
									"<email>"+email+"</email>" +
									"<birth_date>"+birth_date+"</birth_date>" +
								"</account>";
				var queryStr = this._queryString({
					"method" : "UpdateAccount",
				});
				return {
					type : "POST",
					data: "account=" + account,
					url : [ "Security.groovy", queryStr ]
				};
			},

/**
 * Resources. Catalog
 */
			GetCategoryList : function(language_id) {
				var queryStr = this._queryString({
					"method" : "GetCategoryList",
					"language_id" : language_id
				});
				return {
					type : "GET",
					url : [ "Catalog.groovy", queryStr ]
				};
			},
			
			GetSubcategoryList : function(language_id, category_id) {
				var queryStr = this._queryString({
					"method" : "GetSubcategoryList",
					"language_id" : language_id,
					"category_id" : category_id
				});
				return {
					type : "GET",
					url : [ "Catalog.groovy", queryStr ]
				};
			},
			
			GetProductListByCategory : function(language_id, category_id, order, items_per_page, page) {
				var queryStr = this._queryString({
					"method" : "GetProductListByCategory",
					"language_id" : language_id,
					"category_id" : category_id,
					"order" : order,
					"items_per_page": items_per_page,
					"page": page
				});
				return {
					type : "GET",
					url : [ "Catalog.groovy", queryStr ]
				};
			},
			
			GetProductListBySubcategory : function(language_id, category_id, subcategory_id, order, items_per_page, page) {
				var queryStr = this._queryString({
					"method" : "GetProductListBySubcategory",
					"language_id" : language_id,
					"category_id" : category_id,
					"subcategory_id" : subcategory_id,
					"order" : order,
					"items_per_page": items_per_page,
					"page": page
				});
				return {
					type : "GET",
					url : [ "Catalog.groovy", queryStr ]
				};
			},
			
			GetProductListByName : function(criteria, order, items_per_page, page) {
				var queryStr = this._queryString({
					"method" : "GetProductListByName",
					"criteria" : criteria,
					"order" : order,
					"items_per_page": items_per_page,
					"page": page
				});
				return {
					type : "GET",
					url : [ "Catalog.groovy", queryStr ]
				};
			},
			
			GetProduct : function(product_id) {
				var queryStr = this._queryString({
					"method" : "GetProduct",
					"product_id" : product_id
				});
				return {
					type : "GET",
					url : [ "Catalog.groovy", queryStr ]
				};
			},

/**
 * Resources. Order
 */
			
			CreateOrder : function(username, authentication_token) {
				var queryStr = this._queryString({
					"method" : "CreateOrder",
				});
				return {
					type : "POST",
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			DeleteOrder : function(username, authentication_token, order_id) {
				var queryStr = this._queryString({
					"method" : "DeleteOrder",
					"order_id" : order_id
				});
				return {
					type : "POST",
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			ChangeOrderAddress : function(username, authentication_token, order_id, address_id) {
				var queryStr = this._queryString({
					"method" : "ChangeOrderAddress",
					"order_id" : order_id,
					"address_id" : address_id
				});
				return {
					type : "POST",
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			ConfirmOrder : function(username, authentication_token, order_id, address_id) {
				var queryStr = this._queryString({
					"method" : "ConfirmOrder",
					"order_id" : order_id,
					"address_id" : address_id
				});
				return {
					type : "POST",
					url : [ "Security.groovy", queryStr ]
				};
			},
			
			GetOrderList : function(username, authentication_token) {
				var queryStr = this._queryString({
					"method" : "GetOrderList",
					"username" : username,
					"authentication_token": authentication_token
				});
				return {
					type : "GET",
					url : [ "Catalog.groovy", queryStr ]
				};
			},
			
			GetOrder : function(username, authentication_token, order_id) {
				var queryStr = this._queryString({
					"method" : "GetOrder",
					"username" : username,
					"authentication_token": authentication_token,
					"order_id": order_id
				});
				return {
					type : "GET",
					url : [ "Catalog.groovy", queryStr ]
				};
			},
			
			

			/**
			 * Misc.
			 */

			_addCommas : function(value) {
				var p = String(value).split('.'), d = p[0], r = /(\d+)(\d{3})/;
				while (r.test(d)) {
					d = d.replace(r, '$1' + ',' + '$2');
				}
				return d + (p.length > 1 ? '.' + p[1] : '');
			}
		};
/*
 * hci.fetch(hci.GetLanguageList(), function(xml){ console.info("test", xml);
 * });
 */