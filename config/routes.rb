Rails.application.routes.draw do
  resources :coffee_orders
  resources :coffees
  resources :invoices
  resources :users

  get '/authorized_user', to: 'users#show'
  post '/login', to: 'sessions#create'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
