class CreateVendors < ActiveRecord::Migration[5.2]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :site
      t.integer :company_id

      t.timestamps
    end
  end
end
