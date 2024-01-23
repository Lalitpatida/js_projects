const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

//console.log(randomColor());
let Intervalid;
const startChngColor=function(){

 if(!Intervalid){
    Intervalid=setInterval(changeBgcolor,1000);
 }

    function changeBgcolor(){
        document.body.style.backgroundColor=randomColor();
    };    
};

const stopChngColor=function(){
    clearInterval(Intervalid)
    Intervalid=null;
};
document.querySelector('#start').addEventListener('click',startChngColor);
document.querySelector('#stop').addEventListener('click',stopChngColor);