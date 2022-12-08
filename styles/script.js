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
const openModalButtons = document.querySelectorAll('[data-model-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventlistener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventlistener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal){
  if (modal == null) return
  modal.classList.add('active')
  overlay.classlist.add('active')
}

function closeModal(modal){
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classlist.remove('active')
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
