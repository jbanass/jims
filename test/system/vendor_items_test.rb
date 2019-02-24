require "application_system_test_case"

class VendorItemsTest < ApplicationSystemTestCase
  setup do
    @vendor_item = vendor_items(:one)
  end

  test "visiting the index" do
    visit vendor_items_url
    assert_selector "h1", text: "Vendor Items"
  end

  test "creating a Vendor item" do
    visit vendor_items_url
    click_on "New Vendor Item"

    fill_in "Company", with: @vendor_item.company_id
    fill_in "Material", with: @vendor_item.material_id
    fill_in "Price", with: @vendor_item.price
    fill_in "Url", with: @vendor_item.url
    fill_in "Vendor", with: @vendor_item.vendor_id
    fill_in "Vendor sku", with: @vendor_item.vendor_sku
    click_on "Create Vendor item"

    assert_text "Vendor item was successfully created"
    click_on "Back"
  end

  test "updating a Vendor item" do
    visit vendor_items_url
    click_on "Edit", match: :first

    fill_in "Company", with: @vendor_item.company_id
    fill_in "Material", with: @vendor_item.material_id
    fill_in "Price", with: @vendor_item.price
    fill_in "Url", with: @vendor_item.url
    fill_in "Vendor", with: @vendor_item.vendor_id
    fill_in "Vendor sku", with: @vendor_item.vendor_sku
    click_on "Update Vendor item"

    assert_text "Vendor item was successfully updated"
    click_on "Back"
  end

  test "destroying a Vendor item" do
    visit vendor_items_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Vendor item was successfully destroyed"
  end
end
