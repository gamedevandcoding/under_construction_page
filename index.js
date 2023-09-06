



/* --------------------------------- SCROLL SETTING --------------------------------- */
history.scrollRestoration = "manual";
window.onbeforeunload = function(){ window.scrollTo(0,0);};
/* --------------------------------- SCROLL SETTING --------------------------------- */




/* --------------------------------- SIDEBAR TOGGLE --------------------------------- */
let sidebarCheckbox = document.getElementById("sidebar_hamburger_checkbox");
let sidebarContent = document.getElementById("sidebar_hamburger_content");
let sidebarSvg_open = document.getElementById("sidebar_hamburger_open");
let sidebarSvg_close = document.getElementById("sidebar_hamburger_close");
sidebarCheckbox.addEventListener('click', function(){
    if(sidebarCheckbox.checked){
        sidebarSvg_open.style.display = "none";
        sidebarSvg_close.style.display = "block";
        sidebarContent.style.display = "flex";
    }
    else{
        sidebarSvg_open.style.display = "block";
        sidebarSvg_close.style.display = "none";
        sidebarContent.style.display = "none";
    }
});
const mobileMediaQuery = window.matchMedia('(max-width: 895px)');
function sidebarWindowResize(){
    if(!mobileMediaQuery.matches){
        sidebarCheckbox.checked = false;
        sidebarSvg_open.style.display = "block";
        sidebarSvg_close.style.display = "none";
        sidebarContent.style.display = "flex";
    }
    else{
        if(!sidebarCheckbox.checked){
            sidebarContent.style.display = "none";
        }
    }
};
/* --------------------------------- SIDEBAR TOGGLE --------------------------------- */




/* --------------------------------- HORIZONTAL SCROLL --------------------------------- */
var isMobileBroswer = navigator.userAgentData.mobile; var mouseDown = false; var scrollLeftDrag;
const subscription_scroll = document.getElementById("subscription_scroll_content");
const horizontal_scrolls = document.getElementsByClassName("horizontal_scroll_content");
if(!isMobileBroswer){
    for (let i = 0; i < horizontal_scrolls.length; i++){

        /*Mouse Wheel
        horizontal_scrolls[i].addEventListener('wheel', function(event){
            if(horizontal_scrolls[i].scrollWidth > horizontal_scrolls[i].clientWidth){
                event.preventDefault();
                var delta = Math.sign(event.deltaY);
                var scrollAmount = 50;
                horizontal_scrolls[i].scrollLeft += delta * scrollAmount;
            }
        }, { passive: false } );*/

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
    sidebarWindowResize();
});
window.addEventListener("load", function(){
    subscription_scroll.scrollLeft = (subscription_scroll.scrollWidth - subscription_scroll.clientWidth) / 2;
});
/* --------------------------------- HORIZONTAL SCROLL --------------------------------- */




/* --------------------------------- SCROLL TO --------------------------------- */
const contact_form_outputDiv = document.getElementById("contact_output_container");
const contact_form_outputSvgError = document.getElementById("contact_output_error");
const contact_form_outputSvgSuccess = document.getElementById("contact_output_success");
const contact_form_outputSpan = document.getElementById("contact_output_title");
const serviceDiv = document.getElementById("online_coaching_description");
const coachingDiv = document.getElementById("coaching_programs_section");
const workoutDiv = document.getElementById("workout_programs_section");
const currentURL = window.location.href;
if(currentURL.includes("?error=nonesent")){

    contact_form_outputDiv.style.backgroundColor = "#00b90c"
    contact_form_outputSvgError.style.display = "none";
    contact_form_outputSvgSuccess.style.display = "block";
    contact_form_outputSpan.textContent = "SUCESSO";
    contact_form_outputDiv.style.display = "flex";
    document.addEventListener("DOMContentLoaded", function (){ contact_form_scroll() });
}
else if(currentURL.includes("?error=wronginput")){

    contact_form_outputDiv.style.backgroundColor = "#eb0000"
    contact_form_outputSvgError.style.display = "block";
    contact_form_outputSvgSuccess.style.display = "none";
    contact_form_outputSpan.textContent = "ERRORE";
    contact_form_outputDiv.style.display = "flex";
    document.addEventListener("DOMContentLoaded", function (){ contact_form_scroll() });
}
function service_scroll(){
    const serviceDiv_position = Math.round((serviceDiv.getBoundingClientRect().top + document.documentElement.scrollTop) - 105);
    window.focus(); window.scrollTo({top: serviceDiv_position, left: 0, behavior: 'auto'});
};
function coaching_plan_scroll(){
    const coachingDiv_position = Math.round((coachingDiv.getBoundingClientRect().top + document.documentElement.scrollTop) - 105);
    window.focus(); window.scrollTo({top: coachingDiv_position, left: 0, behavior: 'auto'});
};
function workout_plan_scroll(){
    const workoutDiv_position = Math.round((workoutDiv.getBoundingClientRect().top + document.documentElement.scrollTop) - 105);
    window.focus(); window.scrollTo({top: workoutDiv_position, left: 0, behavior: 'auto'});
};
function contact_form_scroll(){
    const contact_form_position = Math.round((contact_form_outputDiv.getBoundingClientRect().top + document.documentElement.scrollTop) - 105);
    window.focus(); window.scrollTo({top: contact_form_position, left: 0, behavior: 'auto'});
};
/* --------------------------------- SCROLL TO --------------------------------- */




/* --------------------------------- PLACEHOLDER SELECT BOX --------------------------------- */
const selectBoxes = document.getElementsByClassName("contact_form_select");
Array.from(selectBoxes).forEach(function(selectBox) {
    selectBox.addEventListener("change", function() {

        if(selectBox.value != ""){ selectBox.style.color = "#000000"; }
        else{ selectBox.style.color = "#757575"; }

    });
});
/* --------------------------------- PLACEHOLDER SELECT BOX --------------------------------- */




/* --------------------------------- DETECT DEVICE TYPE --------------------------------- */
window.onload = (event) => {

    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const userAgent = navigator.userAgent.toString();
    if(!mobileRegex.test(userAgent)){

        let extraStylesheet = document.createElement('link');
        extraStylesheet.rel = 'stylesheet';
        extraStylesheet.href = 'index.hover.css';
        document.head.appendChild(extraStylesheet);
        console.log("DesktopDevice=Detected");
        
    }

};
/* --------------------------------- DETECT DEVICE TYPE --------------------------------- */




/* --------------------------------- PRIVACY POLICY FORM --------------------------------- */
let contact_form_action = document.getElementById("contact_form_action");
let contact_form_privacyCheckbox = document.getElementById("privacyPolicyCheckbox");
let contact_form_submitBtn = document.getElementById("contact_form_btn");
const contact_form_privacySvg = document.getElementById("privacyPolicySvg");
contact_form_privacyCheckbox.addEventListener('click', function(){
    if(contact_form_privacyCheckbox.checked){
        
        contact_form_submitBtn.disabled = false;
        contact_form_privacySvg.style.opacity = "1";
    }
    else{
        contact_form_submitBtn.disabled = true;
        contact_form_privacySvg.style.opacity = "0";
    }
});
/* --------------------------------- PRIVACY POLICY FORM --------------------------------- */