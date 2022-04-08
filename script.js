// ######## validate contact form ########

const form = document.getElementById('.contact-form')
const alert = document.getElementById('alert')
function validate(){
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const emailValue = form.email.value
  if(emailValue.toLowerCase() !== emailValue){
    alert.classList.add('error');
    alert.innerHTML = 'ALERT!  Your Email Should Be Lowercase';
  }else{
    form.submit();
  }
})};