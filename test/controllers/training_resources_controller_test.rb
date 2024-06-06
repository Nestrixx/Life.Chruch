require "test_helper"

class TrainingResourcesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get training_resources_index_url
    assert_response :success
  end
end
