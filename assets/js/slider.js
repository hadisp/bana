jQuery(document).ready(function(){

    // function detect_active(){
    //       var get_active = $("#dp-slider .dp_item:first-child").data("class");
    //       $("#dp-dots li").removeClass("active");
    //       $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
    //       UIkit.slider('#hs-brand-slider').show(get_active -1);
    //   }
      $("#dp-next").click(function(){
          var total = $(".dp_item").length;
          $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
          $.each($('.dp_item'), function (index, dp_item) {
              $(dp_item).attr('data-position', index + 1);
          });
          detect_active();
      });
      $("#dp-pre").click(function(){
          var total = $(".dp_item").length;
          $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
          $.each($('.dp_item'), function (index, dp_item) {
              $(dp_item).attr('data-position', index + 1);
          });
          detect_active();    
      });

      $("#dp-next2").click(function(){
        var total = $("#slider2").length;
        console.log(total);
      });
    });