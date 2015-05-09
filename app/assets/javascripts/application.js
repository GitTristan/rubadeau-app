// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
$(document).ready(function() {
  setInterval(rotateImages, 4000);
});

function rotateImages(){
  $("#photoShow").animate({marginLeft: "-400px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-800px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-1200px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-1600px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-2000px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-2400px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-2800px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-3200px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-3600px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-4000px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-4400px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-4800px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-5200px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-5600px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-6000px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-6400px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-6800px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-7200px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-7600px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-8000px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-8400px"}, 1000).delay(4000);


  $("#photoShow").animate({marginLeft: "-0px"}, 1000).delay(4000);
}
