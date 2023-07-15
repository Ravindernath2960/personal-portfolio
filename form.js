let form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const p=document.querySelector("#product");
    const q=document.querySelector("#qty");
    let pvalue=p.value;
    let qvalue =q.value;
    // if(pvalue=="clear"){
    //     clear();
    // }
    create(pvalue,qvalue);

    p.value='';
    q.value='';
   
})
function create( p,q){
 const li=document.createElement("li");
 li.append(`${q} ${p}`);
 const ul=document.querySelector("#list");
 ul.appendChild(li);

}
// function clear(){
//     const l=document.querySelectorAll("#list li");
//     for(lis of l){
//         delete lis;
//     }
// }