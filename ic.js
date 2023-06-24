document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];
  
  var formData = new FormData();
  formData.append('image', file);
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'compress.php', true);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        var output = document.getElementById('output');
        output.innerHTML = '<a href="' + response.compressedURL + '" download>Download Compressed Image</a>';
      } else {
        alert('Error compressing image: ' + response.error);
      }
    }
  };
  
  xhr.send(formData);
});
