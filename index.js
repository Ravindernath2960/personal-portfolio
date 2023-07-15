
// let lcontent=document.querySelectorAll(".lcontent")
// let rcontent=document.querySelectorAll(".rcontent")

// let pics=document.querySelector(".pics")
// let contact=document.querySelector(".navbar #navButton")

// // var pos=document.documentElement;
// // pos.addEventListener("mousemove",e=>{
// //  pos.style.setProperty('--x',e.clientX+"px");
// //  pos.style.setProperty('--y',e.clientY+"px");
// // })
// window.addEventListener("scroll",function(){
//     let value =window.scrollY;
   
//     console.log(value)
//     if(value<380){ 
        
//         topl.style.marginLeft=value*.75+"px";
        
//     }
//     // if(value>380 && value<500){ 
        
//     //     topl.style.marginLeft=v2*.25+"px";
//     // }
//     for(all of lcontent){
//         all.style.marginLeft=value*.2+"px";
//     }
//     if(value>790){ 
        
       
//         for(all of rcontent){
//             all.style.marginRight=value*.1+"px";
//         }
//     }
     
   
    
   
   
  
// })

// const qualities=["creative","passionate","flexible","fooody","creative","passionate","flexible","fooody","creative","passionate"];
// for(let i=0;i<=9;i++){
// let hqua=document.createElement("div");
// pics.appendChild(hqua)
// hqua.classList.add("hq")
// hqua.innerText=qualities[i]
// }

function money(rup,yeild,years){for(let i=0;i<years;i++){
    let interest=rup*yeild;
    rup=rup+interest
} return rup }

//js for the animations;
// let center =document.querySelector(".center")
// center.addEventListener("scroll",function(){
//         let v=center.scrollY;
//         console.log(v);
// })
// let width=window.innerWidth;
//  let h2=document.querySelectorAll(".lh2");
//  window.addEventListener("scroll",function(){
//     let value=window.scrollY;
//     console.log(value)
//     if(value<920){
//         for(all of h2){
//             all.style.right=width-value*0.5 +"px";
//         }
//     }

//  })


let l=document.querySelectorAll(".lh2");
let r=document.querySelectorAll(".rh2");
let topl=document.querySelector(".topl")
let a=document.querySelectorAll(".navbar a")
let center=document.querySelector(".center")
let c=window.innerWidth;
let value =window.scrollY;

 
if(c>=900){
    
    window.addEventListener("scroll",function(){
        let value =window.scrollY;
        let width=window.innerWidth;
       
        // console.log(`${value}`)
        if(value>120&&value<1500){ l[0].style.right= width-200-value*0.2+"px";}
        l[1].style.right= width+200-value*0.3+"px";
        r[0].style.right= value*0.15+"px";
        if(value>2020){r[1].style.right= value*0.3-600+"px";}
        if(value<400){ 
        topl.style.marginLeft=value*.25+"px";
         }
       
     
    })
}
if(c<900&&c>550){
    console.log(c)
}
if(c<550){
    window.addEventListener("scroll",function(){
        let value =window.scrollY;
        
     // l[0].style.right=value*0.1+"px"
     // if(value>1530){
     //   l[1].style.right=value*0.1-150+"px"
     // }
     
    //  for(all of r){
    //        all.style.left=value*0.01+"px"
    //    }
     
    })
}
window.addEventListener("scroll",function change(){
    let value =window.scrollY;
    if(value>710){
        for(all of a){
            all.style.color="white";
        }

    }
    else{
        for(all of a){
            all.style.color="#012f36";
        }

    }

})
center.addEventListener("mouseover",function(){
    console.log("red");
    a[0].style.color="red";
})
// center.addEventListener("onKeypress",(e)=>{
//       if(e.keycode==65||e.keycode==65){
//         console.log("a");  
//       }
// })




// h scroll
let pscroll=document.querySelector(".pscroll");
window.addEventListener("scroll",()=>{
    let value=window.scrollY;
    let body =document.querySelector("body");
    let wh=window.innerHeight;
    let vmax=body.scrollHeight;
    let h1=(value/(vmax-wh))*wh;
    let v1=value+h1;
    pscroll.style.width=((v1)/vmax)*100 +"%";
})

document.addEventListener('keydown', function(event) {
    if(event.key=="h"){

    }
});
 
