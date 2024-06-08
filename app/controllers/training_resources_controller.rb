class TrainingResourcesController < ApplicationController
  before_action :set_training_resources, only: [:destroy]
  
  def index
    @training_data = TrainingDatum.all
  end

  def destroy
    @training_resources.destroy
    respond_to do |format|
      format.html { redirect_to training_resources_url, notice: 'Training was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_training_resources
      @training_resources = TrainingDatum.find(params[:id])
    end

end
