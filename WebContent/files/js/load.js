// Page load script for ShopShark.

function load() {

    switch(document.getElementById('main').getAttribute('role')) {
        case 'index':
            load_index();
            break;
    }
}

function getElementsById(elements) {

    var ret = new Array();
    
    for (var i in elements) {
        var element = elements[i];
        ret[element] = document.getElementById(element);
    }

    return ret;
}

function load_index() {
    var ids = ['main', 'header', 'footer', 'content-wrapper',
               'content', 'sidebar', 'content-searchbar'];
                        
    var elements = getElementsById(ids);

    var contentH = elements['content'].clientHeight;
    var contentsb = elements['content-searchbar'];
    var contentsbH = contentsb.clientHeight;

    //alert(contentH + "and " + contentsbH);
    contentsb.style['margin-top'] = contentH / 2 - contentsbH + 'px'    
}
