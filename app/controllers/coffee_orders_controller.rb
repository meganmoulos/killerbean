class CoffeeOrdersController < ApplicationController

    def index
        render json: CoffeeOrder.all
    end

    def create 
        if (params[:invoice_id] == nil)
            new_invoice = @current_user.invoices.create
            params[:invoice_id] = new_invoice.id
            order = CoffeeOrder.create!(coffee_order_params)
            render json: order, status: :created
        else
            order = CoffeeOrder.create!(coffee_order_params)
            render json: order, status: :created
        end
    end

    private 

    def coffee_order_params
        params.permit(:coffee_id, :invoice_id, :size)
    end
end
