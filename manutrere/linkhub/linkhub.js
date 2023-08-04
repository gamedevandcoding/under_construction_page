/* ---------------------------------- CAROUSEL ----------------------------------*/
const carousel_images = ["trasformazione_corporea_01.webp", "trasformazione_corporea_02.webp", "trasformazione_corporea_03.webp", "trasformazione_corporea_04.webp", "trasformazione_corporea_05.webp", "trasformazione_corporea_06.webp", "trasformazione_corporea_07.webp", "trasformazione_corporea_08.webp", "trasformazione_corporea_09.webp", "trasformazione_corporea_10.webp", "trasformazione_corporea_11.webp", "trasformazione_corporea_12.webp"]
const carousel_img = document.getElementById("carousel_image_body-transformation");
var carousel_count = 0;
function carousel_next_image(){
    try{
        if(carousel_count < ( carousel_images.length - 1 ) ){ carousel_count++; }
        else{ carousel_count = 0; }
        carousel_img.src = "linkhub_img/" + carousel_images[carousel_count].toString();
    }
    catch(error){ console.log("carousel: next img error!") }
}
/* ---------------------------------- CAROUSEL ----------------------------------*/



/* ---------------------------------- DROPDOWN FAQ ----------------------------------*/
const faq_dropdown_checkboxs = document.getElementsByClassName("dropdown_faq_checkbox");
const faq_dropdown_paragraphs = document.getElementsByClassName("dropdown_faq_paragraph");

for (let i = 0; i < faq_dropdown_checkboxs.length; i++) {
  faq_dropdown_checkboxs[i].addEventListener('click', function() {
    let index = [].indexOf.call(faq_dropdown_checkboxs, this);

    if(faq_dropdown_checkboxs[i].checked == true){ faq_dropdown_paragraphs[index].style.display = "block"; }
    else{ faq_dropdown_paragraphs[index].style.display = "none"; }

    /*console.log('Element at index ' + index + ' was clicked');*/
  });
}
/* ---------------------------------- DROPDOWN FAQ ----------------------------------*/



document.getElementById("copyright_year").innerText = new Date().getFullYear();








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