console.log("ahlan sahlan ramadan");

let btnStatus = ["all-btn","interview-btn","rejected-btn"] ;
// job tracker section

const total = document.getElementById("total");
const emptyData = document.getElementById('no-data')
// btn section 
const box =document.getElementById("btn-box");

const allBtn = document.getElementById("all-btn");
const intrviewBtn= document.getElementById("interview-btn");
const rejectBtn = document.getElementById("rejected-btn");
// card-container-sectaion
const all =document.getElementById("all-cards");

console.log(all.children.length);


function count(){

total.innerText=all.children.length;
}

count()

function toggleStyle (id){
    const selected =document.getElementById(id);

    for (const element of box.children) {
        console.log(element);
        
        element.classList.remove("text-white","bg-[#3B82F6]");
        element.classList.add('text-[#64748B]','bg-white');
    }

    selected.classList.remove('text-[#64748B]','bg-white');
    selected.classList.add("text-white","bg-[#3B82F6]");
        
    if(id === "interview-btn"){
        all.classList.add("hidden");
        emptyData.classList.remove('hidden')
    }else if(id === "rejected-btn"){
        all.classList.add("hidden");
        emptyData.classList.remove('hidden')
    }else{
         all.classList.remove("hidden");
        emptyData.classList.add('hidden')
    }
}