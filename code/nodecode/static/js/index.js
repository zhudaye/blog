$(function() {
  $('#showMyPhoto').on('click', function() {
    $('#myWx').show(300)
  })

  $('#myWx').on('click', function() {
    $(this).hide(300)
  })
})