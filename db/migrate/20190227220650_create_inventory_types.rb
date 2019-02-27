class CreateInventoryTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :inventory_types do |t|
      t.string :name
      t.string :description
      t.string :color
      t.integer :company_id

      t.timestamps
    end
  end
end
