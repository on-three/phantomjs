var page = require('webpage').create();
var system = require('system');

var args = system.args
var url = 'http://google.com'
var selector = '#hplogo'
var file = 'google.png'

if(args.length > 1)
{
  url = args[1];
}
if(args.length > 2)
{
  selector = args[2];
}
if(args.length > 3)
{
  file = args[3]
}

page.open(url, function() {
    // being the actual size of the headless browser
    page.viewportSize = { width: 768, height: 1024 };
    var s = "#hplogo"      
    var clipRect = page.evaluate(function(s){
      //return document.querySelector('#hplogo').getBoundingClientRect();
      return document.querySelector(s).getBoundingClientRect();
      //var selector = '#hplogo'
    },s);
    page.clipRect = {
      top:    clipRect.top,
      left:   clipRect.left,
      width:  clipRect.width,
      height: clipRect.height
    };
      
    page.render(file);
      phantom.exit();
});
