$(function(){
  $("#add_task input:submit").click(function(event){

    event.preventDefault();

    var list_id = $("#select_list").val();
    var name = $("#task_description").val();
    var priority = $("#task_priority").val();
    $("#task_description").val('')
    $("#task_priority").val("Medium")
    $.ajax({
      url: '/tasks',
      method: 'POST',
      data: {list_id: list_id, name: name, priority: priority}
    }).success(function(response, settings){
      var task_id = response.task.id,
          name = response.task.name,
          priority = response.task.priority,
          list_id = response.task.list_id;

      $("#list-" + list_id + " ul").append('<li id="task-' + task_id + '"><p><strong>' + name + '</strong> Priority: ' + priority + '</p><button class="delete-task-btn">donezo</button></li>');
    })
  })

  $(document).on('click', '.delete-task-btn', function(event){
    event.preventDefault();
    var li_id;
    var task_id;  
    li_id = $(this).parent().attr("id").split("-");
    task_id = li_id[(li_id.length-1)]
    var parent = $(this).parent();

    $.ajax({
      url: '/tasks/' + task_id,
      method: 'DELETE'
    })

    parent.remove();
  })

})


//     $('.delete-list-btn').click(function(event){
//     var div_id
//     var list_id
//     event.preventDefault();
//     div_id = $(this).parent().attr("id")
//     list_id = div_id[(div_id.length-1)];
//       $.ajax({
//       url: '/lists/' + list_id,
//       method: 'DELETE'
//     })
//     $(this).parent().remove();
// })