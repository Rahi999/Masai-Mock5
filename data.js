//https://fakestoreproducts.herokuapp.com/users

fetch(`https://fakestoreproducts.herokuapp.com/users`)
.then((res)=> res.json())
.then((res)=> {
    displayUserData(res)

    // --------->>>>>>   Sorting By Age Functionality   -------------->>>>>>>>>>>
    document.getElementById("select").addEventListener("change", handleAgeSort)
    function handleAgeSort(){
            document.getElementById("container").innerHTML = null
            let loading = document.createElement("img");
            loading.setAttribute('id','loading')
            loading.src = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
            document.getElementById("container").append(loading)
   
          var selected = document.querySelector("#select").value;
          console.log(selected);
          if(selected=="asc")
          {
              res.sort(function(a,b){
                  if(a.age>b.age) return 1
                  if(a.age<b.age) return -1;
                  return 0
              });
              displayUserData(res)
          }
          if(selected=="des")
          {
              res.sort(function(a,b){
                  if(a.age>b.age) return -1
                  if(a.age<b.age) return 1;
                  return 0
              });
              displayUserData(res)
          }
      }

})



//  --------------->>>>>>>>>>>  Searching Functionality   ------------->>>>>>>>>>>>>>>

function Searching() {
    document.getElementById("container").innerHTML = null
    let loading = document.createElement("img");
    loading.setAttribute("id","loading")
    loading.src = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
    document.getElementById("container").append(loading)
   

    let query = document.getElementById("search").value;
    console.log(query)
   fetch(`https://fakestoreproducts.herokuapp.com/users?q=${query}`)
   .then((res)=> res.json())
   .then((res)=> displayUserData(res))
   .catch((err)=> alert("Couldn't Find Data"))
       
 
 }
  document.getElementById("search").addEventListener("input",Searching)



// ------------>>>>>>  Displaying All Users Data On UI     ------------------>>>>>>>>>>
function displayUserData(data){
    document.getElementById("container").innerHTML = null;
    data.map((elem)=> {
        let box = document.createElement('div');
        box.setAttribute("id","box");

        let image = document.createElement('img');
        image.setAttribute("id","image");
        image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQVDZzmYwKrMZsWyCUCfRqP-QK7vHJqTl0gCCqkuu0g&s";

        let name = document.createElement("h4");
        name.setAttribute('id',"name");
        name.innerText= `Name : ${elem.name}`;

        let age = document.createElement('h4');
        age.setAttribute('id','age');
        age.innerText = `Age : ${elem.age}`;

        let place = document.createElement("h4");
        place.setAttribute("id","place");
        place.innerText = `Place : ${elem.place}`

        let batchName = document.createElement("h4");
        batchName.setAttribute("id","batchName");
        batchName.innerText = `Batch-Name : ${elem.batch_name}`;

        let profession = document.createElement("h4");
        profession.setAttribute("id","profession");
        profession.innerText = `Profession : ${elem.profession}`;

        let btn = document.createElement("img");
        btn.setAttribute("id","delete");
       btn.src = 'https://www.svgrepo.com/show/21045/delete-button.svg'
        btn.addEventListener("click",()=> deleteUserData(elem.id));

        let edit = document.createElement("img");
        edit.setAttribute("id","edit");
        edit.src = 'https://cdn-icons-png.flaticon.com/512/157/157325.png'
        edit.addEventListener("click",()=> editUserData(elem.id));

        box.append(image,name,age,place,batchName,profession,btn,edit);
        document.getElementById('container').append(box)


       
    })
}

// ------------>>>>>>> Deleting Functionality   ---------->>>>>>>>>>

function deleteUserData(id){

    fetch(`https://fakestoreproducts.herokuapp.com/users/${id}`,{
        method: "DELETE"
    })
    .then((res)=> res.json())
    .then((res)=> window.location.reload())
}


// ------------>>>>>>> Editing Functionality   ---------->>>>>>>>>>

function editUserData(id) {
    localStorage.setItem("id",id)
    window.location.href = "edit.html"
}



// ---------->>>>>>>>>>>  Filtering Functionality  ------------->>>>>>>>>>


document.getElementById('f1').addEventListener('change',fil1)
function fil1() {
    document.getElementById("container").innerHTML = null
    let loading = document.createElement("img");
    loading.setAttribute("id","loading")
    loading.src = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
    document.getElementById("container").append(loading)

  let i1 = document.getElementById("Web-17").value
  fetch(`https://fakestoreproducts.herokuapp.com/users?q=${i1}`)
  .then((res)=> res.json())
  .then((res)=> displayUserData(res))
  .catch(()=> alert("Didn't Match The Data"))
}

document.getElementById('f2').addEventListener('change',fil2)
function fil2() {
    document.getElementById("container").innerHTML = null
    let loading = document.createElement("img");
    loading.setAttribute("id","loading")
    loading.src = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
    document.getElementById("container").append(loading) 

  let i2 = document.getElementById("Web-16").value
  fetch(`https://fakestoreproducts.herokuapp.com/users?q=${i2}`)
  .then((res)=> res.json())
  .then((res)=> displayUserData(res))
  .catch(()=> alert("Didn't Match The Data"))
}

document.getElementById('f3').addEventListener('change',fil3)
function fil3() {
    document.getElementById("container").innerHTML = null
    let loading = document.createElement("img");
    loading.setAttribute("id","loading")
    loading.src = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
    document.getElementById("container").append(loading)

  let i3 = document.getElementById("Web-15").value
  fetch(`https://fakestoreproducts.herokuapp.com/users?q=${i3}`)
  .then((res)=> res.json())
  .then((res)=> displayUserData(res))
  .catch(()=> alert("Didn't Match The Data"))
}

document.getElementById('f4').addEventListener('change',fil4)
function fil4() {
    document.getElementById("container").innerHTML = null
    let loading = document.createElement("img");
    loading.setAttribute("id","loading")
    loading.src = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
    document.getElementById("container").append(loading)

  let i4 = document.getElementById("Web-14").value
  fetch(`https://fakestoreproducts.herokuapp.com/users?q=${i4}`)
  .then((res)=> res.json())
  .then((res)=> displayUserData(res))
  .catch(()=> alert("Didn't Match The Data"))
}
