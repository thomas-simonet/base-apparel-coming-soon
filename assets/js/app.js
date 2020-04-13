;window.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault()

    var email_field = document.getElementById('email')
    var email_error = document.getElementById('invalid-email-address')

    if ( email_field.validity.typeMismatch ) {
      email_error.innerHTML = "Please provide a valid email address."
      email_field.classList.add('has-error')
    }
    else if ( email_field.validity.valueMissing ) {
      email_error.innerHTML = "Field cannot be empty."
      email_field.classList.add('has-error')
    }

    if ( email_field.validity.valid ) {
      email_error.innerHTML = "Thanks for subscribing !"
      email_field.classList.remove('has-error')
    }

    return false
  })
});