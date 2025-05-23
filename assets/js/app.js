/*********************/
/*   Lucide Icons   */
/*********************/
lucide.createIcons();
$(function () {
  document.querySelectorAll(".needs-validation").forEach((form) => {
      form.addEventListener("submit", (event) => {
          if (!form.checkValidity()) {
              event.preventDefault(); 
              event.stopPropagation(); 
              form.classList.add("was-validated");
          } else {
              event.preventDefault();
              event.stopPropagation(); 
              form.reset();
              submitMSG(true, '.contact-me');
              form.classList.remove("was-validated");
          }
         
      });
  });
  function submitMSG(valid, parentSelector){
      if(valid){
          $(parentSelector + " .message-box").removeClass('d-none').addClass('d-block ');
          $(parentSelector + " .message-box div").removeClass('alert-danger').addClass('alert-success').text('Sent successfully, thank you for contacting us.');
      } else {
          $(parentSelector + " .message-box").removeClass('d-none').addClass('d-block ');
          $(parentSelector + " .message-box div").removeClass('alert-success').addClass('alert-danger').text('Found error in the form. Please check again.');
      }
  }
});
