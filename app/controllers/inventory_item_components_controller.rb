class InventoryItemComponentsController < ApplicationController
  before_action :set_inventory_item_component, only: [:show, :edit, :update, :destroy]

  # GET /inventory_item_components
  # GET /inventory_item_components.json
  def index
    @inventory_item_components = InventoryItemComponent.all
  end

  # GET /inventory_item_components/1
  # GET /inventory_item_components/1.json
  def show
  end

  # GET /inventory_item_components/new
  def new
    @inventory_item_component = InventoryItemComponent.new
  end

  # GET /inventory_item_components/1/edit
  def edit
  end

  # POST /inventory_item_components
  # POST /inventory_item_components.json
  def create
    @inventory_item_component = InventoryItemComponent.new(inventory_item_component_params)

    respond_to do |format|
      if @inventory_item_component.save
        format.html { redirect_to @inventory_item_component, notice: 'Inventory item component was successfully created.' }
        format.json { render :show, status: :created, location: @inventory_item_component }
      else
        format.html { render :new }
        format.json { render json: @inventory_item_component.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /inventory_item_components/1
  # PATCH/PUT /inventory_item_components/1.json
  def update
    respond_to do |format|
      if @inventory_item_component.update(inventory_item_component_params)
        format.html { redirect_to @inventory_item_component, notice: 'Inventory item component was successfully updated.' }
        format.json { render :show, status: :ok, location: @inventory_item_component }
      else
        format.html { render :edit }
        format.json { render json: @inventory_item_component.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /inventory_item_components/1
  # DELETE /inventory_item_components/1.json
  def destroy
    @inventory_item_component.destroy
    respond_to do |format|
      format.html { redirect_to inventory_item_components_url, notice: 'Inventory item component was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inventory_item_component
      @inventory_item_component = InventoryItemComponent.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def inventory_item_component_params
      params.require(:inventory_item_component).permit(:material_id, :inventory_item_id, :quantity_needed, :company_id, :vendor_id)
    end
end
