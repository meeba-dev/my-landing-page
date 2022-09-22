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