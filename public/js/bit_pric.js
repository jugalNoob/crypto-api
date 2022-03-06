// side nav bar start row classs


const ka=()=>{


   
    document.getElementById("sides").style.width="200px"

}


const fun=()=>{

       
    document.getElementById("sides").style.width="00px"

}




// side nav bar start row classs




async  function api(){

    const api = await fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const data=await api.json()



     const price=data[0].current_price
    

    document.getElementById("btcprice").innerHTML=price


    //hight bitcion price

    const bit_high=data[0].high_24h

    document.getElementById("highprice").innerHTML=bit_high


    //low bitcion prices

    const bit_low=data[0].low_24h

    document.getElementById("lowprice").innerHTML=bit_low

}


api()


// console.log(data[0].name)


//eth row class API




async function eth(){

    const eth = await fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const eths=await eth.json()

    const ethes=eths[1].current_price

    document.getElementById("ethprice").innerHTML=ethes
     


    //high prices are

    const etheshigh=eths[1].high_24h

    document.getElementById("higheth").innerHTML=etheshigh


    //low price eth


    const etheslow=eths[1].low_24h

    document.getElementById("loweth").innerHTML=etheslow

}

eth()


// eth_low



// cardano api start row 




async  function ada(){

    const ada = await fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const adas=await ada.json()


    const adaes=adas[4].current_price


    document.getElementById("adaprice").innerHTML=adaes


    //high

    
    const adahigh=adas[4].high_24h


    document.getElementById("highada").innerHTML=adahigh


    //low 


    
    
    const adalow=adas[4].low_24h


    document.getElementById("lowada").innerHTML=adalow



}


ada()




//bnb coin information




async  function bnb(){


    const bnb=await  fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const bnb_coin=await bnb.json()

    const bnbs=bnb_coin[2].current_price

    document.getElementById("bnbprice").innerHTML=bnbs


    // high_24h
    const bnbhigh=bnb_coin[2].high_24h

    document.getElementById("highbnb").innerHTML=bnbhigh


    //lowprice


    const bnblow=bnb_coin[2].low_24h

    document.getElementById("lowbnb").innerHTML=bnblow

}

bnb()


// usdt price information






async  function usdt(){


    const usdt=await  fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const usdt_coin=await usdt.json()

    const usdts=usdt_coin[3].current_price

    document.getElementById("usdtprice").innerHTML=usdts


    // high_24h
    const usdthigh=usdt_coin[3].high_24h

    document.getElementById("highusdt").innerHTML=usdthigh


    //lowprice


    const usdtlow=usdt_coin[3].low_24h

    document.getElementById("lowusdt").innerHTML=usdtlow

}

usdt()




// xrp




async  function xrp(){


    const xrp=await  fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const xrp_coin=await xrp.json()

    const xrps=xrp_coin[5].current_price

    document.getElementById("xrpprice").innerHTML=xrps


    // high_24h
    const xrphigh=xrp_coin[5].high_24h

    document.getElementById("highxrp").innerHTML=xrphigh


    //lowprice


    const xrplow=xrp_coin[5].low_24h

    document.getElementById("lowxrp").innerHTML=xrplow

}

xrp()


// sol price information












async  function sol(){


    const sol=await  fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const sol_coin=await sol.json()

    const sols=sol_coin[6].current_price

    document.getElementById("solprice").innerHTML=sols


    // high_24h
    const solhigh=sol_coin[6].high_24h

    document.getElementById("highsol").innerHTML=solhigh


    //lowprice


    const sollow=sol_coin[6].low_24h

    document.getElementById("lowsol").innerHTML=sollow

}

sol()



// dot price






async  function dot(){


    const dot=await  fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const dot_coin=await dot.json()

    const dots=dot_coin[7].current_price

    document.getElementById("dotprice").innerHTML=dots


    // high_24h
    const dothigh=dot_coin[7].high_24h

    document.getElementById("highdot").innerHTML=dothigh


    //lowprice


    const dotlow=dot_coin[7].low_24h

    document.getElementById("lowdot").innerHTML=dotlow

}

dot()



// usdc price information\





async  function usd(){


    const usd=await  fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const usd_coin=await usd.json()

    const usds=usd_coin[8].current_price

    document.getElementById("usdcprice").innerHTML=usds


    // high_24h
    const usdhigh=usd_coin[8].high_24h

    document.getElementById("highusdc").innerHTML=usdhigh


    //lowprice


    const usdlow=usd_coin[8].low_24h

    document.getElementById("lowusdc").innerHTML=usdlow

}

usd()


// dog price




async  function dog(){


    const dog=await  fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false   ")
        

    const dog_coin=await dog.json()

    const dogs=dog_coin[9].current_price

    document.getElementById("dogprice").innerHTML=dogs


    // high_24h
    const doghigh=dog_coin[9].high_24h

    document.getElementById("highdog").innerHTML=doghigh


    //lowprice


    const doglow=dog_coin[9].low_24h

    document.getElementById("lowdog").innerHTML=doglow

}

dog()
