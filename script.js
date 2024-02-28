
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => createCard(data))
.catch((err) => { console.log("error", err) })

function createCard(list) {
console.log(list)
const generateList = document.getElementById("generateList")

list.forEach((val) => {
  console.log(val)
  const card = document.createElement("div")
  card.style = "border:2px solid red;width:200px;height:250px"
   const id = document.createElement("h2")
   id.innerText = val.id
  const title = document.createElement("p")
  title.innerText = val.title
  title.style="font-size:20px; font-weight:bolder"
  const status = document.createElement("p")
 
  if(val.completed==true){
     status.innerText = 'completed'
     status.style="color:green"
    
  }
  else{
    status.innerText="Not completed"
    status.style="color:red"
  }
     
const delbtn = document.createElement('button')
delbtn.innerText = "Delete"
delbtn.style="color:white; background-color:red"

delbtn.addEventListener("click",function(){
  generateList.removeChild(card)
})



const edtbtn = document.createElement('button')
edtbtn.innerText = "edit"
edtbtn.style="background-color:green; color:white; margin:5px"

edtbtn.addEventListener("click",function(){
 
if(edtbtn.innerText==="edit"){
  let inpt= document.createElement("input")
  inpt.setAttribute("type", "text")
  inpt.value=val.title
  card.append(inpt)
  edtbtn.innerText="Save"

}
else if( edtbtn.innerText=="Save"){
  val.title.innerText=inpt.value
  edtbtn.innerText="edit"
}


})

  
  const x = document.createElement("INPUT");
     x.setAttribute("type", "checkbox");
if(val.completed==true){
  x.checked=true;
}


  card.append(id, title, status,x,delbtn,edtbtn)
  generateList.appendChild(card)
})
} 