const images = [
    "Images/actu_1.png",
    "Images/actu_2.png",
    "Images/actu_3.png",
  ];
  
  let currentImageIndex = 0;
  const sliderImage = document.getElementById('actu-image');
  
  const changeImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImage.src = images[currentImageIndex];
  };
  
  setInterval(changeImage, 5000);