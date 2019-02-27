class Material < ApplicationRecord
  belongs_to :vendor
  belongs_to :company
  has_many :inventory_item_components
end
