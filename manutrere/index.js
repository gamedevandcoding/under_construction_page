/* --------------------------------- HORIZONTAL SCROLL --------------------------------- */
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
/* --------------------------------- HORIZONTAL SCROLL --------------------------------- */








/* --------------------------------- PLACEHOLDER SELECT BOX --------------------------------- */
let selectBoxes = document.getElementsByClassName("select_box");
Array.from(selectBoxes).forEach(function(selectBox) {
    selectBox.addEventListener("change", function() {

        if(selectBox.value != ""){ selectBox.style.color = "#000000"; }
        else{ selectBox.style.color = "#757575"; }

    });
});
/* --------------------------------- PLACEHOLDER SELECT BOX --------------------------------- */









/* --------------------------------- DISABLE RIGHT-CLICK --------------------------------- */
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
/* --------------------------------- DISABLE RIGHT-CLICK --------------------------------- */




/* --------------------------------- SCROLL TO --------------------------------- */
function scrollTo_onlineCoaching(){ document.getElementById('online_coaching_section').scrollIntoView(); }
function scrollTo_workoutPrograms(){ document.getElementById('workout_programs_section').scrollIntoView(); };
function scrollTo_contactForm(){ document.getElementById('contact_form_section').scrollIntoView(); };
/* --------------------------------- SCROLL TO --------------------------------- */




//ScrollTop
history.scrollRestoration = "manual";
window.onbeforeunload = function(){ window.scrollTo(0,0);};

//ScrollForm
var currentUrl = window.location.href;
if(currentUrl.includes("#contact")){ scrollTo_contactForm(); }







/* --------------------------------- POPUP MESSAGE --------------------------------- */
const popup = document.getElementById("popup_container");
const disabled_btn = document.getElementsByClassName("btn_disabled");

[].forEach.call(disabled_btn, function(element){
    element.addEventListener("click", function(){
        popup.style.display = "block";
        document.body.classList.add("noscroll");
    });
});
function hide_popup_message(){
    popup.style.display = "none";
    document.body.classList.remove("noscroll");
    scrollTo_contactForm();
};
/* --------------------------------- POPUP MESSAGE --------------------------------- */