let membershipText = document.querySelector(".membertext h2");
let membershipTextBox = document.querySelector(".membertext");
let membershipBox = document.querySelector(".membersubscription");
let subscriptionFormSection = document.querySelector(".subscriptionbtn");
let formInputBox = document.querySelectorAll(".subscriptionbtn form input");

membershipText.style.transform = `translateX(-1000px)`;
membershipBox.style.transform = `scale(0)`;
membershipBox.style.filter = "blur(10px)";
membershipTextBox.style.transform = `translateY(-500px)`;
subscriptionFormSection.style.transform = `translateY(500px)`;
formInputBox[0].style.transform = `translateY(-500px)`;
formInputBox[1].style.transform = `translateY(500px)`;
formInputBox[2].style.transform = `translateY(-500px)`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 1500) {
        
        membershipBox.style.transform = `scale(1)`;
        membershipBox.style.transition = "all 0.7s ease";
        membershipBox.style.filter = "blur(0px)";

        membershipText.style.transform = `translateX(0px)`;
        membershipText.style.transition = "all 0.7s ease 0.5s";
        membershipTextBox.style.transform = `translateY(0px)`;
        membershipTextBox.style.transition = "all 0.7s ease";

        subscriptionFormSection.style.transform = `translateY(0px)`;
        subscriptionFormSection.style.transition = "all 0.7s ease 0.8s";

        formInputBox[0].style.transform = `translateY(0px)`;
        formInputBox[0].style.transition = "all 0.7s ease 1s";

        formInputBox[1].style.transform = `translateY(0px)`;
        formInputBox[1].style.transition = "all 0.7s ease 1s";

        formInputBox[2].style.transform = `translateY(0px)`;
        formInputBox[2].style.transition = "all 0.7s ease 1s";

    } else {
        
        membershipBox.style.transform = `scale(0)`;
        membershipBox.style.transition = "all 0.7s ease 1s";
        membershipBox.style.filter = "blur(10px)";

        membershipText.style.transform = `translateX(-1000px)`;
        membershipText.style.transition = "all 0.7s ease";
        membershipTextBox.style.transform = `translateY(-500px)`;
        membershipTextBox.style.transition = "all 0.7s ease 0.5s";

        subscriptionFormSection.style.transform = `translateY(500px)`;
        subscriptionFormSection.style.transition = "all 0.7s ease 0.8s";

        formInputBox[0].style.transform = `translateY(-500px)`;
        formInputBox[0].style.transition = "all 0.7s ease 0.7s";

        formInputBox[1].style.transform = `translateY(500px)`;
        formInputBox[1].style.transition = "all 0.7s ease 0.7s";

        formInputBox[2].style.transform = `translateY(-500px)`;
        formInputBox[2].style.transition = "all 0.7s ease 0.7s";


    }

})