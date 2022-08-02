

$(document).ready(function () {
  $('#select-all1').click(function () {
    if ($(this).hasClass('allChecked')) {
      $('input:checkbox[id^="checkBox1"][type="checkbox"]').prop('checked', false);
    } else {
      $('input:checkbox[id^="checkBox1"][type="checkbox"]').prop('checked', true);
    }
    $(this).toggleClass('allChecked');
  })
  $('#select-all2').click(function () {
    if ($(this).hasClass('allChecked')) {
      $('input:checkbox[id^="checkBox2"][type="checkbox"]').prop('checked', false);
    } else {
      $('input:checkbox[id^="checkBox2"][type="checkbox"]').prop('checked', true);
    }
    $(this).toggleClass('allChecked');
  });   
  $('#select-all3').click(function () {
    if ($(this).hasClass('allChecked')) {
      $('input:checkbox[id^="checkBox3"][type="checkbox"]').prop('checked', false);
    } else {
      $('input:checkbox[id^="checkBox3"][type="checkbox"]').prop('checked', true);
    }
    $(this).toggleClass('allChecked');
  })
  $('#select-all4').click(function () {
  if ($(this).hasClass('allChecked')) {
    $('input:checkbox[id^="checkBox4"][type="checkbox"]').prop('checked', false);
  } else {
    $('input:checkbox[id^="checkBox4"][type="checkbox"]').prop('checked', true);
  }
  $(this).toggleClass('allChecked');



})
$('[data-toggle="tooltip"]').tooltip();   
});
