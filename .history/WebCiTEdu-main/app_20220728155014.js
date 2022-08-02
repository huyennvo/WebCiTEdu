

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


 let stt = 1;
 $("#insertCol").click(function(){
  let html1 = "";
  let html2 = "";
  let html3 = "";
  let html4 = "";
  let html5 = "";
  html1 +=`<th>Buổi ${stt} <button style="border: 0; background-color: #F8F9FC" id="select-all1"><i
  class="fa-solid fa-check-double" style="color:green;"  data-toggle="tooltip" data-placement="right" title="Chọn tất cả"></i></button><br><button type="button"
class="btn" data-toggle="modal" data-target="#exampleModal">
Thêm
</button> </th>`;
html2 += `<td><input type="checkbox" id="checkBox1" name="name" value="name">
<select name="cars" id="cars" >
  <option value="saab" selected></option>
    <option value="saab" >Có phép</option>
    <option value="opel">Không phép</option>
    <option value="audi">Đi muộn</option>
  </select>
</td>`;
html3 += `<td><input type="checkbox" id="checkBox1" name="name" value="name">
<select name="cars" id="cars" >
  <option value="saab" selected></option>
    <option value="saab" >Có phép</option>
    <option value="opel">Không phép</option>
    <option value="audi">Đi muộn</option>
  </select>
</td>`;
html4 += `<td><input type="checkbox" id="checkBox1" name="name" value="name">
<select name="cars" id="cars" >
  <option value="saab" selected></option>
    <option value="saab" >Có phép</option>
    <option value="opel">Không phép</option>
    <option value="audi">Đi muộn</option>
  </select>
</td>`;
html5 += `<td><input type="checkbox" id="checkBox1" name="name" value="name">
<select name="cars" id="cars" >
  <option value="saab" selected></option>
    <option value="saab" >Có phép</option>
    <option value="opel">Không phép</option>
    <option value="audi">Đi muộn</option>
  </select>
</td>`;
  $("#row1").append(html1);
  $("#row2").append(html2);
  $("#row3").append(html3);
  $("#row4").append(html4);
  $("#row5").append(html5);

  stt++;
});
});
