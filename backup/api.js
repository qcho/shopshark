(function(window, document, undefined){

    // Define a local copy of hciapi
    var hciapi = {
        baseUrl: "service/",
        
        Error:{
            "1": "La solicitud requiere de un método el cual no fue provisto.",
            "2": "La solicitud requiere de un identificador de lenguaje el cual no fue provisto.",
            "3": "La solicitud requiere de un identificador de país el cual no fue provisto.",
            "4": "La solicitud requiere de usuario el cual no fue provisto.",
            "5": "La solicitud requiere la contraseña la cual no fue provista.",
            "6": "La solicitud requiere el token de autenticación el cual no fue provisto.",
           "17": "La solicitud requiere de un valor a almacenar que no fue provisto.",
          "101": "El método solicitado suministrado es inválido.",
          "102": "El identificador de lenguaje suministrado es inválido.",
          "103": "El identificador de país suministrado es inválido.",
          "104": "El usuario es inválido.",
          "105": "El token de autenticación es inválido.",
          "999": "Se produjo un error inesperado procesando la solicitud."
        }
    }
    
    hciapi.Common: {
            sUrl: hciapi.baseUrl + "pepe",
            GetLanguageList: function(){
              //console.info("test5", this);
            },
            GetCountryList: function(language_id){
              //console.info("test", this);
            },
            GetStateList: function(language_id, country_id){
              //console.info("test", this);
            },
            GetAccountPreferences: function(username, auth_token){
              //console.info("test", this);
            },
            SetAccountPreferences: function(username, auth_token, value){
              //console.info("test", this);
            }
        },
        
        Security:{
          
        },
        
        Catalog:{
        },
        
        Order:{
        },

    // Expose hciapi to the global object
    window.Hciapi = hciapi;
})(this, this.document);

ApiUrl = {
      base: "service/",
      common: "Common.groovy?method=",
      security: "Security.groovy?method=",
      catalog: "Catalog.groovy?method=",
      order: "Order.groovy?method="
    }

Hciapi.Common.GetLanguageList();
//console.info(Hciapi.Common.baseUrl);


/*
serviceURL: this.baseURL + "Common.groovy?method=",
            GetLanguageList: function(){
              var url = this.serviceURL + "GetLanguageList";
              $get()
            },
            GetCountryList: function(language_id){
              var url = this.serviceURL + "GetCountryList";
              $.get(url, { "language_id": language_id },
                function(data){
                 alert("Data Loaded: " + data);
                });
            },
            GetStateList: function(language_id, country_id){
              var url = this.serviceURL + "GetStateList";
            },
            GetAccountPreferences: function(username, auth_token){
              var url = this.serviceURL + "GetAccountPreferences";
            },
            SetAccountPreferences: function(username, auth_token, value){
              var url = this.serviceURL + "SetAccountPreferences";
            }
*/


//var hciAPI = function( baseUrl ) {
//
//	this.baseUrl = "service/Common.groovy?method=";
//
//	this.getLanguageList = function() {
//		$.ajax( {
//			url : this.baseUrl + 'GetLanguageList',
//			dataType : "xml",
//			success : function(xml) {
//				$(xml).find('language').each(
//						function() {
//							var id_text = $(this).attr('id');
//							var code_text = $(this).find('code').text();
//							var name_text = $(this).find('name').text();
//
//							$('<div></div>').html(
//									"code: " + code_text + ". name: "
//											+ name_text + ' (' + id_text + ')')
//									.appendTo('#content');
//						}); // close each(
//
//			}
//		});
//	};
//};
//
//ApiWrapper.getLanguageList();
//var intel = asda;

/**
 * API SAMPLE
 */

hci.fetch(hci.GetLanguageList(), hci.GetCountryList(1), function(langList, countryList){
	//console.info("langList", $(langList).text());
	//console.info("countryList", $(countryList).text());
	});
