// Page load script for ShopShark.

var translate, redraw;  /* Global names for functions */
var cart_visible;       /* Global boolean variable */

function init(page) {

    translate = doTranslate; /* in lang.js */
    cart_visible = (getFromURL('cart') == 'true');

    switch(page) {
        case 'index':
            redraw = redraw_index;
            break;
    }

    window.onresize = redraw;
}

function load(page) {
    init(page);

    if (redraw)
        redraw();

    if (translate)
        translate();
}

function redraw_index() {

    var mainH = document.getElementById('main').clientHeight;
    var headerH = document.getElementById('header').clientHeight;
    var footerH = document.getElementById('footer').clientHeight;

    var contentMaxH = mainH - headerH - footerH;
    
    var cart = document.getElementById('cart');
    var content = document.getElementById('content');
    var contentsb = document.getElementById('content-searchbar');

    if (cart_visible) {
    
        cart.style['visibility'] = 'visible';
        content.style['height'] = contentMaxH - cart.clientHeight + 'px';
    }

    contentsb.style['margin-top'] = content.clientHeight / 2 - contentsb.clientHeight / 2 + 'px';
    
    return;
}

