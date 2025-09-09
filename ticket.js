const params = new URLSearchParams(window.location.search);
    const image = params.get("uploadedimage");
    const name = params.get("name");
    const email = params.get("email");
    const github = params.get("github");

    const fullname = document.getElementById("fullname");

    // display personalized message
    fullname.textContent = `${name}! `;

    const displayemail = document.getElementById('displayemail')
    displayemail.textContent= `${email}   `

    const ticketPhoto = document.getElementById('ticketPhoto')
    const tn = document.getElementById('ticketname')
    tn.textContent = name
    const img = document.getElementById('ticketimg')
    img.src = image
    document.getElementById('ticketgit').textContent= `@ ${github}`

function generatecode() {
    return String(Math.floor(Math.random() * 100000))
}


let code = generatecode()
code = code.padStart(5, '0')
document.getElementById('ticketcode').textContent= `# ${code}`

