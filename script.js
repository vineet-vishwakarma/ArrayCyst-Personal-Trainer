// Menu Button

const toggleButton = document.getElementById('nav-toggle');
const navLink = document.getElementById('nav-link');

toggleButton.addEventListener('click', () => {
    navLink.classList.toggle('active')
})

// Login Form

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("mySignUp").style.display = "none";
  document.getElementById("form-underlay").style.visibility = "visible";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("form-underlay").style.visibility = "hidden";
}

function openSignup() {
  document.getElementById("mySignUp").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("form-underlay").style.visibility = "visible";
}

function closemySignUp() {
  document.getElementById("mySignUp").style.display = "none";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("form-underlay").style.visibility = "hidden";
}

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
    this.classList.toggle("active-faq");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
