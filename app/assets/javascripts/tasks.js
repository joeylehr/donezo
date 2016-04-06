$(function(){
  $("#add_task input:submit").click(function(event){
    event.preventDefault();
    var list_id = $("#select_list").val();
    var name = $("#task_description").val()
    var priority = $("#task_priority").val()
    $("#task_description").val('')
    $("#task_priority").val("Medium")
    $.ajax({
      url: '/tasks',
      method: 'POST',
      data: {list_id: list_id, name: name, priority: priority}

    })
  })

})