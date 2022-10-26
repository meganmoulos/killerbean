class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :time_ordered, :total_cost, :credit_applied
  has_one :user

  # method to show total cost?
end
