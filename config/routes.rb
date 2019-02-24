Rails.application.routes.draw do
  resources :inventory_item_components
  resources :inventory_items
  resources :vendor_items
  resources :materials
  resources :inventory_types
  resources :vendors
  resources :users
  resources :companies
  root 'application#hello'
end
