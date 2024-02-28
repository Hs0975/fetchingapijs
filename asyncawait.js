async function fectchItems(){
    const api = fetch("https://dummyjson.com/products");
    const promise1 = await api;
    const data = await promise1.json();
    return data
      
    }
    
    fectchItems().then((res)=>{
      console.log(res)
    })