class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :sku
      t.integer :price
      t.integer :vendor_id
      t.integer :company_id

      t.timestamps
    end
  end
end
