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


      $('#lists').append('<div class="sandwich" id="list-' + id + '"><h2>' + name + '</h2><button class="delete-list-btn">bye</button><ul></ul></div>');
      $('#select_list').append('<option value='+ id + '>' + name + '</option>');

    })

  })
})