class ListsController < ApplicationController

def index 
  @lists = List.where(user_id: current_user.id)
end


end
