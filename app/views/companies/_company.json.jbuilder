json.extract! company, :id, :name, :street, :city, :state, :zip, :site, :inventory_types, :inventory_items, :inventory_item_components, :materials, :vendors, :created_at, :updated_at
json.url company_url(company, format: :json)
