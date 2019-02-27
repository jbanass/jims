class Company < ApplicationRecord
    has_many :inventory_types
    has_many :inventory_items
    has_many :inventory_item_components
    has_many :materials
    has_many :vendors
end
