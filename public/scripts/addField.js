// Find the button
document.querySelector("#add-time")

// When button is clicked
.addEventListener('click', cloneField)

// Execute an action
function cloneField() {
  // Duplicate the fields. Which fields?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  // Locate the fields. Which fields?
  const fields = newFieldContainer.querySelectorAll('input')

  // For each field, clean it
  fields.forEach(function(field) {
    // take the field at the moment and clean it
    field.value = ""
  })
  
  // Put it in the page. Where?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}