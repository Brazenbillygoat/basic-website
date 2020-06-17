//instanciating variables for showing slider value



//javascript for showing the slider choice
function updateTextInput(val) {
  // if (!document.getElementById('textInput').value) {
  //   document.getElementById('textInput').value = '' 
  // }
  if (val == 10) {
    return document.getElementById('text-input').value = 'You\'re hired!' 
  }
  document.getElementById('text-input').value = val 
}