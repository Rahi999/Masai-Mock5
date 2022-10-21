// https://reqres.in/api/login

document.getElementById('form').addEventListener('submit',Login)
let userAuth ;


function Login(e){
    e.preventDefault();
    
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;

    if(userEmail.length > 5 && userPassword.length > 4){
        fetch('https://reqres.in/api/login',{
           method:"POST",
           body:JSON.stringify(
               {
                  email: userEmail,
                  password: userPassword
               }
           ),
           headers: {
            "Content-type": "application/json"
        }

       })
           .then(res=>res.json())
           .then(json=> {
            console.log(json)
            userAuth = true;
            localStorage.setItem("isAuth",true)
            localStorage.setItem("Token",JSON.stringify(json.token))
            alert("Successfully LoggedIn")
           window.location.href="data.html"
        })
        .catch(()=> alert("Login Failed!!"))

    } else {
        alert("Please Enter All Valid Details")
    }
}