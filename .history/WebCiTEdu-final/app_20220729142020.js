$(document).ready(function () {
  $('#dataTable').on('click', '#select-all', function(){
    // let a = $(this).getAttribute('class');
    //   alert(a);
      let a = $(this).attr("class"); 
      console.log(a);
    // if ($(this).hasClass('allChecked')) {
    //   let a = $(this).getAttribute('class');
    //   alert(a);
    //   $('input:checkbox[id^=a][type="checkbox"]').prop('checked', false);
    // } else {
    //   $('input:checkbox[id^=a][type="checkbox"]').prop('checked', true);
    // }
    $(this).toggleClass('allChecked');
  });
  // $("checkBox[id='checkbox1']")
  // $('#select-all2').click(function () {
  //   if ($(this).hasClass('allChecked')) {
  //     $('input:checkbox[id^="checkBox2"][type="checkbox"]').prop('checked', false);
  //   } else {
  //     $('input:checkbox[id^="checkBox2"][type="checkbox"]').prop('checked', true);
  //   }
  //   $(this).toggleClass('allChecked');
  // });   





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
  // let html3 = "";
  // let html4 = "";
  // let html5 = "";

  html1 +=`<th>Buổi ${stt} <button style="border: 0; background-color: #F8F9FC" id="select-all" class="checkBox${stt}"><i
  class="fa-solid fa-check-double" style="color:green;"  data-toggle="tooltip" data-placement="right" title="Chọn tất cả"></i></button><br><button type="button"
class="btn" data-toggle="modal" data-target="#exampleModal">
Thêm
</button>  <button class="pull-right btn btn-default btn-condensed hide-column" data-toggle="tooltip" data-placement="bottom" title="Hide Column">
<i class="fa fa-eye-slash"></i>  
</button> </th>`;
$("#row1").append(html1);
for(let i = 0; i < 5; i++) {
  html2 += `<td><input type="checkbox" id="checkBox${stt}" name="name" value="name">
  <select name="cars" id="cars" >
    <option value="saab" selected></option>
      <option value="saab" >Có phép</option>
      <option value="opel">Không phép</option>
      <option value="audi">Đi muộn</option>
    </select>
  </td>`;
  $( `#row${i + 2}` ).html(html2); //Dc chua ?
}
  stt++;
});

});
