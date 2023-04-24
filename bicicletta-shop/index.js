




/*--------------------------------- CAROUSEL IMG ---------------------------------*/
const aboutUsCarousel = document.getElementById("aboutUs_image_carousel");
const aboutUsCarousel_childList = aboutUsCarousel.children;
var aboutUsCarousel_index = 0;

function aboutUsCarousel_showImage(){

    // get the current and next images
    var current_aboutUsCarousel_child = aboutUsCarousel_childList[aboutUsCarousel_index];
    aboutUsCarousel_index = (aboutUsCarousel_index + 1) % aboutUsCarousel_childList.length;
    var next_aboutUsCarousel_child = aboutUsCarousel_childList[aboutUsCarousel_index];

    // fade out the current image
    current_aboutUsCarousel_child.style.opacity = '0';

    // fade in the next image
    next_aboutUsCarousel_child.style.opacity = '1';
}

setInterval(aboutUsCarousel_showImage, 4000);
aboutUsCarousel_showImage();
/*--------------------------------- CAROUSEL IMG ---------------------------------*/