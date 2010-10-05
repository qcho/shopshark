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

var hci = hci || {

	/** Path prefix to the API. */
	_path : "service/",

	/** Path prefix to the site. */
	_appPath : "http://www.shopshark.com/",

	/**
	 * Fetches public data from the API using script transport (a.k.a JSONP).
	 */
	fetch : function() {
		var numRpcs = arguments.length - 1;
		var callback = arguments[numRpcs];
		var results = new Array(numRpcs);
		var fetchCallback = this._newJoiningCallback(numRpcs, results, callback);
		var idPrefix = this._rpcId();
		for ( var i = 0; i < numRpcs; i++) {
			var id = idPrefix + "_" + i;
			var url = this._path + this._addParam(arguments[i].join(''), 'callback', 'hci.' + id);
			this._newRpcCallback(url, results, i, fetchCallback);
		}
	},

	_addParam : function(uri, name, value) {
		return [ uri, uri.indexOf('?') >= 0 ? '&' : '?', name, '=', escape(value) ].join('');
	},

	_rpcId : function() {
		return 'rpc_' + Math.floor(Math.abs(Math.random() * (2 << 30))).toString(36);
	},

	_newJoiningCallback : function(numExpectedCalls, results, callback) {
		var numCalls = 0;
		return function(o) {
			if (++numCalls == numExpectedCalls) {
				callback.apply(null, results);
			}
		};
	},

	_newRpcCallback : function(url, results, resultIndex, callback) {
			jQuery.ajax( {
				url : url,
				dataType : "xml",
				success : function(xml) {
					results[resultIndex] = xml;
					callback();
				}
			});
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
		var queryStr = this._queryString( {
			"method" : "GetLanguageList"
		});
		return [ "Common.groovy", queryStr ];
	},
	GetCountryList : function(language_id) {
		var queryStr = this._queryString( {
			"method" : "GetCountryList",
			"language_id" : language_id
		});
		return [ "Common.groovy", queryStr ];
	},
	GetStateList : function(language_id, country_id) {
		var queryStr = this._queryString( {
			"method" : "GetStateList",
			"language_id" : language_id,
			"country_id" : country_id
		});
		return [ "Common.groovy", queryStr ];
	},
	GetAccountPreferences : function(username, auth_token) {
		var queryStr = this._queryString( {
			"method" : "GetAccountPreferences",
			"username" : username,
			"auth_token" : auth_token
		});
		return [ "Common.groovy", queryStr ];
	},
	SetAccountPreferences : function(username, auth_token, value) {
		var queryStr = this._queryString( {
			"method" : "SetAccountPreferences",
			"username" : username,
			"auth_token" : auth_token,
			"value" : value
		});
		return [ "Common.groovy", queryStr ];
	},
	
	/**
	 * Resources. Security
	 */
	
	/**
	 * Resources. Catalog
	 */
	GetCategoryList : function(language_id) {
		var queryStr = this._queryString( {
			"method" : "GetCategoryList",
			"language_id" : language_id
		});
		return [ "Catalog.groovy", queryStr ];
	},
	
	/**
	 * Resources. Order
	 */
	
	
	
	
	

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
hci.fetch(hci.GetLanguageList(), function(xml){
    console.info("test", xml);
});
*/