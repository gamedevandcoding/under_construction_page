/*------------------------------------ NAVBAR SCROLL TO ------------------------------------*/
function scrollTo_VehiclesSection(){ document.getElementById('vehicles_list_section').scrollIntoView(); }
function scrollTo_ComparisonSection(){ document.getElementById('comparison_cards_section').scrollIntoView(); }
function scrollTo_FormSection(){ document.getElementById('contact_us_section').scrollIntoView(); }
function scrollTo_ComparisonRentCard(){ document.getElementById('renting_advantages_card').scrollIntoView(); }
/*------------------------------------ NAVBAR SCROLL TO ------------------------------------*/








/*------------------------------------ SHOW DAILY & MONTHLY PRICES ------------------------------------*/
let monthlyPriceFields = document.getElementsByClassName("monthly_price_span");
let dailyPriceFields = document.getElementsByClassName("daily_price_span");
let priceSelectBoxes = document.getElementsByClassName("vehicles_prices_select_box");


function show_monthly_price(){
    for (let i = 0; i < dailyPriceFields.length; i++){
        dailyPriceFields[i].style.display = "none";
        monthlyPriceFields[i].style.display = "block";
    }
    for (let i = 0; i < priceSelectBoxes.length; i++){
        priceSelectBoxes[i].value = "monthly";
    }
}
function show_daily_price(){
    for (let i = 0; i < monthlyPriceFields.length; i++){
        monthlyPriceFields[i].style.display = "none";
        dailyPriceFields[i].style.display = "block";
    }
    for (let i = 0; i < priceSelectBoxes.length; i++){
        priceSelectBoxes[i].value = "daily";
    }
}

for (let i = 0; i < priceSelectBoxes.length; i++){
    priceSelectBoxes[i].addEventListener('change', function(){

        if(priceSelectBoxes[i].value === "monthly"){
            show_monthly_price();
            console.log("monthly");
        }
        else if(priceSelectBoxes[i].value === "daily"){
            show_daily_price();
            console.log("daily");
        }
        else{
            console.log(priceSelectBoxes[i].value);
        }

    });
}
/*------------------------------------ SHOW DAILY & MONTHLY PRICES ------------------------------------*/








/*------------------------------------ CONTACT FORM ------------------------------------*/
const privacyCheckbox_contactForm = document.getElementById("privacy_checkbox_form");
const custom_privacyCheckbox_contactForm = document.getElementById("custom_privacy_checkbox");

privacyCheckbox_contactForm.addEventListener("change", function(){
    if(privacyCheckbox_contactForm.checked){
        custom_privacyCheckbox_contactForm.style.display = "block";
    }
    else{
        custom_privacyCheckbox_contactForm.style.display = "none"; 
    }
});

const contact_form_name_field = document.getElementById("contact_form_name");
const contact_form_surname_field = document.getElementById("contact_form_surname");
const contact_form_phone_field = document.getElementById("contact_form_phone");
const contact_form_mail_field = document.getElementById("contact_form_email");
const contact_form_vehicleCode_field = document.getElementById("contact_form_vehicle");

function contactUs_forRent(vehicleCode){
    contact_form_vehicleCode_field.value = vehicleCode;
    document.getElementById('contact_us_section').scrollIntoView();
}

const contact_form_lettersOnly_field = document.getElementsByClassName("inputField_LettersOnly");
const contact_form_numbersOnly_field = document.getElementsByClassName("inputField_NumbersOnly");
const contact_form_lettersNumbersOnly_field = document.getElementsByClassName("inputField_LettersNumbersOnly");

