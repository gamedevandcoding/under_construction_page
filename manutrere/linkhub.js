const carousel_images = ["trasformazione_corporea_01.webp", "trasformazione_corporea_02.webp", "trasformazione_corporea_03.webp", "trasformazione_corporea_04.webp", "trasformazione_corporea_05.webp", "trasformazione_corporea_06.webp", "trasformazione_corporea_07.webp", "trasformazione_corporea_08.webp", "trasformazione_corporea_09.webp", "trasformazione_corporea_10.webp", "trasformazione_corporea_11.webp", "trasformazione_corporea_12.webp"]
const carousel_img = document.getElementById("carousel_image_body-transformation");
var carousel_count = 0;
function carousel_next_image(){
    try{

        if(carousel_count < ( carousel_images.length - 1 ) ){ carousel_count++; }
        else{ carousel_count = 0; }

        carousel_img.src = "trasformazioni_corporee_fitness/" + carousel_images[carousel_count].toString();
        /*console.log(carousel_count);*/

    }
    catch(error){ console.log("carousel: next img error!") }
}