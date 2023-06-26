function updateTextWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

// Function to update the HTML element
function updateElementText() {
  const element = document.getElementById('output');
  updateTextWithPromise().then((text) => {
    element.textContent = text;
  });
}

// Call the function to update the element text
updateElementText();