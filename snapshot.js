var page = require('webpage').create();

page.open('http://google.com', function() {
    // being the actual size of the headless browser
    page.viewportSize = { width: 768, height: 1024 };
      
    var clipRect = page.evaluate(function(){
      return document.querySelector('#hplogo').getBoundingClientRect();
    });
    page.clipRect = {
      top:    clipRect.top,
      left:   clipRect.left,
      width:  clipRect.width,
      height: clipRect.height
    };
      
    page.render('google.png');
      phantom.exit();
});
