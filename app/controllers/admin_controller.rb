class AdminController < ApplicationController
    def index
    end

    def create
        @training_data = TrainingDatum.new(training_data_params)
        if @training_data.save
            redirect_to admin_path, notice: 'Training Data was successfully created.'
        else
            render :index, status: :unprocessable_entity
        end
    end

    private

    def training_data_params
        params.require(:training_datum).permit(:youtube_video_id, :author, :title, :short_description, :long_description, :image, :duration, :tags)
    end
end
