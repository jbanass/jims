class CreateInventoryItems < ActiveRecord::Migration[5.2]
  def change
    create_table :inventory_items do |t|
      t.string :sku
      t.string :name
      t.string :description
      t.integer :inventory_type_id
      t.integer :company_id

      t.timestamps
    end
  end
end
