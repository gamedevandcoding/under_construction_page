const popup = document.getElementById("popup_container");
const disabled_btn = document.getElementsByClassName("btn-disabled");


[].forEach.call(disabled_btn, function(element){
    element.addEventListener("click", function(){

        popup.style.display = "block";
        document.body.classList.add("noscroll");

    });
});

function hide_popup(){

    popup.style.display = "none";
    document.body.classList.remove("noscroll");

};