for (let i = 0; i < contact_form_lettersOnly_field.length; i++){
    contact_form_lettersOnly_field[i].addEventListener("input", function(){
        contact_form_lettersOnly_field[i].value = contact_form_lettersOnly_field[i].value.replace(/[^A-zÀ-ú]/, "");
    });
}
for (let i = 0; i < contact_form_numbersOnly_field.length; i++){
    contact_form_numbersOnly_field[i].addEventListener("input", function(){
        contact_form_numbersOnly_field[i].value = contact_form_numbersOnly_field[i].value.replace(/[^0-9]/, "");
    });
}
for (let i = 0; i < contact_form_lettersNumbersOnly_field.length; i++){
    contact_form_lettersNumbersOnly_field[i].addEventListener("input", function(){
        contact_form_lettersNumbersOnly_field[i].value = contact_form_lettersNumbersOnly_field[i].value.replace(/[^0-9A-zÀ-ú@.]/, "");
    });
}
/*------------------------------------ CONTACT FORM ------------------------------------*/












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








/* ---------------------------------- SIDE NAV ----------------------------------*/
const sideNavCheckbox = document.getElementById("side_navigation_checkbox");
const sideNavSvg_open = document.getElementById("sideNav_label_open");
const sideNavSvg_close = document.getElementById("sideNav_label_close");

const sideNavContent = document.getElementById("sideNav_wrapper");

sideNavCheckbox.addEventListener("change", function(){
    if(sideNavCheckbox.checked){
        document.documentElement.classList.add("noscroll");
        document.body.classList.add("noscroll");

        sideNavSvg_open.style.display = "none";
        sideNavSvg_close.style.display = "block";
        sideNavContent.classList.add("sideNav_open");
    }
    else{
        document.documentElement.classList.remove("noscroll");
        document.body.classList.remove("noscroll");

        sideNavSvg_open.style.display = "block";
        sideNavSvg_close.style.display = "none";
        sideNavContent.classList.remove("sideNav_open");
    }
});

function sideNavClose(){
    sideNavCheckbox.checked = false;

    document.documentElement.classList.remove("noscroll");
    document.body.classList.remove("noscroll");

    sideNavSvg_open.style.display = "block";
    sideNavSvg_close.style.display = "none";
    sideNavContent.classList.remove("sideNav_open");
}
function sideNavVehicles(){ sideNavClose(); scrollTo_VehiclesSection(); window.scrollBy(0, - 120); }
function sideNavComparison(){ sideNavClose(); scrollTo_ComparisonSection(); window.scrollBy(0, - 120); }
function sideNavForm(){ sideNavClose(); scrollTo_FormSection(); window.scrollBy(0, - 120); }
/* ---------------------------------- SIDE NAV ----------------------------------*/





/* ---------------------------------- CARD READ ----------------------------------*/
const buyingCardDescription = document.getElementsByClassName("extraDescriptionText__Buying");
const buyingCardSpan = document.getElementById("expand_comparison_card_span__buying");
var buyingCardCheckbox = document.getElementById("expand_comparison_card__buying");
buyingCardCheckbox.addEventListener("change", function(){
    if(buyingCardCheckbox.checked){
        for (let i = 0; i < buyingCardDescription.length; i++){
            buyingCardDescription[i].style.display = "block";
        }
        buyingCardSpan.textContent = "Riduci";
    }
    else{
        for (let i = 0; i < buyingCardDescription.length; i++){
            buyingCardDescription[i].style.display = "none";
        }
        buyingCardSpan.textContent = "Leggi Tutto";
    }
});


const rentingCardDescription = document.getElementsByClassName("extraDescriptionText__Renting");
const rentingCardSpan = document.getElementById("expand_comparison_card_span__renting");
var rentingCardCheckbox = document.getElementById("expand_comparison_card__renting");
rentingCardCheckbox.addEventListener("change", function(){
    if(rentingCardCheckbox.checked){
        for (let i = 0; i < rentingCardDescription.length; i++){
            rentingCardDescription[i].style.display = "block";
        }
        rentingCardSpan.textContent = "Riduci";
    }
    else{
        for (let i = 0; i < rentingCardDescription.length; i++){
            rentingCardDescription[i].style.display = "none";
        }
        rentingCardSpan.textContent = "Leggi Tutto";
    }
});


