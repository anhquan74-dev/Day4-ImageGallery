

var imageElements = document.querySelectorAll('.image img');
var closeIcon = document.querySelector('.gallery__icon-close');
var prevIcon = document.querySelector('.prev-icon');
var nextIcon = document.querySelector('.next-icon');
var galleryElement = document.querySelector('.gallery');
var imageGallery = document.querySelector('.gallery__image img')

var currentIndex;

function showGallery() {
    if(currentIndex == 0){
        prevIcon.style.display = 'none';
    }else if(currentIndex == imageElements.length - 1){
        nextIcon.style.display = 'none';
    }else{
        prevIcon.style.display = 'block';
        nextIcon.style.display = 'block';
    }

    imageGallery.src = imageElements[currentIndex].src;  
    galleryElement.classList.add("show");
    
}

imageElements.forEach(function(item, index){
    item.addEventListener('click',function(){
        currentIndex = index;
        showGallery(); 
    })
})

closeIcon.addEventListener('click',function(){
    galleryElement.classList.remove("show");
})

prevIcon.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex--;
        showGallery(); 
    }   
})

nextIcon.addEventListener('click', function(){
    if(currentIndex < imageElements.length -1){
        currentIndex++;
        showGallery(); 
    } 
})

document.addEventListener('keydown',function(e){
    if(e.keyCode = 27){
        galleryElement.classList.remove("show");
    }
})