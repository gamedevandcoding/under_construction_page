const showFileName = document.getElementById("img_information__fileName");
const showFileWeight = document.getElementById("img_information__fileWeight");
const showFileResolution = document.getElementById("img_information__resolution");
const showFileAspectRatio = document.getElementById("img_information__aspectRatio");


const openImageBtn = document.getElementById("img_processing__open__label");
const processingPanel = document.getElementById("img_processing__section");


const slideResolutionBar = document.getElementById("slideResolution");
const rangeResolutionInput = document.getElementById("rangeResolution");
const maxResolution = parseInt(rangeResolutionInput.max);
const minResolution = parseInt(rangeResolutionInput.min);


const slideCompressionBar = document.getElementById("slideCompression");
const rangeCompressionInput = document.getElementById("rangeCompression");
const maxCompression = parseInt(rangeCompressionInput.max);
const minCompression = parseInt(rangeCompressionInput.min);


let activeImage, originalRatio;
let imagePixels = [0 , 0];
var gdcValue = 0;
var compressionFactor = 0;
const canvas = document.getElementById("canvas_render_output");
const canvasCtx = canvas.getContext("2d");
const showEstimatedFileWeight = document.getElementById("img_information__estimatedFileWeight");


function readImage(element){

    showFileName.innerText = element.files[0].name.toString();
    showFileWeight.innerText = (Math.floor(element.files[0].size / 1000) + " KB").toString();

    const reader = new FileReader();
    reader.readAsDataURL(element.files[0]);
    reader.onload = function(){ openImage(reader.result); }

}
function openImage(imageSrc){

    activeImage = new Image();
    activeImage.src = imageSrc;
    activeImage.onload = function(){

        originalRatio = activeImage.width / activeImage.height;
        calculateRatioImage(activeImage.width , activeImage.height);
    }
}
function calculateRatioImage(width, height){

    //greatest common divisor
    var minValue = 1;
    if(width < height){ minValue = width; }
    else{ minValue = height; }

    for(let i=1; i<= minValue; i++){
        if(width%i==0 && height%i==0){
            gdcValue = i;
        }
    }

    //aspect ratio
    if(gdcValue.toString().length < 3){ showFileAspectRatio.innerText = Math.round((width / gdcValue) / 100).toString() +":"+ Math.round((height / gdcValue) / 100).toString(); }
    else{ showFileAspectRatio.innerText = Math.round(width / gdcValue).toString() +":"+ Math.round(height / gdcValue).toString(); }

    //set image dimensions
    imagePixels = [width, height];
    setResolution(rangeResolutionInput);

}
function setCavasSize(width, height){

    canvas.width = Math.floor(width);
    canvas.height = Math.floor(height);
    canvasCtx.drawImage( activeImage, 0, 0);

    showFileResolution.innerText = width + " x " + height;
    processingPanel.style.display = "block";
    openImageBtn.style.display = "none";
    
    estimateImageSize(width, height, rangeCompressionInput.value);

}
function setResolution(inputRange){

    slideResolutionBar.style.width = ((inputRange.value * 100) / maxResolution).toString() + "%";
    compressionResolution = parseInt(inputRange.value);

    var processedWidth = Math.round(imagePixels[0] / compressionResolution);
    var processedHeight = Math.round(imagePixels[1] / compressionResolution);

    setCavasSize(processedWidth, processedHeight);

}
function setCompression(inputRange){
    
    slideCompressionBar.style.width = ((inputRange.value * 100) / maxCompression).toString() + "%";
    compressionValue = maxCompression - parseInt(inputRange.value) + minCompression;

    var imageDimensions = showFileResolution.textContent;
    imageDimensions = imageDimensions.replace(" ", "");
    imageDimensions = imageDimensions.split("x");

    estimateImageSize(imageDimensions[0], imageDimensions[1], rangeCompressionInput.value);

}
function estimateImageSize(width, height, compression){

    var estimateSize = Math.trunc(((width * height) * 3) / 1024); 
    var new_estimateSize = estimateSize - ((compression / 10) * estimateSize);
    showEstimatedFileWeight.innerText = new_estimateSize.toString() + " KB";

    compressionFactor = compression / 10;
    return compressionFactor;
}

const webp_checkbox = document.getElementById("webp_input_checkbox");
const webp_span = document.getElementById("webp_input_checkbox__data");
function webp_checkbox_output(){
    if(webp_checkbox.checked == false){ webp_span.innerText = "No"; }
    else{ webp_span.innerText = "Yes"; }
}

function downloadImage(){

    var file_name = showFileName.textContent.toString();
    file_name = file_name.replace(' ', '');

    var file_extension = file_name.split('.').pop();
    var link = document.getElementById('downloadLink');

    if(webp_checkbox.checked == false){

        file_extension = 'image/' + file_extension.toString();
        link.setAttribute('download', file_name.toString());
        link.setAttribute('href', canvas.toDataURL(file_extension ,compressionFactor));
    }
    else{

        var file_extension = file_name.split('.').pop();
        file_name = file_name.replace('.' + file_extension.toString(), '');
        file_name = file_name.toString() + '.webp';
        
        file_extension = 'image/webp';
        link.setAttribute('download', file_name.toString());
        link.setAttribute('href', canvas.toDataURL(file_extension ,compressionFactor));

    }

    //console.log(canvas.width, canvas.height, rangeResolutionInput.value, compressionFactor);
    //console.log(file_name.match(/\./g).length);
}