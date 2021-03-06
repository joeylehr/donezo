$(function(){
  $('#add_list input:submit').click(function(event){
    event.preventDefault();


    var list = $('#list_title').val()
    $('#list_title').val("");

    $.ajax({
      url: '/lists',
      method: 'POST',
      data: {name: list}
   
    }).success(function(response, settings){

      var name = response.list.name;
      var id = response.list.id;


      $('#lists').append('<div class="sandwich" id="list-' + id + '"><h2>' + name + '</h2><button class="delete-list-btn">donezo</button><ul></ul></div>');
      $('#select_list').append('<option value='+ id + '>' + name + '</option>');

    })
  })
    $(document).on('click', '.delete-list-btn', function(event){
    var div_id
    var list_id
    event.preventDefault();
    div_id = $(this).parent().attr("id").split("-")
    list_id = div_id[(div_id.length-1)];
      $.ajax({
      url: '/lists/' + list_id,
      method: 'DELETE'
    })


    $('#select_list option[value="'+ list_id+'"]').remove();

    $(this).parent().remove();
})
})
