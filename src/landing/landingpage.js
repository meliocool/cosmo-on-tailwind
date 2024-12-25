// --- Image Carousel (Hero Section) ---
const imageContainer = document.getElementById("image-container")
const imageBullets = document.querySelectorAll(".image-bullet") // Use a different class for image bullets
let currentImageIndex = 0

function slideToImage(index) {
  const imageWidth = imageContainer.offsetWidth
  const translateX = -index * imageWidth
  imageContainer.style.transform = `translateX(${translateX}px)`

  imageBullets.forEach((bullet, i) => {
    bullet.classList.toggle("bg-white", i === index)
  })

  currentImageIndex = index
}

imageBullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    const index = parseInt(bullet.dataset.index, 10)
    slideToImage(index)
  })
})

slideToImage(0) // Initial slide

// --- Album Carousel ---
const videoContainer = document.getElementById("video-container")
const albumBullets = document.querySelectorAll(".album-bullet") // Use a different class for album bullets
const videos = document.querySelectorAll("#video-container > div")
const prevAlbumButton = document.getElementById("prev-album")
const nextAlbumButton = document.getElementById("next-album")
const navbarHeight = document.querySelector("nav").offsetHeight
const videoContainerHeight = `calc(100vh - ${navbarHeight}px)`

// Set initial height for video containers
videos.forEach((video) => {
  video.style.minHeight = videoContainerHeight
})

let activeAlbumIndex = 0
const numAlbumSlides = videos.length

function updateAlbumCarousel() {
  const offset = -activeAlbumIndex * 100
  videoContainer.style.transform = `translateX(${offset}%)`

  albumBullets.forEach((bullet, index) => {
    if (index === activeAlbumIndex) {
      bullet.classList.add("bg-white")
    } else {
      bullet.classList.remove("bg-white")
    }
  })
}

albumBullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    activeAlbumIndex = parseInt(bullet.dataset.index)
    updateAlbumCarousel()
  })
})

prevAlbumButton.addEventListener("click", () => {
  if (activeAlbumIndex === 0) {
    activeAlbumIndex = 8
  } else {
    activeAlbumIndex -= 1
  }
  updateAlbumCarousel()
})

nextAlbumButton.addEventListener("click", () => {
  if (activeAlbumIndex === 8) {
    activeAlbumIndex = 0
  } else {
    activeAlbumIndex += 1
  }
  updateAlbumCarousel()
})

updateAlbumCarousel() // Initial slide
