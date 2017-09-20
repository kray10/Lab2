var valididatePassword = function() {
  var pass1 = document.getElementById('password1').value;
  var pass2 = document.getElementById('password2').value;

  if (pass1.length < 8 || pass2.length < 8) {
    alert('Password is less than 8 characters.');
  } else if (pass1 !== pass2) {
    alert('Passwords do not match');
  } else {
    alert('Password succesfully validated');
  }
}
