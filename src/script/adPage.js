

document.getElementById("form").addEventListener("submit",adPageForm)

function adPageForm(e){
    e.preventDefault()

    let data={
         brand:form.brand.value,
         manual:form.manual.value,
        edition:form.edition.value,
        driven:form.driven.value,
        description:form.description.value,
        price:form.price.value,
       
    }

  
    postData(data)
    
    
}


async function postData(data){
    let res=await fetch("http://localhost:3001/cars",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    res=await res.json()
    getData()
}

// get data from json

async function getData(){

    let data=await fetch("http://localhost:3001/cars")
    let res= await data.json()
    displayData(res)
}

getData()


function displayData(favArr){
    let container=document.querySelector("tbody")
    container.innerHTML=null

    favArr.forEach(function(elem,index){
    
        var tr=document.createElement("tr")
    
        var td1=document.createElement("td")
        var img=document.createElement("img")
        img.src=elem.image_url
        img.style.width="100px"
        td1.append(img)
       
       
        var td2=document.createElement("td")
        td2.innerText=elem.book_name
       
        var td3=document.createElement("td")
        td3.innerText=elem.author
       
        var td4=document.createElement("td")
        td4.innerText=elem.genre
       
        var td5=document.createElement("td")
        td5.innerText=elem.edition
        var td6=document.createElement("td")
        td6.innerText=elem.publisher
        var td7=document.createElement("td")
        td7.innerText=elem.cost
        var td8=document.createElement("td")
        td8.innerText="EDIT"
       
    
        var dlt =document.createElement("td")
        dlt.innerText="DELETE"
        dlt.style.color="red"
        dlt.style.cursor="pointer"
        dlt.addEventListener("click",function(){
            dltFun(elem,elem.id)
        })
     
       
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,dlt)
       
        document.querySelector("tbody").append(tr)
    
    })
    
    }
    
    async function dltFun(ele,id){
       await fetch(`https://json-api-nz05.onrender.com/books/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
        
    })

    getData()
    
    }
    
