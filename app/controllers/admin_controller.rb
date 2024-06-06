class AdminController < ApplicationController
    def index
    end

    def create
        #add to database
    Rails.logger.info "Author: #{params[:author]}"
    Rails.logger.info "Title: #{params[:title]}"
    Rails.logger.info "Short Description: #{params[:short_description]}"
    Rails.logger.info "Long Description: #{params[:long_description]}"
    Rails.logger.info "YouTube Video ID: #{params[:youtube_video_id]}"
    Rails.logger.info "Duration: #{params[:duration]}"
    Rails.logger.info "Tags: #{params[:tags]}"
    end
end
