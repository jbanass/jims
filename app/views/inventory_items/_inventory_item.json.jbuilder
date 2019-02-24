json.extract! inventory_item, :id, :sku, :name, :description, :inventory_type_id, :company_id, :created_at, :updated_at
json.url inventory_item_url(inventory_item, format: :json)
