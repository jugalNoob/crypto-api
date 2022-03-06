const ka=()=>{


   
    document.getElementById("sides").style.width="200px"

}


const fun=()=>{

       
    document.getElementById("sides").style.width="00px"

}


// fear and gird 


// const api = await fetch("https://api.alternative.me/fng/?limit=2")



async function fear(){


    const api = await fetch("https://api.alternative.me/fng/?limit=2")

    const apis=await api.json()

    // console.log(apis.data[0].value)

    const fear=apis.data[0].value

    document.getElementById("greed-one").innerHTML=fear


    //greed


    const greed=apis.data[1].value

    document.getElementById("fear-one").innerHTML=greed

}


fear()