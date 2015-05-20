$(document).ready(function(){

  $('#fetchOnce').click(function(){
    loadRemoteJs().done(function(){
      $(".block")
        .animate({
          backgroundColor: "red"
        }, 1000);
    });
  });

  $('#changeOlive').click( function(){
    loadRemoteJs().done(function(){
      $(".block")
        .animate({
          backgroundColor: "olive"
        }, 1000);
    });
  });

  $('#changeBlack').click( function(){
    loadRemoteJs().done(function(){
      $(".block")
        .animate({
          backgroundColor: "black"
        }, 1000);
    });
  });

  /*
    Creates a version of the function that can only be called one time.
    Repeated calls to the modified function will have no effect,
    returning the value from the original call.
  */
  function once(f) {
    var magicValue = new Object();
    var memo = magicValue;
    return function() {
      if(memo === magicValue) {
          memo = f.apply(this, arguments);
      }
      return memo;
    };
  };

  // Fetches remote javascript
  var loadRemoteJs = once(function() {
    return $.getScript('https://code.jquery.com/color/jquery.color.js');
  });

  /*
    Fetches a remote script with provided url and loads it in the dom
    Alternative of $.getScript to allow caching
  */
  $.cachedScript = function(url, options) {
    options = $.extend(options || {}, {
      dataType: 'script',
      cache: true,
      url: url
    });
    return jQuery.ajax(options);
  };

});
