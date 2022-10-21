document.getElementById("form").addEventListener("submit",putReqyest);
let id = localStorage.getItem("id");

 fetch(`https://fakestoreproducts.herokuapp.com/users/${id}`)
 .then((res)=> res.json())
 .then((res)=> {
    console.log(res)
    let name = document.getElementById('name').value = res.name;
    let age = document.getElementById('age').value = res.age;
    let place = document.getElementById('place').value = res.place;
    let batchName = document.getElementById('batch').value = res.batch_name
    let professionToUpdate = document.getElementById("profession").value = res.profession
})


function putReqyest(e) {
e.preventDefault();

let name = document.getElementById('name').value;
let age = document.getElementById('age').value;
let place = document.getElementById('place').value;
let batchName = document.getElementById('batch').value;
let professionToUpdate = document.getElementById("profession").value;

fetch(`https://fakestoreproducts.herokuapp.com/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        name: name,
        age: age,
        place: place,
        batch_name: batchName,
        profession: professionToUpdate
    })
   })
    .then(response => response.json())
    .then(response => {
        window.location.href="data.html"
        localStorage.removeItem("id")
       });
}