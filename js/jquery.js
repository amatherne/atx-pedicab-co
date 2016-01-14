$(function(){
    $('#datetime12').combodate();  
});


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






// $('radio03').addEvent('change',function(E){
//     if(E.target.checked){
//         enableInput();
//     }
// });

// $$('.normal').each(function(radio){
//     radio.addEvent('change',function(E){
//          if(E.target.checked){
//              disableInput();
//          }
//     });
// });
    

// function enableInput(){
//     $('custom-party-size').set('disabled','');
//     $('custom-party-size').setStyle('background-color','#fff');
// }

// function disableInput(){
//     $('custom-party-size').set('disabled','disabled');
//     $('custom-party-size').setStyle('background-color','#d4d4d4');
// }



// // drop menu

// $(document).ready(function() {
//   $(".dropdown-button").click(function() {
//     var $button, $menu, $desc;
//     $desc = $('.dropdown-description');
//     $button = $(this);
//     $menu = $button.siblings(".dropdown-menu");
//     $menu.toggleClass("show-menu");
//     $menu.children("li").click(function() {
//       $menu.removeClass("show-menu");
//       $button.siblings('.dropdown-description').html($(this).html());
//     });
//   });
// });





// // width marker
// $(window).resize(function() {
//   $('.show-width').html('<p>' + $(window).width() + 'px' + '</p>');
// });




// $( 'button' ).click(function() {
//   $( this ).toggleClass( "complete" );
// });

// $('#find-me.find-me').click(function(){
    
//   $("input").wait(500).val('The Iron Yard?');
    
// });

// $( "#highlight.dropdown-button" ).click(function() {
//   $( this ).toggleClass( "active" );
// });






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








(function(document) {
    "use strict";
    
    var hidden_el  = document.getElementsByClassName("hidden-content"),
        control_el = document.getElementsByClassName("toggle-content");
        
    if (hidden_el.length < 1 || control_el.length < 1) {
        return;
    }

    // Get the elements
    hidden_el  = hidden_el[0];
    control_el = control_el[0];

    control_el.onclick = function() {
        var element_classes = (" "+hidden_el.className+" ").replace(/[\n\t\r]/g, " "),
            remove_class    = "slide-down",
            add_class       = "slide-up",
            is_showing      = element_classes.indexOf(" "+remove_class+" ") > -1;

        if ( ! is_showing) {
            // Switch variable values
            remove_class = [add_class, add_class = remove_class][0];
        }

        // Remove the previous class (if present) and add the new class
        hidden_el.className = (element_classes.replace(" "+remove_class+" ", "") + " "+add_class+" ").trim();

        return false;
    };
})(document);


(function(document) {
    "use strict";
    
    var hidden_el  = document.getElementsByClassName("hidden-content-two"),
        control_el = document.getElementsByClassName("toggle-content-two");
        
    if (hidden_el.length < 1 || control_el.length < 1) {
        return;
    }

    // Get the elements
    hidden_el  = hidden_el[0];
    control_el = control_el[0];

    control_el.onclick = function() {
        var element_classes = (" "+hidden_el.className+" ").replace(/[\n\t\r]/g, " "),
            remove_class    = "slide-down",
            add_class       = "slide-up",
            is_showing      = element_classes.indexOf(" "+remove_class+" ") > -1;

        if ( ! is_showing) {
            // Switch variable values
            remove_class = [add_class, add_class = remove_class][0];
        }

        // Remove the previous class (if present) and add the new class
        hidden_el.className = (element_classes.replace(" "+remove_class+" ", "") + " "+add_class+" ").trim();

        return false;
    };
})(document);




(function(document) {
    "use strict";
    
    var hidden_el  = document.getElementsByClassName("hidden-content-three"),
        control_el = document.getElementsByClassName("toggle-content-three");
        
    if (hidden_el.length < 1 || control_el.length < 1) {
        return;
    }

    // Get the elements
    hidden_el  = hidden_el[0];
    control_el = control_el[0];

    control_el.onclick = function() {
        var element_classes = (" "+hidden_el.className+" ").replace(/[\n\t\r]/g, " "),
            remove_class    = "slide-down",
            add_class       = "slide-up",
            is_showing      = element_classes.indexOf(" "+remove_class+" ") > -1;

        if ( ! is_showing) {
            // Switch variable values
            remove_class = [add_class, add_class = remove_class][0];
        }

        // Remove the previous class (if present) and add the new class
        hidden_el.className = (element_classes.replace(" "+remove_class+" ", "") + " "+add_class+" ").trim();

        return false;
    };
})(document);


function formcheck() {
  var fields = $(".ss-item-required")
        .find("select, textarea, input").serializeArray();
  
  $.each(fields, function(i, field) {
    if (!field.value)
      alert(field.name + ' is required');
   }); 
  console.log(fields);
}

$('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
});
