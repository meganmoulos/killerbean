# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_22_214107) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coffee_orders", force: :cascade do |t|
    t.bigint "invoice_id", null: false
    t.bigint "coffee_id", null: false
    t.string "size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_id"], name: "index_coffee_orders_on_coffee_id"
    t.index ["invoice_id"], name: "index_coffee_orders_on_invoice_id"
  end

  create_table "coffees", force: :cascade do |t|
    t.string "name"
    t.string "ingredients"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "time_ordered"
    t.integer "total_cost"
    t.integer "credit_applied"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_invoices_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.integer "credit"
    t.integer "card_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "coffee_orders", "coffees"
  add_foreign_key "coffee_orders", "invoices"
  add_foreign_key "invoices", "users"
end
