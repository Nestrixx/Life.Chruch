class TrainingDetailsController < ApplicationController
    def show
        @training_datum = TrainingDatum.find_by(id: params[:id])
        if @training_datum.nil?
            redirect_to "/training_resources", alert: "Training data not found."
            return
        end
    end
end
