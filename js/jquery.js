




// Drop Nav

$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

// drop menu

$(document).ready(function() {
  $(".dropdown-button").click(function() {
    var $button, $menu, $desc;
    $desc = $('.dropdown-description');
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.siblings('.dropdown-description').html($(this).html());
    });
  });
});





// width marker
$(window).resize(function() {
  $('.show-width').html('<p>' + $(window).width() + 'px' + '</p>');
});



( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


(function() {
  var container = document.querySelector( 'div.container' ),
    triggerBttn = document.getElementById( 'trigger-overlay' ),
    overlay = document.querySelector( 'div.overlay' ),
    closeBttn = overlay.querySelector( 'button.overlay-close' );
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };

  function toggleOverlay() {
    if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
      classie.remove( container, 'overlay-open' );
      classie.add( overlay, 'close' );
      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.propertyName !== 'visibility' ) return;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        classie.remove( overlay, 'close' );
      };
      if( support.transitions ) {
        overlay.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    }
    else if( !classie.has( overlay, 'close' ) ) {
      classie.add( overlay, 'open' );
      classie.add( container, 'overlay-open' );
    }
  }

  triggerBttn.addEventListener( 'click', toggleOverlay );
  closeBttn.addEventListener( 'click', toggleOverlay );
  

          // if ($(window).width() < 550) {
          //     toggleOverlay();
          // }


  
    // toggleOverlay();
})();
/**
 * jquery.wait - insert simple delays into your jquery method chains
 * @author Matthew Lee matt@madleedesign.com
 */

(function ($) {
    function jQueryDummy ($real, delay, _fncQueue) {
        // A Fake jQuery-like object that allows us to resolve the entire jQuery
        // method chain, pause, and resume execution later.

        var dummy = this;
        this._fncQueue = (typeof _fncQueue === 'undefined') ? [] : _fncQueue;
        this._delayCompleted = false;
        this._$real = $real;

        if (typeof delay === 'number' && delay >= 0 && delay < Infinity)
            this.timeoutKey = window.setTimeout(function () {
                dummy._performDummyQueueActions();
            }, delay);

        else if (delay !== null && typeof delay === 'object' && typeof delay.promise === 'function')
            delay.then(function () {
                dummy._performDummyQueueActions();
            });

        else if (typeof delay === 'string')
            $real.one(delay, function () {
                dummy._performDummyQueueActions();
            });

        else
            return $real;
    }

    jQueryDummy.prototype._addToQueue = function(fnc, arg){
        // When dummy functions are called, the name of the function and
        // arguments are put into a queue to execute later

        this._fncQueue.unshift({ fnc: fnc, arg: arg });

        if (this._delayCompleted)
            return this._performDummyQueueActions();
        else
            return this;
    };

    jQueryDummy.prototype._performDummyQueueActions = function(){
        // Start executing queued actions.  If another `wait` is encountered,
        // pass the remaining stack to a new jQueryDummy

        this._delayCompleted = true;

        var next;
        while (this._fncQueue.length > 0) {
            next = this._fncQueue.pop();

            if (next.fnc === 'wait') {
                next.arg.push(this._fncQueue);
                return this._$real = this._$real[next.fnc].apply(this._$real, next.arg);
            }

            this._$real = this._$real[next.fnc].apply(this._$real, next.arg);
        }

        return this;
    };

    $.fn.wait = function(delay, _queue) {
        // Creates dummy object that dequeues after a times delay OR promise

        return new jQueryDummy(this, delay, _queue);
    };

    for (var fnc in $.fn) {
        // Add shadow methods for all jQuery methods in existence.  Will not
        // shadow methods added to jQuery _after_ this!
        // skip non-function properties or properties of Object.prototype

        if (typeof $.fn[fnc] !== 'function' || !$.fn.hasOwnProperty(fnc))
            continue;

        jQueryDummy.prototype[fnc] = (function (fnc) {
            return function(){
                var arg = Array.prototype.slice.call(arguments);
                return this._addToQueue(fnc, arg);
            };
        })(fnc);
    }
})(jQuery);



$( 'button' ).click(function() {
  $( this ).toggleClass( "complete" );
});

$('#find-me.find-me').click(function(){
    
  $("input").wait(500).val('The Iron Yard?');
    
});

$( "#highlight.dropdown-button" ).click(function() {
  $( this ).toggleClass( "active" );
});




$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('ease');
  jQuery(this).parent().toggleClass('is-expanded');
  if($('.js-accordion-trigger').is('is-expanded')) {
        $('.js-accordion-trigger').removeAttr('is-expanded');
      }
  jQuery(this).siblings('#submenu').find('closed').slideToggle('ease');
  jQuery(this).siblings('#submenu').toggleClass('open');
  jQuery(this).siblings('#submenu').toggleClass('closed');
  if($('.js-accordion-trigger').is('open')) {
        $('.js-accordion-trigger').slideToggle('ease');
      }
  jQuery(this).children('#guide').find('closed').slideToggle('ease');
  jQuery(this).children('#guide').toggleClass('open');
  jQuery(this).children('#guide').toggleClass('closed');
  if($('.js-accordion-trigger').is('open')) {
        $('.js-accordion-trigger').slideToggle('ease');
      }
  jQuery(this).parent('#guide-img').find('close').slideToggle('ease');
  jQuery(this).parent('#guide-img').toggleClass('opened');
  jQuery(this).parent('#guide-img').toggleClass('close');
  if($('.js-accordion-trigger').is('opened')) {
        $('.js-accordion-trigger').slideToggle('ease');
      }
  
  e.preventDefault();
});







$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});






function formcheck() {
  var fields = $(".ss-item-required")
        .find("select, textarea, input").serializeArray();
  
  $.each(fields, function(i, field) {
    if (!field.value)
      alert(field.name + ' is required');
   }); 
  console.log(fields);
}

