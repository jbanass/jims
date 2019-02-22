class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :code, null: false
      t.string :name, null: false
      t.string :address1
      t.string :address2
      t.string :address3
      t.string :city
      t.string :state
      t.string :zip
      t.text :image
      t.string :site

      t.timestamps
    end
  end
end
