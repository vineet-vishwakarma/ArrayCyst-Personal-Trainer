// Menu Button

const toggleButton = document.getElementById('nav-toggle');
const navLink = document.getElementById('nav-link');

toggleButton.addEventListener('click', () => {
    navLink.classList.toggle('active')
})

// Testinomial 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// FAQs

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
