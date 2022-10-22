class CreateCoffeeOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :coffee_orders do |t|
      t.references :invoice, null: false, foreign_key: true
      t.references :coffee, null: false, foreign_key: true
      t.string :size

      t.timestamps
    end
  end
end
