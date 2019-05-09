const dogImages = Array.from(document.getElementsByClassName('dog-images')) 
const btn = document.querySelector('#move-image-forward')
const btnBack = document.querySelector('#move-image-back')

const moveDogImages = () => {
  dogImages.forEach((image) => {
    if (index === dogImages.length) {
      index = 0
    }
    image.style.display = 'none';
    dogImages[index].style.display = 'block'
  })
}

let index = 0
moveDogImages()

btn.addEventListener('click', () => {
  index++
  moveDogImages()
})

btnBack.addEventListener('click', () => {
  if (index === 0) {
    index = dogImages.length - 1
    moveDogImages()
    return null
  }
  index--
  moveDogImages()
})