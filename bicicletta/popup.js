const popup = document.getElementById("popup_container");
const open_popup = document.getElementsByClassName("btn-disabled")


function scroll_disable(){
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function() { window.scrollTo(LeftScroll, TopScroll); };
}  
function scroll_enable(){ window.onscroll = function(){}; }


function hide_popup(){ popup.style.display = "none"; scroll_enable(); }
var show_popup = function() { popup.style.display = "block"; scroll_disable(); };

for (var i = 0; i < open_popup.length; i++) {
    open_popup[i].addEventListener('click', show_popup, false);
}