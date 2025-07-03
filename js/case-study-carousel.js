function caseStudyCard() {
    $(document).ready(function(){
        $('.car-container-case').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: '10%',
            prevArrow: '<button type="button" class="slick-prev"><i class="ri-arrow-right-line"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ri-arrow-left-line"></i></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '5%',
                    }
                }
            ]
        });
    });
}
caseStudyCard();



