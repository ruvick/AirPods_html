(function () {
    $('.reviews__sl').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                
                breakpoint: 750,
                settings: {  
                     slidesToShow: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 380,
                settings: { 
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
})();
