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
  // populate form
  document.querySelector('input[name="training_datum[youtube_video_id]"]').value = trainingData.youtube_video_id || '';
  document.querySelector('input[name="training_datum[author]"]').value = trainingData.author || '';
  document.querySelector('input[name="training_datum[title]"]').value = trainingData.title || '';
  document.querySelector('textarea[name="training_datum[short_description]"]').value = trainingData.short_description || '';
  document.querySelector('textarea[name="training_datum[long_description]"]').value = trainingData.long_description || '';
  document.querySelector('input[name="training_datum[duration]"]').value = trainingData.duration || '';
  document.querySelector('input[name="training_datum[tags]"]').value = trainingData.tags || '';

  // modify form for update
  addOrUpdateHiddenMethodField(trainingData);
}

function addOrUpdateHiddenMethodField(trainingData) {
  const form = document.getElementById('training-form');
  // modify submission route to edit route instead of create new
  form.action = `/training_resources/${trainingData.id}`;

  // appends a hidden form field to our form and setting the value to patch for the input.
  const hiddenMethodField = document.createElement('input');
  hiddenMethodField.type = 'hidden';
  hiddenMethodField.name = '_method';
  hiddenMethodField.value = "patch";
  form.appendChild(hiddenMethodField);

}