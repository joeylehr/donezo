class TasksController < ApplicationController

  def create
   @task = Task.create(task_params)
   render json: {task: @task}
  end

  private

  def task_params
    params.permit(:list_id, :name, :priority)
  end

end