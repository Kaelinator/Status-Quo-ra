$('#searchBar').on('input', function() {

  const search = $(this).val()

  $.ajax({

    method: 'GET',
    url: '/rest',
    data: { query: search }
  })
  .done((data) => { console.log('done', data) })
  .fail((err) => { console.log('err', err) })

})