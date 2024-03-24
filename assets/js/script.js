$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }



})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    const galleryImages = document.querySelectorAll('.gallery img');
const previewContainer = document.querySelector('.preview-container');
const previewImage = document.getElementById('preview-image');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    const previewSrc = image.dataset.preview; // Get preview image source from data-preview attribute
    previewImage.src = previewSrc;
    previewContainer.classList.add('active');
  });
});

previewContainer.addEventListener('click', () => {
  previewContainer.classList.remove('active');
  previewImage.src = ''; // Clear preview image on close
});

const imageHeight = galleryImages[0].offsetHeight; // Get height of the first image
galleryImages.forEach(image => {
  image.style.height = `${imageHeight}px`;
});

});