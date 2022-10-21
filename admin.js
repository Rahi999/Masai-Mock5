let isAuth = localStorage.getItem('Token') || null;;
console.log(isAuth)

document.getElementById('dataRoutes').addEventListener('click',checkAuth)
document.getElementById('reportsRoutes').addEventListener('click',checkAuthReports)

function checkAuth() {
    if(isAuth){
        window.location.href="data.html"
    }
    else {
        alert("You Have Not Logged In! Please LogIn First")
        window.location.href = "login.html"
    }
}

function checkAuthReports() {
    if(isAuth){
        window.location.href="reports.html"
    }
    else{
        alert("You Have Not Logged In! Please LogIn First")
        window.location.href = "login.html"
    }
}