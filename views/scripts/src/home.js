'use strict'

$('#searchBar').on('input', function() {

  const search = $(this).val()

  $.ajax({

    type: 'GET',
    url: '',
    success: (data) => {
      
    }
  })

})