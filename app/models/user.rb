class User < ApplicationRecord
    has_many :invoices
    has_many :coffee_orders, through: :invoices

    has_secure_password
end
