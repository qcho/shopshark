// Page load script for ShopShark.

var SECTIONS = { 'main' : 'main.html',
                 'searchr' : 'searchr.html',
                 'google' : 'http://www.google.com'
               }

var results_list;
var cart_list;

$(document).ready(function() {
    	 $('#sidebar').load('sidebar.html');
         $('#cart').load('cart.html',
            function() {
                cart_list = new TemplatedList('cart-content', 'hitem-template');
            });
         
        show('main');
})

function show(section) {
    if (!$.inArray(section, SECTIONS))
        section = 'main'

    $('#content').load(SECTIONS[section],
        function() {
            switch(section) {
                case 'searchr':
                    results_list = new TemplatedList('list-body', 'item-template');
                    /* aca se puede cargar mas cosas. Como resultados posta. */
                break;
            }

        });

}

function testItem() {
    return { '%PIC' : 'files/images/logo.png',
                     '%TITLE' : 'Logo de ShopShark',
                     '%PRICE' : '$10000',
                     '%RANK' : '10 ptos' };
}

function testShowProducts() {    
    results_list.add(testItem());
}

function testCart() {
    cart_list.add(testItem());
}

function TemplatedList(div_id, template_id) {
    this.div = $('#' + div_id);
    this.template = $('#' + template_id).html();
    this.template = this.template.substring(4, this.template.length - 3)

    this.add = function(dict) {

        var item = this.template;
        
        for (var key in dict) {
            item = item.replace(key, dict[key]);
        }

        this.div.append(item);

    }

    this.clear = function() {
        this.div.html('');
    }
}
