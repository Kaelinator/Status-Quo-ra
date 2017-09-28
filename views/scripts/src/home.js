
const suggest = (data) => {
  
  const list = $('#suggestions').empty()

  data.forEach((item) => {
    $(list).append(`<li class='list-group-item list-group-item-action'>${item.user}</li>`)
  })
}

$('#searchBar').on('input focus', function() {

  const search = $(this).val()

  $.ajax({

    method: 'GET',
    url: '/rest',
    data: { query: search }
  })
  .done(suggest)
  .fail((err) => { console.log('err', err) })
})

$('#searchBar').on('focusout', function() {
  
  $('#suggestions').empty()
})
