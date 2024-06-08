class AddImageToTraingData < ActiveRecord::Migration[7.1]
  def change
    add_column :training_data, :image, :string
  end
end