var resetCardDescriptionQuery = window.matchMedia("(max-width: 820px)");
let prevOutput_CardDescription = null;
function resetCardDescription(){

    let output;
    if(resetCardDescriptionQuery.matches){ output = "mobile"; }
    else{ output = "desktop"; }

    if(output !== prevOutput_CardDescription){ 
        /*console.log("Card: " + output);*/
        prevOutput_CardDescription = output; 

        if(output.includes("desktop")){

            buyingCardCheckbox.checked = false;
            rentingCardCheckbox.checked = false;
            buyingCardSpan.textContent = "Leggi Tutto";
            rentingCardSpan.textContent = "Leggi Tutto";
            for (let i = 0; i < buyingCardDescription.length; i++){ buyingCardDescription[i].style.display = "block"; }
            for (let i = 0; i < rentingCardDescription.length; i++){ rentingCardDescription[i].style.display = "block"; }

        }
        else if(output.includes("mobile")){

            buyingCardCheckbox.checked = false;
            rentingCardCheckbox.checked = false;
            buyingCardSpan.textContent = "Leggi Tutto";
            rentingCardSpan.textContent = "Leggi Tutto";
            for (let i = 0; i < buyingCardDescription.length; i++){ buyingCardDescription[i].style.display = "none"; }
            for (let i = 0; i < rentingCardDescription.length; i++){ rentingCardDescription[i].style.display = "none"; }

        }

    }
    resetReview();
}
function setPrevOutputCardDescription(){ 
    if(resetCardDescriptionQuery.matches){ prevOutput_CardDescription = "mobile"; }
    else{ prevOutput_CardDescription = "desktop"; }

    /*console.log(prevOutput_CardDescription);*/
    setPrevOutputReview();
}
/* ---------------------------------- CARD READ ----------------------------------*/





/* ---------------------------------- REVIEW KEEP READING ----------------------------------*/
const reviewParagraph = document.getElementsByClassName("review_paragraph");
const reviewSpan = document.getElementsByClassName("expand_review_span");
const reviewCheckbox = document.getElementsByClassName("expand_review_input_checkbox");


for (let i = 0; i < reviewCheckbox.length; i++){
    reviewCheckbox[i].addEventListener("change", function(){
        if(reviewCheckbox[i].checked){
            reviewParagraph[i].style.display = "block";
            reviewSpan[i].textContent = "Riduci";
        }
        else{
            reviewParagraph[i].style.display = "-webkit-box";
            reviewSpan[i].textContent = "Leggi di più";
        }
    })
}



var resetReviewQuery = window.matchMedia("(max-width: 768px)");
let prevOutput_Review = null;
function resetReview(){

    let output;
    if(resetReviewQuery.matches){ output = "mobile"; }
    else{ output = "desktop"; }

    if(output !== prevOutput_Review){ 
        /*console.log("Review: " + output);*/
        prevOutput_Review = output;

        if(output.includes("desktop")){

            for (let i = 0; i < reviewCheckbox.length; i++){
                reviewCheckbox[i].checked = false;
                reviewParagraph[i].style.display = "block";
                reviewSpan[i].textContent = "Leggi di più";
            }

        }
        else if(output.includes("mobile")){

            for (let i = 0; i < reviewCheckbox.length; i++){
                reviewCheckbox[i].checked = false;
                reviewParagraph[i].style.display = "-webkit-box";
                reviewSpan[i].textContent = "Leggi di più";
            }

        }

    }
}
function setPrevOutputReview(){ 
    if(resetCardDescriptionQuery.matches){ prevOutput_Review = "mobile"; }
    else{ prevOutput_Review = "desktop"; }

    /*console.log(prevOutput_Review);*/
}
/* ---------------------------------- REVIEW KEEP READING ----------------------------------*/







window.addEventListener("load", setPrevOutputCardDescription );
window.addEventListener("resize", resetCardDescription ); 





