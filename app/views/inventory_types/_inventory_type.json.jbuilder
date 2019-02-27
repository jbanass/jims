json.extract! inventory_type, :id, :name, :description, :color, :company_id, :inventory_items, :created_at, :updated_at
json.url inventory_type_url(inventory_type, format: :json)
