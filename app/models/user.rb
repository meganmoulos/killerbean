class User < ApplicationRecord
    has_many :invoices
    has_many :coffee_orders, through: :invoices
end
