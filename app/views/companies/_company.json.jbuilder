json.extract! company, :id, :name, :street, :city, :state, :zip, :site, :created_at, :updated_at
json.url company_url(company, format: :json)
