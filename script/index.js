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

const styles = `
*{ margin: 0;
    padding: 0; 
}
body{
    background-color: #2b2a2a;
}
.titre{
    margin-top: 30px;
    border: solid;
    border-width: 10px;
    border-color: #8d0000;
    color:  white;
    font-weight: 900;
    text-shadow: 0 0 1px #000, 0 0 1px #000;
    text-align: center;
}

#block1{
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
}


.film{
    max-width:  500px;  
    max-height: 300px; 
    transform: scale(1);
}

#film_1{
    padding-left: 100px;
}

#film_3{
    padding-right: 70px;
}


img:hover {
    transform: scale(1.1);
  }

#block_description{
    display: flex;
    margin-bottom: 80px;
  }

#note{
    float: left;
    color: #656464;
    background-color: #ffffff;
    border-radius: 20px;
    text-align: center;
    margin-left: 60px;
    width: 155px;
}

#contain_affiche{
    background-color: #656464;
    color: white;
    width: 250px;
    border-radius: 20px;
    text-align: center;
}


#block2{
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
}

.description{
    margin-top: 30px;
}

/*  effet pour les etoiles  */

.rating {
    font-size: 0; 
    direction: rtl;
    padding-top: 30px;
  }

.star {
    width: 30px; 
    height: auto; 
    transition: filter 0.2s ease-in-out; 
  }

.star:hover,
.star:hover ~ .star {
  filter: grayscale(0%) brightness(150%); 
}
/*    --------------------- fin   */ 

#titre_note{
    padding-top: 10px;
}

#film_4{
    padding-left: 100px;
}

#film_6{
    padding-right: 70px;
}

p{
    background-color: #8d0000;
    border-radius: 20px;
}

.actu {
    width: 800px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.actu_parent{
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

#actu-image{
    width: 100%;
    height:100%;
}

h2{
    color: white;
    font-weight: 900; 
    margin-top: 40px;
    font-size: 20px;
    text-align: center;

}

#ele_footer{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
    color: #ffffff;
    cursor: pointer;
}

footer{
  bottom: 0; 
  width: 100%;
  background: linear-gradient(#8d0000, #cc1919);
  height: 60px;
}

#container{
  display: flex;
  width:100%;
  height: 60px;
  justify-content: end;
}

#sociaux{
    margin-right: 300px;
}

header{
    display: flex;
    justify-content: center;
    align-items: center;
}

header .cinema_background{
    width:100%;
    text-align: center;
}

header .hero_text{
    
    background: linear-gradient(#cc1919, #8d0000);
    color: white;
    height: 60px;

}
.hero_text .button{
    cursor: pointer;
    border-radius: 20px;
    border: 1mm ridge rgb(255, 255, 255);
    padding: 10px 50px;
    transition: transform 0.3s ease;
    margin-top: 10px;
    background-color: #8d0000;
    color: #ffffff;
    font-weight: 700;
    margin-right: 20px;
}
.hero_text button:hover{
     transform: scale(1.1);
}
 `

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet); 