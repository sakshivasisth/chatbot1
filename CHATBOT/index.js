var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select category"],
        options:['Hollywood','Bollywood','Web Series','Others'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:["Rains In UP: Death Toll Climbs To 28, Red Alert In Six Districts","Eye on China: IAF gets first of 65 C-295 aircraft, to boost troop airlift capability along borders","‘Alien’ bodies displayed during public hearing in Mexico","iPhone 15 and iPhone 15 Plus: Price, features and availability","How this alert doctor once again helped identify Nipah infection in Kerala"],
        url : {
            more:"https://youtube.com/@indianexpress?si=y2LFiQBC6iEg1bUP",
            link:["https://youtube.com/@indianexpress?si=y2LFiQBC6iEg1bUP","https://youtube.com/@aajtak?si=MoVr3G3rru0a7ioh","https://youtube.com/@indianexpress?si=y2LFiQBC6iEg1bUP","https://youtube.com/@zeenews?si=Z1CNXzJ8Dci5uv4U"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.amazon.in/electronics/b?node=976419031",
            link:["https://www.amazon.in/s?k=television&crid=3A7AR9XXHZCZM&sprefix=television%2Caps%2C326&ref=nb_sb_noss_1","https://www.amazon.in/s?k=camera&crid=3K3YA9XC65KFV&sprefix=camera%2Caps%2C253&ref=nb_sb_noss_1","https://www.amazon.in/s?k=gaming+console&crid=1UF48GSTM0511&sprefix=gaming+console%2Caps%2C287&ref=nb_sb_noss_1","https://www.amazon.in/s?k=haedphone&crid=1TJIS3BB31VGH&sprefix=haedphone%2Caps%2C261&ref=nb_sb_noss_2","https://www.amazon.in/s?k=speakers&ref=nb_sb_noss"]
        }
    },
    beauty: {

        
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.vogue.in/beauty",
            link:["https://www.nykaa.com/","https://www.skincare.com/","https://www.fragrancex.com/","https://www.amazon.in/s?k=natural+hair+shampoo+with+conditioner&adgrpid=1313918005377313&hvadid=82120134491943&hvbmt=bb&hvdev=c&hvlocphy=156779&hvnetw=o&hvqmt=b&hvtargid=kwd-82120763300963%3Aloc-90&hydadcr=5697_1986271&tag=msndeskstdin-21&ref=pd_sl_6q688nijst_b"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.91mobiles.com/",
            link:["https://www.flipkart.com/search?q=mobile%20phones&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off","https://www.flipkart.com/search?q=cases+and+covers&sid=tyy%2C4mr%2Cq2u&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&as-pos=1&as-type=RECENT&suggestionId=cases+and+covers%7CCases+%26+Covers&requestId=e0848cd5-4f6b-49be-bf26-2af197b03216&as-backfill=on","https://www.flipkart.com/search?q=power%20bank&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off","https://www.flipkart.com/search?q=tablet&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.myntra.com/shop/men",
            link:["https://www.myntra.com/shop/men","https://www.myntra.com/shirts?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0","https://www.myntra.com/tshirts?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0","https://www.myntra.com/innerwearvest?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0","https://www.bing.com/search?q=jeans+myntra+men&cvid=b1c850ea3725483abee6998e55e07e8f&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIECAEQADIECAIQADIECAMQADIECAQQADIECAUQADIECAYQADIGCAcQRRhA0gEINTM5OWowajSoAgCwAgA&FORM=ANAB01&PC=U531"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.ajio.com/shop/women",
            link:["https://www.myntra.com/shop/women","https://www.myntra.com/womens-western-wear","https://www.myntra.com/women-ethnic-wear","https://www.myntra.com/women-topbrands"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["Punjabi","Hindi","English","Bengali","Marathi"],
        url : {
            more:"https://youtu.be/chnNc-cNZno?si=DqYQe7aLvLFJH9ok",
            link:["https://youtu.be/chnNc-cNZno?si=DqYQe7aLvLFJH9ok","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos"]
        }
    },
Punjabi: {
    url : {
        link:["https://youtu.be/chnNc-cNZno?si=DqYQe7aLvLFJH9ok"]
    }
    },





    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.hotstar.com/in/explore?search_query=hollywood",
            link:["https://www.imdb.com/list/ls057433882/","https://www.imdb.com/search/title/?genres=horror&title_type=feature","https://www.netflix.com/in/browse/genre/1492","https://www.imdb.com/search/title/?title_type=feature&genres=romance","https://www.imdb.com/search/title/?genres=action&title_type=feature"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.hotstar.com/in/explore?search_query=bollywood",
            link:["https://www.hotstar.com/in/movies/garam-masala/1260107551","https://www.hotstar.com/in/movies/creature-3d/1000101223","https://www.imdb.com/list/ls082080947/","https://www.imdb.com/list/ls055035939/","https://www.imdb.com/list/ls052745924/"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.amazon.in/minitv/ct/web-series?mtv_pt=external&refMarker=avod_bing_mw_GWebS_New_TXT_AD1&utm_source=bing&utm_medium=cpc&utm_campaign=Generic%20-%20Web%20Series%20-%20Always%20On%20-%2028042022_Bing&utm_term=Web%20series&utm_content=Web%20Series%20-%20Exact",
            link:["https://www.zee5.com/web-series/genre/comedy","https://www.zee5.com/web-series/genre/horror","https://www.popxo.com/article/best-sci-fi-web-series/","https://www.zee5.com/web-series/genre/romance","https://www.zee5.com/web-series/genre/action"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","HotStar"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/","https://www.netflix.com/in/","https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_b_amazontest_mkw_5bgcvGj1-dc?mrntrk=pcrid_75660303191630_slid__pgrid_1210562788151299_pgeo_156779_x__ptid_kwd-75660529116296:loc-90","https://www.hotstar.com/in/home?ref=%2Fin","#"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}
