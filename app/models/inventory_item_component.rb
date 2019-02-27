class InventoryItemComponent < ApplicationRecord
  has_one :material
  has_many :inventory_item
  belongs_to :company
end
