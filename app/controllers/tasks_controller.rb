class TasksController < ApplicationController

  def create

   @task = Task.create(task_params)
   list = List.find(task_params[:list_id])
   list.tasks << @task
   list.save
   render json: {task: @task}
  end

  def destroy
    @task = Task.find(params[:id])
    @list = @task.list
    @task.destroy
  end

  private

  def task_params
    params.permit(:list_id, :name, :priority)
  end

end