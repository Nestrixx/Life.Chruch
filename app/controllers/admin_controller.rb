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

        Rails.logger.info "Author: #{params[:author]}"
        Rails.logger.info "Title: #{params[:title]}"
        Rails.logger.info "Short Description: #{params[:short_description]}"
        Rails.logger.info "Long Description: #{params[:long_description]}"
        Rails.logger.info "YouTube Video ID: #{params[:youtube_video_id]}"
        Rails.logger.info "Duration: #{params[:duration]}"
        Rails.logger.info "Tags: #{params[:tags]}"
    end

    private

    def training_data_params
        params.require(:training_datum).permit(:youtube_video_id, :author, :title, :short_description, :long_description, :image, :duration, :tags)
    end
end
