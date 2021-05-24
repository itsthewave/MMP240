var num = 0;


imgArray = [
  ['images/Hnet.com-image.jpg'],
  ['images/Hnet.com-image(1).jpg'],
  ['images/Hnet.com-image(2).jpg'],
  ['images/Hnet.com-image(3).jpg']
]

//Function called by clicking on 'next' link
//Replace id name with the id name you gave to the img
function slideshowUp() {
  num++;
  num = num % imgArray.length;
  document.getElementById('mypic').src=imgArray[num];
}

//Function called by clicking on 'previous' link
function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  document.getElementById('mypic').src=imgArray[num];
}
