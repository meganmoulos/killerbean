class CoffeesController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: Coffee.all
    end


end
