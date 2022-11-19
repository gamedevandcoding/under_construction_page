var index = 1;
const carouselSlides = document.getElementsByClassName("carousel-slide");
const totCarouselSlides = carouselSlides.length;

function changeSlide(self){

    btnID = self.getAttribute("id");
    if(btnID == "next"){

        if( index < totCarouselSlides){
            carouselSlides[index].classList.add("active-slide");
            if(index > 0){ carouselSlides[index - 1].classList.remove("active-slide"); }
            index = index + 1;
            /*console.log("+" + index);*/
            return index;
        }
        else{
            index = 0;
            carouselSlides[index].classList.add("active-slide");
            carouselSlides[totCarouselSlides - 1].classList.remove("active-slide");
            index = index + 1;
            /*console.log("+" + index);*/
            return index;
        }
        

    }
    else{

        if( index == totCarouselSlides){
            index = index - 1;
            carouselSlides[index - 1].classList.add("active-slide");
            carouselSlides[totCarouselSlides - 1].classList.remove("active-slide");
            /*console.log("-" + index);*/
            return index;
        }
        else if( index < totCarouselSlides && index > 1){
            index = index - 1;
            carouselSlides[index - 1].classList.add("active-slide");
            carouselSlides[index].classList.remove("active-slide");
            /*console.log("-" + index);*/
            return index;
        }
        else if( index == 1){
            index = totCarouselSlides;
            carouselSlides[index - 1].classList.add("active-slide");
            carouselSlides[0].classList.remove("active-slide");
            /*console.log("-" + index);*/
            return index;
        }

    }
}