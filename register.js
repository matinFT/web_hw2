function register(){
    elem = document.getElementById("register-button");
    if(!elem.classList.contains("form-btn-active")){
        elem.classList.toggle("form-btn-active");
        document.getElementById("enter-button").classList.toggle("form-btn-active");
        document.getElementById("register-form").style.display = "block";
        document.getElementById("enter-form").style.display = "none";
    }
}

function enter(){
    elem = document.getElementById("enter-button");
    if(!elem.classList.contains("form-btn-active")){
        elem.classList.toggle("form-btn-active");
        document.getElementById("register-button").classList.toggle("form-btn-active");
        document.getElementById("register-form").style.display = "none";
        document.getElementById("enter-form").style.display = "block";
    }
}