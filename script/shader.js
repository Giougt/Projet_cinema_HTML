const styles = `
*{ margin: 0;
    padding: 0; 
}
header .cinema_background {
    width: 100%;
    text-align: center;
}
header .hero_text {
    background: linear-gradient(#cc1919, #8d0000);
    color: white;
    height: 60px;
}
.hero_text .button {
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
.hero_text button:hover {
    transform: scale(1.1);
}
.hero_text .button-1 {
    margin-right: 20px;
    background-color: #d4d4d4;
    color: #000000;
    font-weight: 700;
}
.hero_text .button-2 {
    background-color: #d4d4d4;
    color: #000000;
    font-weight: 700;
    margin-right: 20px;
}
.hero_text .button-3 {
    margin-right: 20px;
    background-color: #d4d4d4;
    color: #000000;
    font-weight: 700;
}
body {
    background-color: #2b2a2a;
}
section1 {
    display: flex;
}
h1 {
    color: #8d0000;
    margin-bottom: 50px;
    font-size: 60px;
}
para {
    color: #d4d4d4;
    display: flex;
    flex-direction: column;
    letter-spacing: 1px;
    font-size: 20px;
    width: 600px;
    height: 500px;
    margin-bottom: 25px;
    margin-left: 25px;
    border: 1rem solid;
    border-radius: 20px;
    border-color: #8d0000;
}
.p1 {
    margin-bottom: 50px;
}
h2 {
    color: #8d0000;
    margin-top: 40px;
    margin-bottom: 10px;
    text-decoration: underline;
}
para2 {
    letter-spacing: 1px;
    font-size: 15px;
}
.p2 {
    margin-bottom: 15px;
}
.pic {
    width: 550px;
    height: 450px;
    top: 800px;
    left: 720px;
    margin-top: 25px;
    margin-left: 100px;
}
.carte {
    width: 700px;
    height: 400px;
    top: 800px;
    left: 720px;
    margin-top: 50px;
    margin-left: 370px;
    margin-bottom: 100px;
}
#ele_footer {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
    color: white;
    cursor: pointer;
}
footer {
    bottom: 0;
    width: 100%;
    background: linear-gradient(#8d0000, #cc1919);
    height: 60px;
}
#container {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: end;
}
#sociaux {
    width: 100px;
    height: 60px;
    margin-right: 300px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
