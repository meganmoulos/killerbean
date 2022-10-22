# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

##users

5.times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        username: Faker::Lorem.words(number: 1),
        password_digest: Faker::Lorem.words(number: 1),
        credit: rand(100),
        card_number: Faker::Number.number(digits: 6)
    )
end

##Invoices
5.times do
    Invoice.create(
        user_id: rand(1..5),
        time_ordered: DateTime.now,
        total_cost: rand(1..100),
        credit_applied: 0
    )
end

##Coffee orders
5.times do
    CoffeeOrder.create(
    invoice_id: Faker::Number.between(from: 1, to: 5),
    coffee_id: Faker::Number.between(from: 1, to: 10),
    size: "Medium"
    )
end

##Coffees
10.times do 
    Coffee.create(
        name: Faker::Coffee.blend_name,
        ingredients: Faker::Food.ingredient,
        price: Faker::Number.between(from: 1, to: 15)
)
end
