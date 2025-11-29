function login(){
    let adminpage=document.getElementById("login")
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    if(email==="admin@gmail.com" && password==="admin1234"){
         alert("login succes")
        window.location.href="admin.html"
    }else{
        alert("wrong email or password")
        
    }
}