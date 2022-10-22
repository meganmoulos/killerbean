class CoffeeOrdersController < ApplicationController
    has_many :coffees
    belongs_to :invoice
end
