// preload images
var img1 = new Image().src = "image/kub1.jpg"
var img2 = new Image().src = "image/puh.jpg"
var img3 = new Image().src = "image/bicon1.jpg"
var img4 = new Image().src = "image/perlyny1.jpg"
var img5 = new Image().src
var img6 = new Image().src
var img7 = new Image().src
var img8 = new Image().src
var img9 = new Image().src = "image/ruchka-klapan.jpg"
var img10 = new Image().src = "image/dwi_ruchky.jpg"
var img11 = new Image().src = "image/ruchka_vsh.jpg"
var img12 = new Image().src = "image/klapan.jpg"
var img13 = new Image().src = "image/metal.jpg"
var img14 = new Image().src = "image/beads.jpg"
var img15 = new Image().src = "image/shkira.jpg"

function setImage(imageSelect) {
 theImageIndex = imageSelect.options[imageSelect.selectedIndex].value;
 if (document.images)
     document.images[0].src = eval("img" + theImageIndex);
}

