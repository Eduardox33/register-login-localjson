const user = JSON.parse(localStorage.getItem('loginsuccess')) || false;
const logout = document.getElementById("logout");
const delete_account = document.getElementById("delete");

if(!user){
    window.location.href="index.html"
};

const text = document.getElementById("texto");
text.textContent = (`Bienvenido  ${user.username}`);

logout.addEventListener("click",()=>{
    localStorage.removeItem("loginsuccess");
    window.location.href="index.html"
});

delete_account.addEventListener("click",()=>{
    const Users = JSON.parse(localStorage.getItem("Users"));
    for(i=0;i<Users.length;i++){
        if (Users[i].username === user.username){
            Users.splice(i,1);
            localStorage.setItem("Users",JSON.stringify(Users));
            localStorage.removeItem("loginsuccess");
            window.location.href="index.html"
        };
    }
})