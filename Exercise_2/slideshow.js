var imgCount = 1;

var previous = function() {
  var image = document.getElementById('image');
  if (imgCount === 1) {
    imgCount = 7;
    image.src = 'episode' + imgCount + '.jpg';
  } else {
    imgCount--;
    image.src = 'episode' + imgCount + '.jpg';
  };
};

var next = function() {
  var image = document.getElementById('image');
  if (imgCount === 7) {
    imgCount = 1;
    image.src = 'episode' + imgCount + '.jpg';
  } else {
    imgCount++;
    image.src = 'episode' + imgCount + '.jpg';
  };
}
