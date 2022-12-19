// swiper
const carousel = new bootstrap.Carousel('#myCarousel')

// Pop up form

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// POP UP FORM AFTER reservation
function openPopup(){
  document.getElementById("modal").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


// Filter form

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}

// Sign up form

function openForm3() {
  document.getElementById("myForm3").style.display = "block";
}

function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}
