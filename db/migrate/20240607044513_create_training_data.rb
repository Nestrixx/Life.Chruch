class CreateTrainingData < ActiveRecord::Migration[7.1]
  def change
    create_table :training_data do |t|
      t.string :youtube_video_id
      t.string :author
      t.string :title
      t.text :short_description
      t.text :long_description
      t.integer :duration
      t.string :tags

      t.timestamps
    end
  end
end
