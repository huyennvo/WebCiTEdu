

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



});
function insertCol(){
  let html = "";
  html += "<tr>";
  var row1 = document.getElementById("row1");
  row1.innerHTML = html;
  
  // var row2 = document.getElementById("row2");
  // var row3 = document.getElementById("row3");
  // var row4 = document.getElementById("row4");
  // var row5 = document.getElementById("row4");
  // var x1 = row1.insertCell(-1);
  // var x2 = row2.insertCell(-1);
  // var x3 = row3.insertCell(-1);
  // var x4 = row4.insertCell(-1);
  // var x5 = row5.insertCell(-1);
  // x1.innerHTML = "Buổi n+1";



 }