let carousel = document.getElementById("carousel");
let next = document.getElementById("carousel-next");
let prev = document.getElementById("carousel-prev");
let slides = [...document.querySelectorAll("#carousel>.carousel-images>.carousel-image")];
let images = [...document.querySelectorAll("#carousel>.carousel-images>.carousel-image>img")];

let slide = 0;

prev.onclick=_=>{
    slide--;
    slide = (slide + slides.length) % slides.length;
    update();
}
next.onclick=_=>{
    slide++;
    slide = slide % slides.length;
    update();
}

function update(){
    for(let s = 0; s < slides.length; s++){
        if(s == slide){
            slides[s].className = "carousel-image active";
        }
        else{
            slides[s].className = "carousel-image";
        }
    }
    updateSize();
}
function updateSize(){
    let img = images[slide];
    let [w,h] = [img.width, img.height];
    let [ww,hh] = [carousel.clientWidth, carousel.clientHeight];
    let aspect = w / h;
    let aaspect = ww / hh;
    if(aspect > aaspect){
        img.style.setProperty("width", ww+"px");
        img.style.setProperty("height", ww/aspect+"px");
    }
    else{
        img.style.setProperty("width", hh * aspect + "px");
        img.style.setProperty("height", hh+"px");
        img.height = hh;
        img.width = ww * aspect;
    }
}

window.onresize = updateSize;
update();