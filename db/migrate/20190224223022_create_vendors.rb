class CreateVendors < ActiveRecord::Migration[5.2]
  def change
    create_table :vendors do |t|
      t.string :name
      t.integer :company_id
      t.string :site

      t.timestamps
    end
  end
end
