import emailjs from 'emailjs-com';

const PUBLIC_KEY = "Vrd-s4lUzw0GNkh68";
const serviceID = 'service_4xsh4oc';
const templateID = 'template_pyr97q9';

function sendEmail() {
    var firstName = document.getElementById("input-form-firstname").value;
    var lastname = document.getElementById("input-form-lastname").value;
    var email = document.getElementById("input-form-email").value;
    var subject = document.getElementById("input-form-sunject").value;
    var body = document.getElementById("input-form-body").value;

    var form = {
        from_name: firstName + ' ' + lastname,
        to_name: 'Meeba', 
        message: body
    }

    emailjs.sendForm(serviceID, templateID, form, PUBLIC_KEY)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
    });
}

var modal = document.querySelector(".modal-container");

var feedback = document.getElementById("feedback");

var btn = document.querySelector(".btn-fb");

var spanList = document.querySelectorAll(".close");

btn.onclick = function() {
    feedback.style.display = "block";
}

var doctor_calm = document.getElementById("doctor-calm");

var btnDrCalm = document.querySelector(".btn-prt-1");

btnDrCalm.onclick = function() {
    doctor_calm.style.display = "block";
}

var optimax = document.getElementById("optimax");

var btnOpt = document.querySelector(".btn-prt-2");

btnOpt.onclick = function() {
    optimax.style.display = "block";
}

spanList.forEach(element => {
    element.addEventListener('click', function() {
        feedback.style.display = "none";
        optimax.style.display = "none";
        doctor_calm.style.display = "none";
    });
});

window.onclick = function(event) {
    if (event.target == feedback || event.target == optimax || event.target == doctor_calm) {
        feedback.style.display = "none";
        optimax.style.display = "none";
        doctor_calm.style.display = "none";
    }
}