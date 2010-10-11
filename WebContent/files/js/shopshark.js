
/* This script includes everything else. */

var tag = '<script type=\"text/javascript\" src=\"files/js/%SCRIPT\"></script>'

var scripts = ['lib/jquery-1.4.2.js', 'lang.js', 'client.js',
               'page.js', 'tools.js']

for (i in scripts) {
    document.write(tag.replace('%SCRIPT', scripts[i]));
}
