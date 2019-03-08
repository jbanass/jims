Rails.application.routes.draw do
  resources :inventory_item_components
  resources :materials
  resources :vendors
  resources :inventory_items
  resources :inventory_types
  resources :companies do
    collection do
      get 'get_vendor_select'
      get 'get_inventory_types_select'
      get 'get_inventory_item_select'
      get 'get_material_select'
    end
  end
  resources :users
  root 'application#hello'
end
