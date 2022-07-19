import emailjs from 'emailjs-com';

const PUBLIC_KEY = "Vrd-s4lUzw0GNkh68";
const serviceID = 'service_4xsh4oc';
const templateID = 'template_pyr97q9';

export function sendEmail() {
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

export function downloadCV() {
    window.location.href='https://drive.google.com/u/0/uc?id=1zmxrMN-ij_NpKbnVcVeL44dyIByY28ri&export=download';
}