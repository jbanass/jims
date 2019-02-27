Rails.application.routes.draw do
  resources :inventory_item_components
  resources :materials
  resources :vendors
  resources :inventory_items
  resources :inventory_types
  resources :companies
  resources :users
  root 'application#hello'
end
