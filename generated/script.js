var urlParams = new URLSearchParams(window.location.search);
var key = urlParams.get('key');

// Display the key
document.getElementById('keyDisplay').innerText = key;

// Copy to clipboard function
function copyToClipboard() {
  // Create a temporary textarea element
  var tempTextArea = document.createElement("textarea");

  // Set the value of the textarea to the key
  tempTextArea.value = key;

  // Append the textarea to the body
  document.body.appendChild(tempTextArea);

  // Select the text inside the textarea
  tempTextArea.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the textarea
  document.body.removeChild(tempTextArea);

  // Alert the user that the key has been copied
  alert("Copied to clipboard: " + key);
}