//function to send email
function sendMail(){
  var params = {
    name: document.getElementById('nameId').value,
    contact: document.getElementById('phoneId').value,
    email: document.getElementById('emailId').value,
    message: document.getElementById('messageId').value,
  };

  const serviceID = "service_9jnw6ar";
  const templateID = "template_wcsvaej";

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById('nameId').value = '';
    document.getElementById('phoneId').value = '';
    document.getElementById('emailId').value = '';
    document.getElementById('messageId').value = '';
    console.log(res);
    alert('Message Sent.');
  })
  .catch((err) => console.log(err));
}



//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}
/*=====================Get in touch button=============== */
document.getElementById('getInTouch').addEventListener('click', function() {
  document.querySelector('#contact').scrollIntoView();
});

/*==========================Checks =============================== */



  document.getElementById('my-form').addEventListener('submit', function(event) {
    const name = document.getElementById('nameId').value;
    const phone = document.getElementById('phoneId').value;
    const email = document.getElementById('emailId').value;
    const message = document.getElementById('messageId').value;

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    const isValid = true;

    function showError(element, message) {
      element.innerText = message;
      element.style.color = 'red'; // Apply red color directly
    }

    function hideError(element) {
      element.innerText = '';
    }


    if (name.length < 2) {
      isValid = false;
      showError(nameError, 'Name must be at least 2 characters');
    } else {
      nameError.innerText = '';
    }



    // Phone validation (checks if it contains only digits)
    if (!/^\d+$/.test(phone)) {
      isValid = false;
      showError(phoneError, 'Phone must contain only digits');
    } else {
      phoneError.innerText = '';
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      showError(emailError,'Invalid email address');
    } else {
      emailError.innerText = '';
    }

    // Message validation
    if (message.trim() === '') {
      isValid = false;
      showError(messageError,'Message must not be empty');
    } else {
      messageError.innerText = '';
    }


    if (!(name || phone || email || message)) {
      isValid = false;
      showError(generalError, 'Fill all fields');
    } else {
      generalError.innerText = '';
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission
    }
  });

