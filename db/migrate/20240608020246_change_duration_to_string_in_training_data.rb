class ChangeDurationToStringInTrainingData < ActiveRecord::Migration[7.1]
  def change
    change_column :training_data, :duration, :string
  end
end
