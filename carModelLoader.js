function loadCarModels() {
  fetch('carModels.txt')
    .then(response => response.text())
    .then(data => {
      var values = data.split('\n');
      var selectElement = document.getElementById('carModel');
      values.forEach(function(value) {
        var option = document.createElement('option');
        option.value = value;
        option.text = value;
        selectElement.appendChild(option);
      });
    });
}

// Exporting the function to make it accessible to other files
export { loadCarModels };