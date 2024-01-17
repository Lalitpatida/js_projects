//setting initial value
let count=0;

//selecting values and buttons
 const value=document.querySelector('#value');
 const btns=document.querySelectorAll('.btn');


 btns.forEach(function (btn){
    btn.addEventListener("click",function(e){
        //console.log(e); return pointer event
        //console.log(e.currentTarget) target an specif event which we have clicked
        
        const styke=e.currentTarget.classList;
        // console.log(styke); DomTokenList which contains the specific target
        if(styke.contains("decrease")){
            count--;
        }else if(styke.contains("reset")){
            count=0;
        }else{
            count++;
        }
        if(count>0){
            value.style.color="green";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count === 0){
            value.style.color="#222";
        }
        value.textContent=count;
    });
 });