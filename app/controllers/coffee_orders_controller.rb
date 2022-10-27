class CoffeeOrdersController < ApplicationController

    skip_before_action :authorize, only: [:index, :update, :show]

    def index
        if @current_user
            render json: @current_user.coffee_orders
        else
            render json: CoffeeOrder.all
        end
        
    end

    def show
        coffee = CoffeeOrder.find(params[:id])
        render json: coffee
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

    def update
        coffee = CoffeeOrder.find(params[:id])
        coffee.update(coffee_order_params)
        render json: coffee
    end

    private 

    def coffee_order_params
        params.permit(:coffee_id, :invoice_id, :size)
    end
end
