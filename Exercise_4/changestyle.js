var submit = function() {
  var redValueBorder = document.getElementById('redValueBorder');
  var greenValueBorder = document.getElementById('greenValueBorder');
  var blueValueBorder = document.getElementById('blueValueBorder');
  var widthBorder = document.getElementById('widthBorder');
  var redValueBack = document.getElementById('redValueBack');
  var greenValueBack = document.getElementById('greenValueBack');
  var blueValueBack = document.getElementById('blueValueBack');
  var textArea = document.getElementById('text');

  if (redValueBorder.value === '' && greenValueBorder.value == '' && blueValueBorder.value === '') {
    //do nothing
  } else if (isNaN(parseInt(redValueBorder.value)) || parseInt(redValueBorder.value) < 0 ||
      parseInt(redValueBorder.value) > 255) {
      alert("Warning: Red Value for the border is out of range.");
  } else if (isNaN(parseInt(greenValueBorder.value)) ||
              parseInt(greenValueBorder.value) < 0 ||
              parseInt(greenValueBorder.value) > 255) {
    alert("Warning: Green Value for the border is out of range.");
  } else if (isNaN(parseInt(blueValueBorder.value)) ||
              parseInt(blueValueBorder.value) < 0 ||
              parseInt(blueValueBorder.value) > 255) {
    alert("Warning: Blue Value for the border is out of range.");
  } else {
    textArea.style.borderColor = 'rgb(' + parseInt(redValueBorder.value) + ', ' +
                            parseInt(greenValueBorder.value) + ', ' +
                            parseInt(blueValueBorder.value) + ')';
  }

  if (widthBorder.value === '') {
    //do nothing
  } else if (isNaN(parseInt(widthBorder.value)) || parseInt(widthBorder.value) < 0 || parseInt(widthBorder.value) > 1000) {
    alert("Warning: Width for the border is out of range.");
  } else {
    textArea.style.borderWidth = widthBorder.value;
  }

  if (redValueBack.value === '' && greenValueBack.value == '' && blueValueBack.value === '') {
  } else if (isNaN(parseInt(redValueBack.value)) || parseInt(redValueBack.value) < 0 || parseInt(redValueBack.value) > 255) {
    alert("Warning: Red Value for the background is out of range.");
  } else if (isNaN(parseInt(greenValueBack.value)) || parseInt(greenValueBack.value) < 0 || parseInt(greenValueBack.value) > 255) {
    alert("Warning: Green Value for the background is out of range.");
  } else if (isNaN(parseInt(blueValueBack.value)) || parseInt(blueValueBack.value) < 0 || parseInt(blueValueBack.value) > 255) {
    alert("Warning: Blue Value for the background is out of range.");
  } else {
    textArea.style.backgroundColor = 'rgb(' + redValueBack.value + ', ' +
                            greenValueBack.value + ', ' + blueValueBack.value + ')';
  }
}
