class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients, :price
end
