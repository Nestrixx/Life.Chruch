class TrainingResourcesController < ApplicationController
  before_action :set_training_resources, only: [:destroy]
  
  def index
    @training_data = TrainingDatum.all
  end

  def create
    @training_data = TrainingDatum.new(training_data_params)
    if @training_data.save
      redirect_to training_resources_url, notice: 'Training Data was successfully created.'
    else
      render :index, status: :unprocessable_entity
    end
  end

  def destroy
    @training_resources.destroy
    respond_to do |format|
      format.html { redirect_to training_resources_url, notice: 'Training was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def update
    @training_resources = TrainingDatum.find(params[:id])
    if @training_resources.update(training_data_params)
      respond_to do |format|
        format.html { redirect_to training_resources_url, notice: 'Training data was successfully updated.' }
        format.json { render json: @training_resources }
      end
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def fetch_training
    training_resource = TrainingDatum.find(params[:id])
    respond_to do |format|
      format.json { render json: training_resource }
    end
  end

  private
  def set_training_resources
    @training_resources = TrainingDatum.find(params[:id])
  end

  def training_data_params
    params.require(:training_datum).permit(:youtube_video_id, :author, :title, :short_description, :long_description, :image, :duration, :tags)
  end  
end
