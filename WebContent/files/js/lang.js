function doTranslate() {
    var dict;
    
    switch(getFromURL('lang')) {
        case 'en':
            dict = new EnglishDict();
            break;
            
        default: case 'es':
            dict = new SpanishDict();
    }

    var spans = document.getElementsByTagName('span');
        
    for (i = 0; i < spans.length; i++) {
        var translation;
        var span = spans.item(i);
        
        if (translation = dict[span.innerHTML])
            span.innerHTML = translation;
    }
    

    return ret;
}

function EnglishDict() {
	this["SEARCH"] = "Search for products...";
	
}
    
function SpanishDict() {
    this["SEARCH"] = "Buscar productos...";
}
