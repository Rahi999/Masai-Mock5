document.getElementById("form").addEventListener("submit",postRequest);

function postRequest(e){
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let place = document.getElementById('place').value;
    let batchName = document.getElementById('batch').value;
    let profession = document.getElementById('profession').value;

    if( name.length > 3  && age.length > 0 && place.length > 3) {
        fetch('https://fakestoreproducts.herokuapp.com/users',{
           method:"POST",
           body:JSON.stringify(
               {
                   name: name,
                   age: age,
                   place: place,
                   batch_name: batchName,
                   profession: profession
               }
           ),
           headers: {
            "Content-type": "application/json"
        }

       })
           .then(res=>res.json())
           .then(json=> {
            alert("Successfully Registered”")
            window.location.href="index.html"
        })
        .catch(()=> alert("Registration Failed!!"))
     }
    else {
        alert("Please Enter Full Details")
    }
}