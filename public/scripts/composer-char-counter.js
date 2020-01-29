$(document).ready(function() {
  $("#text-input").keyup( function() {
    $("#counter")[0].innerText = 140 - this.value.length;
    if (this.value.length > 140 ){
      $("#counter").addClass("redText");
    } else {
      $("#counter").removeClass("redText");
    }
    });
  });  
