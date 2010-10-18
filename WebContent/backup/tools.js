function getElementsById(elements) {

    var ret = new Array();
    
    for (var i in elements) {
        var element = elements[i];
        ret[element] = document.getElementById(element);
    }

    return ret;
}

function getFromURL(name) {
    var url = window.location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

    var result = new RegExp( "[\\?&]" + name + "=([^&#]*)" ).exec(url);
    
    if( result == null )
        return "";
    else
        return result[1];
}
