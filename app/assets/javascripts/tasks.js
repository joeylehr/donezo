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

      $("#list-" + list_id + " ul").append('<li id="task-' + task_id + '"><p><strong>' + name + '</strong> Priority: ' + priority + '</p><button class="delete-task-btn">byeeeee</button></li>');
    })
  })

  $('.delete-task-btn').click(function(event){
    event.preventDefault();

    $(this).parent().remove();
  })

})

