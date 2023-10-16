canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add()
{
    img_imgTag = new Image();
    img_imgTag.onload = uploading;
    img_imgTag.src = img_image
}

function uploading()
{
    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_Keydown);

function my_Keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90))
    {
        alphabetKey();
        document.getElementById("d1").innerHTML="Você pressionou a tecla alfabeto";
        console.log("alphabet key");
    }
    else if(keyPressed >= 48 && keyPressed <= 57) 
    {
        numberKey();
        document.getElementById("d1").innerHTML="Você pressionou a tecla número";
        console.log("number key");
    }
    else if(keyPressed >= 37 && keyPressed <= 40) 
    {
        arrowKey();
        document.getElementById("d1").innerHTML="Você pressionou a tecla direcional";
        console.log("arrow key");
    }
    else if((keyPressed == 17) || (keyPressed == 18 || keyPressed == 27))
    {
        specialKey();
        document.getElementById("d1").innerHTML="Você pressionou ctrl/esc/alt";
        console.log("special key");
    }
    else
    {
        otherKey();
        document.getElementById("d1").innerHTML="Você pressionou um símbolo ou outra tecla";
        console.log("other key");
    }
}

function alphabetKey()
{
    img_image = "alfabeto.png";
    add();
}

function numberKey()
{
    img_image = "número.png";
    add();
}

function arrowKey()
{
    img_image = "direcional.png";
    add();
}

function specialKey()
{
    img_image = "especial.png";
    add();
}

function otherKey()
{
    img_image = "outras.png";
    add();
}