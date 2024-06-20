
class YoutubeController < ApplicationController
    def fetch_youtube_details
        video_id = params[:video_id]
        video_details = get_video_details(video_id)  # Assume get_video_details is defined to use the YouTube API
        if video_details
          render json: video_details
        else
          render json: { error: "Video details not found" }, status: :not_found
        end
      end


      private

      def get_video_details(video_id)
          youtube = Google::Apis::YoutubeV3::YouTubeService.new
          youtube.key = ENV['YOUTUBE_API_KEY']
  
          begin
              video_response = youtube.list_videos('snippet,contentDetails', id: video_id)
              video = video_response.items.first
              return nil unless video
  
              {
                  author: video.snippet.channel_title,
                  title: video.snippet.title,
                  short_description: video.snippet.description,
                  long_description: video.snippet.description,
                  featured_image: video.snippet.thumbnails.high.url,
                  duration: video.content_details.duration
              }
          rescue Google::Apis::Error => e
              puts "An error occurred: #{e}"
              return nil
          end
      end
end
