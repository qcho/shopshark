/**
 * Copyright 2009 KaChing Group Inc. Licensed under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law
 * or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

var kaching = kaching || {

  /** Path prefix to the API. */
  _path: "http://localhost:8000/api/",  // "http://www.kaching.com/api/"

  /** Path prefix to the site. */
  _appPath: "http://www.kaching.com/",

  /**
   * Fetches public data from the API using script transport (a.k.a JSONP).
   */
  fetch: function() {
    var numRpcs = arguments.length - 1;
    var callback = arguments[numRpcs];
    var results = new Array(numRpcs);
    var fetchCallback = this._newJoiningCallback(numRpcs, results, callback);
    var idPrefix = this._rpcId();
    for (var i = 0; i < numRpcs; i++) {
      var id = idPrefix + '_' + i;
      kaching[id] = this._newRpcCallback(id, results, i, fetchCallback);
      var script = document.createElement('script');
      script.id = id;
      script.type = 'text/javascript';
      script.src = this._path +
        this._addParam(arguments[i].join(''), 'callback', 'kaching.' + id);
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  },

  _rpcId: function() {
    return 'rpc_' + Math.floor(Math.abs(Math.random() * (2<<30))).toString(36);
  },

  _newJoiningCallback: function(numExpectedCalls, results, callback) { 
    var numCalls = 0;
    return function(o) {
      if (++numCalls == numExpectedCalls) {
        callback.apply(null, results);
      }
    };
  },

  _newRpcCallback: function(id, results, resultIndex, callback) {
    return function(resp) {
      var script = document.getElementById(id);
      script.parentNode.removeChild(script);
      kaching[id] = null;
      results[resultIndex] = resp.status == 200 ? resp.result : resp.status;
      callback();
    };
  },

  /**
   * Does nothing. Left here for backwards compatibility.
   */
  setCallerUrl: function(url) {
  },

  _queryString: function(params) {
    return "?" + this._queryParams(params);
  },

  _queryParams: function(params) {
    var pairs = [];
    for (var key in params) {
      var value = params[key];
      if (value !== undefined && value !== null && String(value)) {
        pairs.push(key + "=" + escape(value));
      }
    }
    return pairs.join("&");
  },

  _addParam: function(uri, name, value) {
    return [uri, uri.indexOf('?') >= 0 ? '&' : '?', name, '=', escape(value)].join('');
  },

  _addCommas: function(value) {
    var p = String(value).split('.'), d = p[0], r = /(\d+)(\d{3})/;
    while (r.test(d)) {
      d = d.replace(r, '$1' + ',' + '$2');
    }
    return d + (p.length > 1 ? '.' + p[1] : '');
  },

/**
 * Resources. 
 */
  
  user: function(id) {
    return ["users/", id];
  },

  userWall: function(userId, opt_postId, opt_beforeOrAfter, opt_max) {
    var queryStr = this._queryString(
      "id", opt_postId, "rel", opt_beforeOrAfter, "max", opt_max);
    return ["users/", userId, "/wall", queryStr];
  },

  portfolio: function(userId) {
    return ["users/", userId, "/portfolio"];
  },

  trades: function(userId) {
    return ["users/", userId, "/portfolio/trades"];
  },

  trade: function(userId, tradeId) {
    return ["users/", userId, "/portfolio/trades/", tradeId];
  },

  performance: function(userId) {
    return ["users/", userId, "/portfolio/performance"];
  },

  watchlist: function(userId) {
    return ["users/", userId, "/watchlist"];
  },

  /**
   * Deprecated. Use securities. 
   */
  searchSecurities: function(opt_prefix, opt_max) {
    return this.securities(opt_prefix, opt_max);
  },

  security: function(symbol) {
    return ["securities/", symbol];
  },

  /**
   * Pass an array of symbols or a search prefix and an optional cap on the
   * number of results.
   */
  securities: function(symbols_or_prefix, opt_max) {
    return typeof(symbols_or_prefix) == "object" ?
      ["securities/", symbols_or_prefix.join("+")] :
      ["securities", this._queryString({prefix: symbols_or_prefix, max: opt_max})];
  },

  securityWall: function(symbol, opt_postId, opt_beforeOrAfter, opt_max) {
    var queryStr = this._queryString(
      {id: opt_postId, rel: opt_beforeOrAfter, max: opt_max});
    return ["securities/", symbol, "/wall", queryStr];
  },

  mainWall: function(opt_postId, opt_beforeOrAfter, opt_max) {
    var queryStr = this._queryString(
      {id: opt_postId, rel: opt_beforeOrAfter, max: opt_max});
    return ["communities/everyone/wall", queryStr];
  },

  insight: function(symbol, opt_page, opt_date) {
    var queryStr = this._queryString({page: opt_page, date: opt_date});
    return ["communities/everyone/insight", queryStr];
  },

  supportWall: function(opt_postId, opt_beforeOrAfter, opt_max) {
    var queryStr = this._queryString(
      {id: opt_postId, rel: opt_beforeOrAfter, max: opt_max});
    return ["support/wall", queryStr];
  },
  
  /**
   * Formatting. 
   */

  formatNumber: function(value) {
    return this._addCommas(value);
  },

  formatNumberTo0: function(value) {
    return this._addCommas(Math.round(value));
  },

  formatNumberTo2: function(value) {
    var d = Math.round(value * 100) % 100;
    return this._addCommas(Math.floor(value) + '.' + (d < 10 ? '0' : '') + d);
  },

  formatDollars: function(value) {
    return this.formatDollarsTo2(value);
  },

  formatDollarsTo0: function(value) {
    return (value < 0 ? '-$' : '$') + this.formatNumberTo0(Math.abs(value));
  },

  formatDollarsTo2: function(value) {
    return (value < 0 ? '-$' : '$') + this.formatNumberTo2(Math.abs(value));
  },

  formatSignedTo0: function(value) {
    return this.sign(value) + this.formatNumberTo0(Math.abs(value));
  },

  formatSignedTo2: function(value) {
    return this.sign(value) + this.formatNumberTo2(Math.abs(value));
  },

  formatArrowTo0: function(value) {
    return this.arrow(value) + '\u200A' + this.formatNumberTo0(Math.abs(value));
  },

  formatArrowTo2: function(value) {
    return this.arrow(value) + '\u200A' + this.formatNumberTo2(Math.abs(value));
  },

  sign: function(value) {
    return value < 0 ? '-' : value > 0 ? '+' : '';
  },

  arrow: function(value) {
    return value < 0 ? '\u21d3' : value > 0 ? '\u21d1' : '';
  },

  parseDateTime: function(timestamp) {
    var p = timestamp.replace(/[^\d]/g, " ").split(" ");
    return new Date(Date.UTC(p[0], p[1], p[2], p[3], p[4], p[5]));
  },

  formatQuoteUrl: function(symbol) {
    return [this._appPath, 'quote/', symbol].join('');
  },

  formatPortfolioUrl: function(userId) {
    return [this._appPath, 'portfolio/', userId, '/holdings'].join('');
  },

  formatQuoteLink: function(symbol, opt_companyName, opt_cssClass, opt_target) {
    return this.formatLink(
      this.formatQuoteUrl(symbol), symbol,
      {title: opt_companyName, 'class': opt_cssClass, target: opt_target});
  },

  formatCompanyIcon: function(symbol, companyInfo, opt_cssClass) {
    return this.formatLink(
       this.formatQuoteUrl(symbol),
       '<img height="16" width="16" border="0" class="' + (opt_cssClass || '') +
       '" src="' + (companyInfo.companyIconUrl || 'http://assets3.kaching.com/images/clear2.1243474795.gif') +
       '">',
       {title: companyInfo.companyName});
  },

  formatLink: function(url, html, opt_attributes) {
    var a = [ '<a href="', url, '"' ];
    var o = opt_attributes || {};
    if (!o.target && o.target !== '') {
      o.target = '_blank';
    }
    for (var key in o) {
      var val = o[key];
      if (val || val === 0) {
        a.push(' ', key, '="', val, '"');
      }
    }
    a.push('>', html, '</a>');
    return a.join('');
  },

  formatBadge: function(opt_cssClass) {
    return this.formatLink(
        'http://www.kaching.com',
        '<img src="http://kaching-api.googlecode.com/svn/wiki/badge52x26.png" style="border:1px solid #aaa">',
        {'class': opt_cssClass});
  },

  writeBadge: function(opt_cssClass) {
    document.write(this.formatBadge(opt_cssClass));
  }

};