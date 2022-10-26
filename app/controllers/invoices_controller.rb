class InvoicesController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: Invoice.all
    end

    def show
        invoice = Invoice.find(params[:id])
        render json: invoice
    end


    def create
        invoice = Invoice.create!(invoice_params)
        render json: invoice, status: :created
    end

    def destroy 
        coffee = Coffee.find(params[:id])
        coffee.destroy 
        head :no_content
    end

    private

    def invoice_params
        params.permit(:coffee_order_id, :user_id, :time_ordered, :total_cost, :credit_applied)
    end
end
