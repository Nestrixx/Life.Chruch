document.addEventListener('DOMContentLoaded', function () {
  const updateButtons = document.querySelectorAll('.update-button');
  updateButtons.forEach((button) => {
    button.addEventListener('click', async function (e) {
      const id = this.dataset.id;
      e.preventDefault();
      const trainingData = await loadTrainingData(id);
      populateForm(trainingData);
    })
  })
})
const loadTrainingData = async (id) => {
  return await fetch(`/training_resources/${id}/fetch_training.json`).then((response) => {
    return response.json();
  }).then((data) => {
    return data;
  }).catch(() => console.log("failed to load training data"));
}

function populateForm(trainingData) {
  document.querySelector('input[name="training_datum[youtube_video_id]"]').value = trainingData.youtube_video_id || '';
  document.querySelector('input[name="training_datum[author]"]').value = trainingData.author || '';
  document.querySelector('input[name="training_datum[title]"]').value = trainingData.title || '';
  document.querySelector('textarea[name="training_datum[short_description]"]').value = trainingData.short_description || '';
  document.querySelector('textarea[name="training_datum[long_description]"]').value = trainingData.long_description || '';
  document.querySelector('input[name="training_datum[duration]"]').value = trainingData.duration || '';
  document.querySelector('input[name="training_datum[tags]"]').value = trainingData.tags || '';
}