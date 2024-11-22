 
const style = `
    * {
    margin: 0;
    padding: 0;
    font-family: "Roboto";
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

header .hero_text .button{
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
header .hero_text button:hover{
     transform: scale(1.1);
}

.section-1{
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-1 .cinema_background{
    height: 500px;
    width:100%;
  background-position: center;
  background-size: cover;
    background-image: url(images/cinema_hall.webp);
    text-justify: center;
    text-align: center;
}

.section-1 .hero_text{
    border-radius: 12px;
    background-color: #000000B2;
    color: white;
    backface-visibility: 0.7;
    padding: 50 400;
    margin-top: 70;
}

.hero_text h1{
    padding-bottom: 40;
    font-weight: 900;
    font-size: 40;
}
.hero_text p{
    padding-bottom: 50;
    font-size: 15;
}

.hero_text button{
    cursor: pointer;
    border-radius: 20px;
    border: none;
    padding: 10px 50px;
    transition: transform 0.3s ease;
}

.hero_text button:hover{
     transform: scale(1.1);  
}

.hero_text .button-1{
    margin-right:20px;
    background-color: #8d0000;
    color:	#d4d4d4;
    font-weight: 700;
}

.hero_text .button-2{
    margin-left:20px;
    background-color: #d4d4d4;
    color:	#8d0000;
    font-weight: 700;
}

.section-2{
    display: flex;
    height: 215px;
}

.section-2 .people_background{
    min-height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(images/benefits_of_watching_movies_in_a_cinema_versus_at_home_1.jpg);
    filter: grayscale(100%);
    text-align: center;
}

.section-2 .catchphrase{
    color: white;
    font-weight: 900;
    text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000, 5px 5px 0 #000;
    font-size: 30px;
    margin-top: 80px;
}

.section-3{
    background-color: #2b2a2a;
    padding: 20px 20px;
}

.section-3 .products-list{
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.products-list .product{
    padding: 15px 15px;
    border-style:solid;
    border-radius: 20px;
    border-color: #8d0000;
    border-width: 5px;
    text-align: center;
    color: #d4d4d4;
    transition: transform 0.3s ease;
}

.product:hover{
     transform: scale(1.05);  
}
.product img{
    max-width: 100%;
    height: 350px;
    border-radius: 30px;
}

.product h4{
    margin-top: 30px;
    font-size: 23;
    font-weight: 900;
    text-transform: uppercase;
}

.product p{
    margin-top: 20px;
}

#ele_footer{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: 100px;
      color: white;
    cursor:pointer;
  }

  footer{ 
    bottom: 0; 
    width: 100%;
    background: linear-gradient(#8d0000, #cc1919);;
    height: 60px;
  }

  #container{
    display: flex;
    width:100%;
    height: 60px;
    justify-content: end;
  }

  #sociaux{
    width: 100px;
    height: 60px;
    margin-right: 300px;
  }
`
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = style;
document.head.appendChild(styleSheet);