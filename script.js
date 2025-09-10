const upload = document.getElementById('uploadBox');
const fileinput = document.getElementById("fileInput");
const text = document.getElementById('filetext');
const ticket = document.getElementById('ticket');
const congrats = document.getElementById('congrats');
const preview = document.getElementById('preview')


const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const github = document.getElementById('github');

ticket.disabled = true;
ticket.style.opacity= '0.5'

upload.addEventListener('click', () => fileinput.click());

const userPhoto= document.getElementById('userPhoto')
let uploadedimage = '';


fileinput.addEventListener("change", () => {
  const file = fileinput.files[0];

  if (file) {
    text.textContent = file.name;
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedimage = e.target.result;
      // Image data is stored in localStorage (browser storage) here
      localStorage.setItem("ticketImage", uploadedimage);
      preview.src = uploadedimage;
    };
    reader.readAsDataURL(file);
  }
});

upload.addEventListener('dragover', (event) => {
    event.preventDefault();
    upload.classList.add('dragover');
});

upload.addEventListener("dragleave", () => {
    upload.classList.remove("dragover");
});

const error1 =  document.getElementById('error1')
const error2 =  document.getElementById('error2')
const error3 =  document.getElementById('error3')


function checkinputs() {
  if (fullname.value.trim() && email.value.trim() && github.value.trim()) {
    ticket.disabled = false;
    ticket.style.opacity = '1';

    // clear errors when fields are filled
    error1.textContent = '';
    error2.textContent = '';
    error3.textContent = '';
  } else {
    ticket.disabled = true;
    ticket.style.opacity = '0.5';

    // show error messages
    error1.textContent = 'No field should be left empty';
    error2.textContent = 'No field should be left empty';
    error3.textContent = 'No field should be left empty';
  }
}


fullname.addEventListener("input", checkinputs);
email.addEventListener("input", checkinputs);
github.addEventListener("input", checkinputs);


  ticket.addEventListener("click", () => {
    window.location.href = `ticket.html?name=${encodeURIComponent(fullname.value)}&email=${encodeURIComponent(email.value)}&github=${encodeURIComponent(github.value)}`;
});

// redirect with values in the URL



