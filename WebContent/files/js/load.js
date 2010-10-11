// Page load script for ShopShark.

function load() {

    switch(document.getElementById('main').getAttribute('role')) {
        case 'index':
            load_index();
            break;
    }
}

function IndexPage() {
    var elements = ['main', 'header', 'footer', 'content-wrapper',
                    'content', 'sidebar', 'content-searchbar'];
                         
    for (i in elements) {
        element = elements[i];
        this[element] = document.getElementById(element);
    }
}


function load_index() {
    page = new IndexPage();

    alert(page['content-searchbar'].style.height = 400);
}
