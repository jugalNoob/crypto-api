




// side nav bar row class function



// const api = await fetch("https://api.alternative.me/fng/?limit=2")


    //     const my=jsdata.data[1].value

    //     document.getElementById("bitcoin").innerHTML= mydata;

    //     document.getElementById("do").innerHTML= my;
const ka=()=>{


   
    document.getElementById("sides").style.width="200px"

}


const fun=()=>{

       
    document.getElementById("sides").style.width="00px"

}









   
    
    async function getapi (){






        try{

            const api = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        
        
        
        
        
            const jsdata=await api.json()
            
          const bit=jsdata[0].name

          document.getElementById("bit").innerHTML=bit


      
          const price=jsdata[0].current_price

          document.getElementById("price").innerHTML=price




          //eth



          const eth_name=jsdata[1].name

          document.getElementById("eth_name").innerHTML=eth_name





          const eth_price=jsdata[1].current_price

          document.getElementById("eth_price").innerHTML= eth_price
          



          //doge coin



          
          const dog_name=jsdata[9].name

          document.getElementById("dog_name").innerHTML=dog_name





          const dog_price=jsdata[9].current_price

          document.getElementById("dog_price").innerHTML= dog_price
          


        }catch(e){



        alert(e + "api error")


        }
       


       


        }

  

    

        
        
    
        
        
        
        getapi()










