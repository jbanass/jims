class InventoryType < ApplicationRecord
  belongs_to :company
  has_many :inventory_items
end
