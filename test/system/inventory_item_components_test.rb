require "application_system_test_case"

class InventoryItemComponentsTest < ApplicationSystemTestCase
  setup do
    @inventory_item_component = inventory_item_components(:one)
  end

  test "visiting the index" do
    visit inventory_item_components_url
    assert_selector "h1", text: "Inventory Item Components"
  end

  test "creating a Inventory item component" do
    visit inventory_item_components_url
    click_on "New Inventory Item Component"

    fill_in "Company", with: @inventory_item_component.company_id
    fill_in "Inventory item", with: @inventory_item_component.inventory_item_id
    fill_in "Material", with: @inventory_item_component.material_id
    fill_in "Quantity needed", with: @inventory_item_component.quantity_needed
    fill_in "Vendor", with: @inventory_item_component.vendor_id
    click_on "Create Inventory item component"

    assert_text "Inventory item component was successfully created"
    click_on "Back"
  end

  test "updating a Inventory item component" do
    visit inventory_item_components_url
    click_on "Edit", match: :first

    fill_in "Company", with: @inventory_item_component.company_id
    fill_in "Inventory item", with: @inventory_item_component.inventory_item_id
    fill_in "Material", with: @inventory_item_component.material_id
    fill_in "Quantity needed", with: @inventory_item_component.quantity_needed
    fill_in "Vendor", with: @inventory_item_component.vendor_id
    click_on "Update Inventory item component"

    assert_text "Inventory item component was successfully updated"
    click_on "Back"
  end

  test "destroying a Inventory item component" do
    visit inventory_item_components_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Inventory item component was successfully destroyed"
  end
end
