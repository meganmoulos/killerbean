class UsersController < ApplicationController
    has_many :invoices
    has_many :coffee_orders, through: :invoices
end
