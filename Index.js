let currentslide=0;

const slide=document.querySelectorAll('.slide');

function Showslide(index){
    slide.forEach(slide=> slide.classList.remove('active'));
    slide[index].classList.add('active');
}
function nextslide(){
    currentslide ++;
    if (currentslide >= slide.length){
        currentslide = 0;
    }
    Showslide(currentslide);
}
setInterval(nextslide,6000);



