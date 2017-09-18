  
   var generalSlideCount = $('.works_item');


$('#works-count').text(generalSlideCount.length);



$('#works-next').on("click", function (event){
    var currentSlide = $("#works-current").text();
    if (currentSlide == generalSlideCount.length){
        $("#works-current").text('1');
       
    }
    else {
        ++currentSlide;
        $("#works-current").text(currentSlide);
    }
   
});

$('#works-prev').on("click", function (event){
    var currentSlide = $("#works-current").text();
    if (currentSlide > 1){
         --currentSlide;
        $("#works-current").text(currentSlide);
       
    }
    else {
       
        $("#works-current").text(generalSlideCount.length);
    }
   
});



   var generalGalleryCount = $('.gallery-slider__item');
   
$('#gallery-count').text(generalGalleryCount.length);



$('#gallery-next').on("click", function (event){
    var currentSlide = $("#gallery-current").text();
    if (currentSlide == generalSlideCount.length){
        $("#gallery-current").text('1');
       
    }
    else {
        ++currentSlide;
        $("#gallery-current").text(currentSlide);
    }
   
});

$('#gallery-prev').on("click", function (event){
    var currentSlide = $("#gallery-current").text();
    if (currentSlide > 1){
         --currentSlide;
        $("#gallery-current").text(currentSlide);
       
    }
    else {
       
        $("#gallery-current").text(generalGalleryCount.length);
    }
   
});