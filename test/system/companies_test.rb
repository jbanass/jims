require "application_system_test_case"

class CompaniesTest < ApplicationSystemTestCase
  setup do
    @company = companies(:one)
  end

  test "visiting the index" do
    visit companies_url
    assert_selector "h1", text: "Companies"
  end

  test "creating a Company" do
    visit companies_url
    click_on "New Company"

    fill_in "Address1", with: @company.address1
    fill_in "Address2", with: @company.address2
    fill_in "Address3", with: @company.address3
    fill_in "City", with: @company.city
    fill_in "Image", with: @company.image
    fill_in "Name", with: @company.name
    fill_in "Site", with: @company.site
    fill_in "State", with: @company.state
    fill_in "Zip", with: @company.zip
    click_on "Create Company"

    assert_text "Company was successfully created"
    click_on "Back"
  end

  test "updating a Company" do
    visit companies_url
    click_on "Edit", match: :first

    fill_in "Address1", with: @company.address1
    fill_in "Address2", with: @company.address2
    fill_in "Address3", with: @company.address3
    fill_in "City", with: @company.city
    fill_in "Image", with: @company.image
    fill_in "Name", with: @company.name
    fill_in "Site", with: @company.site
    fill_in "State", with: @company.state
    fill_in "Zip", with: @company.zip
    click_on "Update Company"

    assert_text "Company was successfully updated"
    click_on "Back"
  end

  test "destroying a Company" do
    visit companies_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Company was successfully destroyed"
  end
end
