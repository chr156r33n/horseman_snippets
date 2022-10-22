// Snippets for Page Type analysis

// OG Page Type

return document.head.querySelector('[property="og:type"]').content

/// Microdata Checks

// Schema Microdata ListItem

return document.querySelector('[itemtype="https://schema.org/ListItem"]')

// Schema Microdata Product

return document.querySelector('[itemtype="http://schema.org/Product"]');

// Schema Microdata Article

return document.querySelector('[itemtype="http://schema.org/Article"]');


/// Page Title Checks

// Page title contains "blog"

var pagetitle = (document.title)
var regex = /.*(B|b)(log).*/

return regex.test(pagetitle);

// Page title contains "guide"

var pagetitle = (document.title)
var regex = /.*(G|g)(uide).*/

return regex.test(pagetitle);

// Page title contains "How to"

var pagetitle = (document.title)
var regex = /.*((H|h)ow\s(T|to)).*/

return regex.test(pagetitle);

// URL Test snippet - 100% credit to https://github.com/jessthebp

/* get pathname  */ 
var docurl = document.URL;
let thispath = new URL(docurl).pathname;
let path = thispath.toLowerCase()

//we have it in lower case bc "includes" is case sensitive
// go through and set based on what you need baby
// does anyone have a list of common url conventions for this kind of thing

switch (true) {
   case path.includes('guide'):
   case path.includes('blogpost'):
  case path.includes('blog'): return('blog')
    break;
    case path.includes('cat'):
   case path.includes('plp'):
  case path.includes('listing'): return('plp')
    break;
        case path.includes('product'):
   case path.includes('pdp'):
  case path.includes('detail'): return('pdp')
    break;
  case docurl.includes('dev'):return('dev')
    break;
  default:
    return('unknown');
}