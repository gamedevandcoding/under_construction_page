var mouseDown = false;
var startX;
var scrollLeftDrag;

const subscription_scroll = document.getElementById("subscription_plans__scroll");
const horizontal_scrolls = document.getElementsByClassName("horizontal_media_scroll");
var isMobileBroswer = navigator.userAgentData.mobile;

if(!isMobileBroswer && !window.matchMedia("(max-width: 465px)").matches){

    for (let i = 0; i < horizontal_scrolls.length; i++){

        //Mouse Wheel
        horizontal_scrolls[i].addEventListener('wheel', function(event){
            if(horizontal_scrolls[i].scrollWidth > horizontal_scrolls[i].clientWidth){
                event.preventDefault();
                var delta = Math.sign(event.deltaY);
                var scrollAmount = 50;
                horizontal_scrolls[i].scrollLeft += delta * scrollAmount;
            }
            /*
            if(window.matchMedia("(min-height: 865px)").matches){}
            if(horizontal_scrolls[i].scrollLeft != 0 && delta == -1 || horizontal_scrolls[i].scrollLeft != (horizontal_scrolls[i].scrollWidth - horizontal_scrolls[i].clientWidth) && delta == 1){}
            var autoScroll = delta * 200;
            window.scrollBy({ top: autoScroll, left: 0, behavior: "smooth"});
            */

        }, { passive: false } );



        //Mouse Drag
        horizontal_scrolls[i].addEventListener('mousedown', function(event){
            mouseDown = true;
            startX = event.pageX - horizontal_scrolls[i].offsetLeft;
            scrollLeftDrag = horizontal_scrolls[i].scrollLeft;
        
        });
        horizontal_scrolls[i].addEventListener('mouseleave', function(){
            mouseDown = false;  
        });
        horizontal_scrolls[i].addEventListener('mouseup', function(){
            mouseDown = false;  
        });
        horizontal_scrolls[i].addEventListener('mousemove', function(event){
            if(mouseDown != true){ return };
        
            event.preventDefault();
            var valueX = event.pageX - horizontal_scrolls[i].offsetLeft;
            var dragScroll = (valueX - startX) * 1.2;
            horizontal_scrolls[i].scrollLeft = scrollLeftDrag - dragScroll;
            
        });

    }

}
window.addEventListener("resize", function(){
    subscription_scroll.scrollLeft = (subscription_scroll.scrollWidth - subscription_scroll.clientWidth) / 2;
});
window.addEventListener("load", function(){
    subscription_scroll.scrollLeft = (subscription_scroll.scrollWidth - subscription_scroll.clientWidth) / 2;
});










let selectBoxes = document.getElementsByClassName("select_box");
Array.from(selectBoxes).forEach(function(selectBox) {
    selectBox.addEventListener("change", function() {

        if(selectBox.value != ""){ selectBox.style.color = "#000000"; }
        else{ selectBox.style.color = "#757575"; }

    });
});