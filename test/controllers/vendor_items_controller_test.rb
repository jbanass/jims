require 'test_helper'

class VendorItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @vendor_item = vendor_items(:one)
  end

  test "should get index" do
    get vendor_items_url
    assert_response :success
  end

  test "should get new" do
    get new_vendor_item_url
    assert_response :success
  end

  test "should create vendor_item" do
    assert_difference('VendorItem.count') do
      post vendor_items_url, params: { vendor_item: { company_id: @vendor_item.company_id, material_id: @vendor_item.material_id, price: @vendor_item.price, url: @vendor_item.url, vendor_id: @vendor_item.vendor_id, vendor_sku: @vendor_item.vendor_sku } }
    end

    assert_redirected_to vendor_item_url(VendorItem.last)
  end

  test "should show vendor_item" do
    get vendor_item_url(@vendor_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_vendor_item_url(@vendor_item)
    assert_response :success
  end

  test "should update vendor_item" do
    patch vendor_item_url(@vendor_item), params: { vendor_item: { company_id: @vendor_item.company_id, material_id: @vendor_item.material_id, price: @vendor_item.price, url: @vendor_item.url, vendor_id: @vendor_item.vendor_id, vendor_sku: @vendor_item.vendor_sku } }
    assert_redirected_to vendor_item_url(@vendor_item)
  end

  test "should destroy vendor_item" do
    assert_difference('VendorItem.count', -1) do
      delete vendor_item_url(@vendor_item)
    end

    assert_redirected_to vendor_items_url
  end
end
