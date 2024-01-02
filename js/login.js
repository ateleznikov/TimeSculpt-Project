var loginStatus = document.getElementById('user-login');
loginStatus.addEventListener("submit", loginUser);

event.preventDefault();

function loginUser() {
    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    if (email=="wmitty@email.com" && password=="password1")  {   
        localStorage.setItem('loggedIn',1);    
        window.location.href = "index.html"; 
    }
    else {
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
    }
    event.preventDefault();
}