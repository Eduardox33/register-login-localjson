const ForumRegister = document.getElementById("fRegister");
const ForumLogin = document.getElementById("fLogin");
const alert = document.getElementById("alert");
const eraseall = document.getElementById("eraseall");
const base = JSON.parse(localStorage.getItem("Users")) || false;

ForumRegister.addEventListener("submit",(kweb)=>{
    kweb.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const Users = JSON.parse(localStorage.getItem("Users")) || [];
    const registered = Users.find(user=>user.username === username);
    if (registered){
        alert.textContent="Usuario ya existe";
    }else{
        Users.push({username: username,password: password});
        localStorage.setItem("Users",JSON.stringify(Users));
        alert.textContent="Registro Correcto";
    };
});

ForumLogin.addEventListener("submit",(kweb)=>{
    kweb.preventDefault();
    const username = document.getElementById("usernamel").value;
    const password = document.getElementById("passwordl").value;
    const Users = JSON.parse(localStorage.getItem("Users")) || [];
    const UsuarioValido = Users.find(user=>user.username===username & user.password === password);
    if(!UsuarioValido){
        document.getElementById("lalert").textContent = "Usuario o Pass Incorrecto";
        return
    }
    window.location.href="home.html";
    localStorage.setItem("loginsuccess",JSON.stringify(UsuarioValido));
});

eraseall.addEventListener("click",()=>{
    if (!base){
        return
    }
    localStorage.removeItem("Users");
});