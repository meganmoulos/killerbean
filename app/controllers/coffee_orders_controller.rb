class CoffeeOrdersController < ApplicationController
    skip_before_action :authorize

    def index
        render json: CoffeeOrder.all
    end

    def create 
        order = CoffeeOrder.create!(coffee_order_params)
        render json: order, status: :created
    end

    private 

    def coffee_order_params
        params.permit(:coffee_id, :invoice_id, :size)
    end
end
