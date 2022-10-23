class CoffeesController < ApplicationController
  
    def index
        render json: Coffee.all
    end

end
