;
$(document).ready(function () {

  $('input[type=tel]').on('focus', function () {
    $(this).val('+380')
  })

});
