let interview =[]
let rejected =[]
let current = "";

// job tracker section

const total = document.getElementById("total");
const emptyData = document.getElementById('no-data')
// btn section 
const box =document.getElementById("btn-box");

const allBtn = document.getElementById("all-btn");
const intrviewBtn= document.getElementById("interview-btn");
const rejectBtn = document.getElementById("rejected-btn");
const job = document.getElementById("jobs")
// card-container-sectaion
const all =document.getElementById("all-cards");
const inter = document.getElementById("interview");
const reject = document.getElementById("rejected");




function count(){
job.innerText=`${all.children.length} jobs`
total.innerText=all.children.length;
inter.innerText= interview.length;
console.log(interview);


}
function lengt(){
    let length=all.children.length;
    if(length===0){
        emptyData.classList.remove('hidden')
    }
}

count()

function toggleStyle (id){
    const selected =document.getElementById(id);

    for (const element of box.children) {
      
        
        element.classList.remove("text-white","bg-[#3B82F6]");
        element.classList.add('text-[#64748B]','bg-white');
    }

    selected.classList.remove('text-[#64748B]','bg-white');
    selected.classList.add("text-white","bg-[#3B82F6]");
        current = id;
    if(id === "interview-btn"){
        all.classList.add("hidden");
        emptyData.classList.remove('hidden')
    }else if(id === "rejected-btn"){
        all.classList.add("hidden");
        emptyData.classList.remove('hidden')
    }else{
         all.classList.remove("hidden");
        emptyData.classList.add('hidden')
        lengt()
    }
}

all.addEventListener("click",function(envt){
    if(envt.target.classList.contains("trash",)){
        const paranNode = envt.target.parentNode.parentNode;
        
       
        if ("trash" ==="trash") {
            paranNode.remove()
            
        } 
        count()
    }else if(envt.target.classList.contains("interview")){
         const paranNode = envt.target.parentNode.parentNode;
         const jobName = paranNode.querySelector(".card-title").innerText;
    
        const info = {
            jobName
        }
        console.log(info);
        
        const jobExisting = interview.find(item=> item.jobName == info.jobName)
        if (!jobExisting) {
            interview.push(info)
            count()
        }
        
        
    }
    
    lengt()
})