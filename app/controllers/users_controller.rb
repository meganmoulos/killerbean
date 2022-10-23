class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index 
        render json: User.all 
    end
    
    def show
        render json: @current_user
    end
    
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :credit, :card_number)
    end
end
