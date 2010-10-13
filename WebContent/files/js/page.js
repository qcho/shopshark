// Page load script for ShopShark.

var SECTIONS = ['main', 'searchr']

$(document).ready(function() {
    	 $('#sidebar').load('sidebar.html');
        show('main');
})

function show(section) {
    if (!$.inArray(section, SECTIONS))
        section = 'main'
    $('#content').load(section + '.html');
}
