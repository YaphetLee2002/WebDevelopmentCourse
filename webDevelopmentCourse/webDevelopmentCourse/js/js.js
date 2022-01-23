const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("Form1");
const secondForm = document.getElementById("Form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click",() => {
    container.classList.remove("right-panel-active");
});
signUpBtn.addEventListener("click",() => {
    container.classList.add("right-panel-active");
});

firstForm.addEventListener("submit",(e)=>e.preventDefault());
secondForm.addEventListener("submit",(e)=>e.preventDefault());

