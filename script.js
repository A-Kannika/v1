$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $("html").animate({scrollTop: 0});
    });

    // toggle menu/navbar script 
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".modal-btn")
const overlay = document.querySelector("#overlay");
btns.forEach((btn) => {
    btn.addEventListener("click", () =>{
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

close_btns.forEach((btn) => {
    btn.addEventListener("click", () =>{
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = (e) => {
    if (e.target === overlay){
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
}



// function sendMail(params){
//     var tempParams={
//         from_name:document.getElementById("fromName").value,
//         Subject:document.getElementById("fromSubject").value,
//         from_email:document.getElementById("fromEmail").value,
//         message:document.getElementById("msg").value,
//     };
//     emailjs.send("service_jonynk8", "template_ox29ukc", tempParams)
//     .then(function(res){
//         console.log("success", res.status)
//     })
// }