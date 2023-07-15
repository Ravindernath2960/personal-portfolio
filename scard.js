


let p1=document.querySelector(".p1")
let p2=document.querySelector(".p2")
let b1=document.querySelector(".b1")
let b2=document.querySelector(".b2")
let s1=document.querySelector(".s1")
let s2=document.querySelector(".s2")
let reset=document.querySelector(".reset")
let max=document.querySelector("#max")
let i=0;
let j=0;
let maxscore=0; 
max.addEventListener("change",function(){
     return maxscore=parseInt(this.value);
})

let gameon=false;

reset.addEventListener("click",function(){
    i=0;
    j=0;
    p1.innerHTML=i;
    p2.innerHTML=j;
    gameon=false;
    s1.style.backgroundColor="rgb(29, 78, 0)"
        s2.style.backgroundColor="rgb(29, 78, 0)"
    return color();
})

    
b1.addEventListener("click",function(){
    if(gameon!=true){
    i+=1;
    p1.innerHTML=i;
    if(i==maxscore){
        gameon=true;
        s1.style.backgroundColor="green"
        s2.style.backgroundColor="red"
        
    }
    return color();
}
})
b2.addEventListener("click",function(){
    if(gameon!=true){
    j+=1;
    p2.innerHTML=j;
    if(j==maxscore){
        gameon=true;
        s2.style.backgroundColor="green"
        s1.style.backgroundColor="red"
    }
    return color() ;}
})


function color(){
    if(i>j){
        p1.style.color="green";
        p2.style.color="red";
        return;
    }
    else if(j>i){
        p2.style.color="green";
        p1.style.color="red";
        return;
    }
    else{
        p2.style.color="white";
        p1.style.color="white";
        return;
    }
}

   



