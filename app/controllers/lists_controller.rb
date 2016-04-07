class ListsController < ApplicationController

def index 
  @lists = List.where(user_id: current_user.id)
end

def create
  @list = List.new(list_params)
  @list.user_id = current_user.id
  @list.save

  render json: {list: @list}
end

def destroy
  binding.pry
  @list = List.find(params[:id])
  @list.destroy
end

private

def list_params
  params.permit(:name)
end

end
