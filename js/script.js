document.getElementById('login-btn').addEventListener("click", function(){
    const email = document.getElementById('user-email');
    const password = document.getElementById('user-pass');
    const emailfield = email.value;
    const passwordfield = password.value;
    if (emailfield=="sontan@gmail.com" && passwordfield=="polaekta"){
        console.log("login sccess");
        window.location.href = 'banking.html';
    }
    else{
        console.log("login failed");
    }
})