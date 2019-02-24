class VendorItemsController < ApplicationController
  before_action :set_vendor_item, only: [:show, :edit, :update, :destroy]

  # GET /vendor_items
  # GET /vendor_items.json
  def index
    @vendor_items = VendorItem.all
  end

  # GET /vendor_items/1
  # GET /vendor_items/1.json
  def show
  end

  # GET /vendor_items/new
  def new
    @vendor_item = VendorItem.new
  end

  # GET /vendor_items/1/edit
  def edit
  end

  # POST /vendor_items
  # POST /vendor_items.json
  def create
    @vendor_item = VendorItem.new(vendor_item_params)

    respond_to do |format|
      if @vendor_item.save
        format.html { redirect_to @vendor_item, notice: 'Vendor item was successfully created.' }
        format.json { render :show, status: :created, location: @vendor_item }
      else
        format.html { render :new }
        format.json { render json: @vendor_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vendor_items/1
  # PATCH/PUT /vendor_items/1.json
  def update
    respond_to do |format|
      if @vendor_item.update(vendor_item_params)
        format.html { redirect_to @vendor_item, notice: 'Vendor item was successfully updated.' }
        format.json { render :show, status: :ok, location: @vendor_item }
      else
        format.html { render :edit }
        format.json { render json: @vendor_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vendor_items/1
  # DELETE /vendor_items/1.json
  def destroy
    @vendor_item.destroy
    respond_to do |format|
      format.html { redirect_to vendor_items_url, notice: 'Vendor item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vendor_item
      @vendor_item = VendorItem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def vendor_item_params
      params.require(:vendor_item).permit(:material_id, :vendor_sku, :url, :price, :vendor_id, :company_id)
    end
end