const imageContainer = document.getElementById("image-container")
const bullets = document.querySelectorAll(".bullet")
let currentImageIndex = 0

function slideToImage(index) {
  const imageWidth = window.innerWidth
  const translateX = -index * imageWidth
  imageContainer.style.transform = `translateX(${translateX}px)`

  bullets.forEach((bullet, i) => {
    bullet.classList.toggle("bg-white", i === index)
  })

  currentImageIndex = index
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    const index = parseInt(bullet.dataset.index, 10)
    slideToImage(index)
  })
})
