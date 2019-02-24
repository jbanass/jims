json.extract! company, :id, :name, :address1, :address2, :address3, :city, :state, :zip, :image, :site, :created_at, :updated_at
json.url company_url(company, format: :json)
