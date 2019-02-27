class InventoryItem < ApplicationRecord
  belongs_to :inventory_type
  belongs_to :company
  has_many :inventory_item_components
end
