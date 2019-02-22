class CreateInventoryComponents < ActiveRecord::Migration[5.2]
  def change
    create_table :inventory_components do |t|
      t.integer :material_id
      t.integer :inventory_id
      t.integer :quantity_needed
      t.integer :company_id
      t.integer :vendor_id

      t.timestamps
    end
  end
end
