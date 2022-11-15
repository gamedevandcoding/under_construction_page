const carousel_loading = document.getElementById("carousel-loading");
const iframe_loading = document.getElementById("iframe-loading");

var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        carousel_loading.style.animationPlayState = "paused";
        carousel_loading.style.display = "none";
        /*console.log( 'All images loaded!' );*/
    }
}


function iframe_loaded(){
    iframe_loading.style.animationPlayState = "paused";
    iframe_loading.style.display = "none";
    console.log( 'Iframe loaded!' );
}