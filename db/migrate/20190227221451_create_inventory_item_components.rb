class CreateInventoryItemComponents < ActiveRecord::Migration[5.2]
  def change
    create_table :inventory_item_components do |t|
      t.integer :quantity_needed
      t.integer :material_id
      t.integer :inventory_item_id
      t.integer :company_id

      t.timestamps
    end
  end
end
