

async  function FectingItems(){
    const api = fetch ('https://dummyjson.com/products')
    const waiting = await api
    const items = await waiting.json()
    return items
  
}

let incrementDecreDiv=document.getElementById("buttonDiv")
let maindiv= document.getElementById("Container")
maindiv.style="display:flex; flex-wrap:wrap;justify-content:center;margin-top:10px "
FectingItems().then((res)=>{
    res.products.forEach(element => {
        console.log(element)
let childDiv=document.createElement("div")
childDiv.style="height:650px; width:300px;border:2px solid black; text-align:center;"


let brand = document.createElement("h2")
brand.innerText=element.brand
brand.style="color:red"

let title = document.createElement("h3")
title.innerText=element.title
title.style="color:green"

let category = document.createElement("h2")
category.innerText=element.category


let desc = document.createElement("h5")
desc.innerText=element.description

desc.style="color:gray"

let prices = document.createElement("h2")
prices.innerText=element.price
prices.style="color:black"

let addtocart = document.createElement("button")
addtocart.innerText="AddtoCart"
addtocart.style="background-color:red;"


let increment=document.createElement("button")
increment.innerText="+";
increment.style="d"


let Decrement=document.createElement("button")
Decrement.innerText="-";
increment.style=""

let items=0

addtocart.addEventListener("click",()=>{
  let itemsadded=document.getElementById("addeditem")
  

})








let img = document.createElement('img')
let images=element.images
for(let i=0;i<images.length;i++){
img.src=images[i]
img.style="width:80%;height:40%"
}

childDiv.append(category,brand,img,title,desc,prices,addtocart,Decrement,increment)
maindiv.appendChild(childDiv)
    });

   
})
