class CoffeeOrder < ApplicationRecord
  belongs_to :invoice
  belongs_to :coffee
end
