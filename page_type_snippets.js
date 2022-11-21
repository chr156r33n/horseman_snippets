// Evaluation Title

var title = document.title;

switch (true) {
   case title.includes('top '):
   case title.includes('best '):
   case title.includes('vs '):
   case title.includes('verses '):return('evaulation')
  break;
  default:
    return('nope');
}

// Is Big Ecom

var host = window.location.host;

switch (true) {
   case host.includes('ebay'):
   case host.includes('amazon'):
  case host.includes('etsy'): return('big ecom')
  break;
  default:
    return('nope');
}

// Is Social/Video

var host = window.location.host;

switch (true) {
   case host.includes('facebook'):
   case host.includes('twitter'):
   case host.includes('instagram'):
   case host.includes('pinterest'):return('social')
  break;
 case host.includes('tiktok'):
  case host.includes('youtube'): return('video')

  default:
    return('nope');
}

// JSON Article Schema

return [...document.querySelectorAll('script[type="application/ld+json"]')].filter(e => e.innerText.includes('"@type":"Article"')).length ? "present" : "not present"

// JSON ListItem Schema

return [...document.querySelectorAll('script[type="application/ld+json"]')].filter(e => e.innerText.includes('"@type":"ListItem"')).length ? "present" : "not present"

// JSON Product Schema

return [...document.querySelectorAll('script[type="application/ld+json"]')].filter(e => e.innerText.includes('"@type":"Product"')).length ? "present" : "not present"

// OG Type

return document.head.querySelector('[property="og:type"]').content

// Page Type From URL

var docurl = document.URL;
let thispath = new URL(docurl).pathname;
let path = thispath.toLowerCase()

switch (true) {
   case path.includes('guide'):
   case path.includes('blogpost'):
  case path.includes('blog'): return('blog')
    break;
    case path.includes('cat'):
   case path.includes('plp'):
   case path.includes('/collections/'):
   case path.includes('/products/'):
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

// PLP Item Count Present

var regex = /[1-9]+[\d,.]*\s?(?:item|product|style)s?/ig
return regex.test(document.body.innerText)

// Question Mark In Title

var title = document.title;

switch (true) {
   case title.includes('?'):return('question')
  break;
  default:
    return('nothing');
}

// Question Terms in Title

var title = document.title;

switch (true) {
   case title.includes('who'):
   case title.includes('what'):
   case title.includes('when'):
   case title.includes('how'):
  case title.includes('why'): return('question')
  break;
  default:
    return('nope');
}

// Microformat Article

var articleSchema = document.querySelector('[itemtype="http://schema.org/Article"]')
if (articleSchema === null) {return('not present')} else {return('present')};

// Microformat ListItem

var listitem = document.querySelector('[itemtype="http://schema.org/ListItem"]')
if (listitem === null) {return('not present')} else {return('present')};

// Microformat Product

var productSchema = document.querySelector('[itemtype="http://schema.org/Product"]')
if (productSchema === null) {return('not present')} else {return('present')};
