function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
    const content = document.querySelector('.content');
    content.classList.toggle('shifted');
  } 

  function validateForm() {
     var name = document.getElementById("name").value;
     var phone = document.getElementById("phone").value;
     var message = document.getElementById("message").value;
     var subject = document.getElementById("subject").value;
     
     // Regular expression to match a 10-digit phone number
     var phoneRegex = /^\d{10}$/;
 
     const result=true;
     if (name.trim() === "") {
         alert("Please enter your name.");
         result=false;
     }

     if (subject.trim() === "") {
          alert("Please enter your Subject.");
          result=false;
      }
 
     if (!phone.match(phoneRegex)) {
         alert("Please enter a valid 10-digit phone number.");
         result=false;
     }
 
     if (message.trim() === "") {
         alert("Please enter a message.");
         result=false;
     }
 
     // Form is valid, you can submit it
      if(result===true)
      {
            alert("Your Message is Sent: He Will Contact Soon..")
      }
 }
 