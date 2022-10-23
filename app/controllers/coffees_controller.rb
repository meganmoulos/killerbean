class CoffeesController < ApplicationController
    belongs_to :coffee_order

    def index
        render json: Coffee.all
    end

    
end
