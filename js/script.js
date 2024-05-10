const image = document.getElementById("img");
const images = ["image/mercedes_benz.jpg", "image/Mercedes-Benz_2.jpg"];
let currentIndex = 0;

function changeImage() {
  image.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 4000);
