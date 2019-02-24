require 'test_helper'

class InventoryItemComponentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @inventory_item_component = inventory_item_components(:one)
  end

  test "should get index" do
    get inventory_item_components_url
    assert_response :success
  end

  test "should get new" do
    get new_inventory_item_component_url
    assert_response :success
  end

  test "should create inventory_item_component" do
    assert_difference('InventoryItemComponent.count') do
      post inventory_item_components_url, params: { inventory_item_component: { company_id: @inventory_item_component.company_id, inventory_item_id: @inventory_item_component.inventory_item_id, material_id: @inventory_item_component.material_id, quantity_needed: @inventory_item_component.quantity_needed, vendor_id: @inventory_item_component.vendor_id } }
    end

    assert_redirected_to inventory_item_component_url(InventoryItemComponent.last)
  end

  test "should show inventory_item_component" do
    get inventory_item_component_url(@inventory_item_component)
    assert_response :success
  end

  test "should get edit" do
    get edit_inventory_item_component_url(@inventory_item_component)
    assert_response :success
  end

  test "should update inventory_item_component" do
    patch inventory_item_component_url(@inventory_item_component), params: { inventory_item_component: { company_id: @inventory_item_component.company_id, inventory_item_id: @inventory_item_component.inventory_item_id, material_id: @inventory_item_component.material_id, quantity_needed: @inventory_item_component.quantity_needed, vendor_id: @inventory_item_component.vendor_id } }
    assert_redirected_to inventory_item_component_url(@inventory_item_component)
  end

  test "should destroy inventory_item_component" do
    assert_difference('InventoryItemComponent.count', -1) do
      delete inventory_item_component_url(@inventory_item_component)
    end

    assert_redirected_to inventory_item_components_url
  end
end
