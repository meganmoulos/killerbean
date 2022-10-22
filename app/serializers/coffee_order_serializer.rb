class CoffeeOrderSerializer < ActiveModel::Serializer
  attributes :id, :size
  has_one :invoice
  has_one :coffee
end
