// Page load script for ShopShark.

var SECTIONS = { 'main' : 'main.html',
                 'searchr' : 'searchr.html',
                 'google' : 'http://www.google.com'
               }

$(document).ready(function() {
    	 $('#sidebar').load('sidebar.html');
        show('main');
})

function show(section) {
    if (!$.inArray(section, SECTIONS))
        section = 'main'
    $('#content').load(SECTIONS[section]);
}

function testShowProducts() {
    var array = [ { 'pic' : 'files/images/logo.png',
                    'title' : 'Logo de ShopShark',
                    'price' : '$10000',
                    'rank' : '10 ptos' } ];

    showProducts(array);
}

function showProducts(array) {
    var template = $('#item-template').html();
    template = template.substring(4, template.length - 3);
    
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        
        var item_html = template.replace(
                        '%PIC', item.pic).replace(
                        '%TITLE', item.title).replace(
                        '%PRICE', item.price).replace(
                        '%RANK', item.rank);

        $('#list-body').append(item_html);
    }
}
