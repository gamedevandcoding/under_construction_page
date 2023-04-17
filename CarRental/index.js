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