class CreateVendorItems < ActiveRecord::Migration[5.2]
  def change
    create_table :vendor_items do |t|
      t.integer :material_id
      t.string :vendor_sku
      t.string :url
      t.integer :price
      t.integer :vendor_id
      t.integer :company_id

      t.timestamps
    end
  end
end
