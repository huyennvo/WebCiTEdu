

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


$(function() {
  // on init
  $(".table-hideable .hide-col").each(HideColumnIndex);

  // on click
  $('.hide-column').click(HideColumnIndex)

  function HideColumnIndex() {
      var $el = $(this);
      var $cell = $el.closest('th,td')
      var $table = $cell.closest('table')

      // get cell location - https://stackoverflow.com/a/4999018/1366033
      var colIndex = $cell[0].cellIndex + 1;
      // find and hide col index
      $table.find("tbody tr, thead tr")
          .children(":nth-child(" + colIndex + ")")
          .addClass('hide-col')

      // show restore footer
      $table.find(".footer-restore-columns").show()
  }

  // restore columns footer
  $(".restore-columns").click(function(e) {
      var $table = $(this).closest('table')
      $table.find(".footer-restore-columns").hide()
      $table.find("th, td")
          .removeClass('hide-col');

  })

  $('[data-toggle="tooltip"]').tooltip({
      trigger: 'hover'
  })

})



 // on init
 $(".table-hideable .hide-col").each(HideColumnIndex);

 // on click
 $('.hide-column').click(HideColumnIndex)

 function HideColumnIndex() {
     var $el = $(this);
     var $cell = $el.closest('th,td')
     var $table = $cell.closest('table')

     // get cell location - https://stackoverflow.com/a/4999018/1366033
     var colIndex = $cell[0].cellIndex + 1;
     // find and hide col index
     $table.find("tbody tr, thead tr")
         .children(":nth-child(" + colIndex + ")")
         .addClass('hide-col')

     // show restore footer
     $table.find(".footer-restore-columns").show()
 }

 // restore columns footer
 $(".restore-columns").click(function(e) {
     var $table = $(this).closest('table')
     $table.find(".footer-restore-columns").hide()
     $table.find("th, td")
         .removeClass('hide-col');

 })

 $('[data-toggle="tooltip"]').tooltip({
     trigger: 'hover'
 })


 function insertCol(){
  
 }
});
