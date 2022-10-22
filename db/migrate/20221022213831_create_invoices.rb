class CreateInvoices < ActiveRecord::Migration[7.0]
  def change
    create_table :invoices do |t|
      t.references :user, null: false, foreign_key: true
      t.datetime :time_ordered
      t.integer :total_cost
      t.integer :credit_applied

      t.timestamps
    end
  end
end
