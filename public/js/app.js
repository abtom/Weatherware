var main = function(){
  $(function(){
    $("#site").cycle({
        fx : "scrollHorz",
        next : ".next a",
        prev : ".prev a",
        startingSlide : 1,
        timeout : 0
    });
  });
};


$(document).ready(main);

$(document).ready(function(){
          var button = $("button");
      $('button').click(function(){
        button.text(button.data("text-swap"));
      });

    $("input:checkbox").on('click', function(){
        var $box = $(this);
        if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });
});

$('#make_url').click(function(e) {
    e.preventDefault();
    var url = $('#linha').val();
    open(url, '_self');
});

$(".forecast").click(function(){
        woopra.track("forecast_click");
});

$('.notification').click(function(){
    alert("It's windy today, bring a jacket!");
    $(this).fadeOut('slow');

  });

$('.no').click(function(){
    $('img').removeClass('notification');

});

$('.yes').click(function(){
    $('img').addClass('notification');
});