const button = document.querySelector('button')

button.addEventListener('click', (e) => {
  const modal = document.querySelector('#modal')
  modal.style.display = "flex"
  toggleModal(modal)
})

const toggleModal = (modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target.id == "modal") {
      modal.style.display = "none"
    }
  })
}