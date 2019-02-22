class CreateVendors < ActiveRecord::Migration[5.2]
  def change
    create_table :vendors do |t|
      t.string :name, null:false
      t.integer :company_id, null:false
      t.string :site

      t.timestamps
    end
  end
end
