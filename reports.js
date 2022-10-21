let student = 0;
let guests = 0;
let professionals = 0;

fetch('https://fakestoreproducts.herokuapp.com/users')
.then((res)=> res.json())
.then((res)=> {
    res.map((data)=> {
        console.log(data.profession)
        console.log(student)
        if(data.profession == "Student"){
             student++;
             document.getElementById("students").innerText = student
        }
        else if(data.profession == "Guest"){
           guests++;
           document.getElementById("guests").innerText = guests || 0;
        }
        else if(data.profession == "Full Stack Developer" || data.profession == "FSD" || data.profession == "Fronted Developer" || data.profession == "Backed Developer"){
          professionals++;
          document.getElementById("Professionals").innerText = professionals || 0;
        }
    })
})


