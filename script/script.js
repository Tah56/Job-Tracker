let interview =[]
let rejected =[]
let current = "";

// job tracker section
const section= document.getElementById("clone")
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
const main = document.getElementById("main")




function count(){
total.innerText=all.children.length;
inter.innerText= interview.length;
reject.innerText=rejected.length;
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
        if(interview.length === 0){
            job.innerText =`${interview.length} out of ${all.children.length} jobs`
            
            all.classList.add("hidden");
            emptyData.classList.remove('hidden')
            
        }else{
            job.innerText =`${interview.length} out of ${all.children.length} jobs`
            all.classList.add("hidden")
            emptyData.classList.add('hidden')
            section.classList.remove("hidden")
            renduringInterview()
            

        }


    }else if(id === "rejected-btn" && rejected.length === 0){
        all.classList.add("hidden");
        job.innerText =`${rejected.length} out of ${all.children.length} jobs`
        emptyData.classList.remove('hidden')
        
        
        
    }else if(id === "rejected-btn" && rejected.length>0){
        all.classList.add("hidden")
        section.classList.remove("hidden")
        emptyData.classList.add("hidden")
        rendurRejcted();
        job.innerText =`${rejected.length} out of ${all.children.length} jobs`
        
    }else{
        all.classList.remove("hidden");
        emptyData.classList.add('hidden')
        section.classList.add("hidden")
        lengt()
        count()
        
    }
}

function updateHeaderCount(){
    if(current === "interview-btn"){
        job.innerText = `${interview.length} out of ${all.children.length} jobs`
    }
    else if(current === "rejected-btn"){
        job.innerText = `${rejected.length} out of ${all.children.length} jobs`
    }
    else{
        job.innerText = `${all.children.length} jobs`
    }
}
main.addEventListener("click",function(envt){
    if(envt.target.classList.contains("trash",)){
        const paranNode = envt.target.parentNode.parentNode;
        const jobName = paranNode.querySelector(".card-title").innerText;
        
        const info = {
            jobName
        }
        
        
        interview = interview.filter(item=> item.jobName !== info.jobName);
        rejected = rejected.filter(item=> item.jobName !== info.jobName);
        
        paranNode.remove()
        if(interview.length ===0){
            emptyData.classList.remove("hidden")
            
        }else if(rejected.length === 0){
            emptyData.classList.remove('hidden')
        }
        count()
    }else if(envt.target.classList.contains("interview")){
        const paranNode = envt.target.parentNode.parentNode;
        const jobName = paranNode.querySelector(".card-title").innerText;
        const position = paranNode.querySelector(".position").innerText;
        const state = paranNode.querySelector(".state").innerText;
        
        const info = {
            jobName,
            position,
            state :"INTERVIEW"
            
        }
        
        const jobExisting = interview.find(item=> item.jobName == info.jobName)
        paranNode.querySelector(".state").innerText= "INTERVIEW"
        paranNode.querySelector(".state").classList.remove("border-none", "bg-[#002C5C]/10", "text-[#002C5C]")
        paranNode.querySelector(".state").classList.add("border", "border-green-500", "bg-white", "text-green-500")
        if (!jobExisting) {
            interview.push(info)
            
        }
        
        
        rejected =  rejected.filter(item=> item.jobName !== info.jobName);
        if (current === "interview-btn") {
    renduringInterview();
}
else if (current === "rejected-btn") {
    emptyData.classList.remove("hidden");
    rendurRejcted();
}

count()
updateHeaderCount()
        
        
    
    }else if(envt.target.classList.contains("reject")){
         const paranNode = envt.target.parentNode.parentNode;
         const jobName = paranNode.querySelector(".card-title").innerText;
         console.log(paranNode);
         
         
        const info = {
            jobName,
        }
        
        const jobExisting = rejected.find(item=> item.jobName == info.jobName)
        if (!jobExisting) {
            rejected.push(info)
        }
        
        interview =  interview.filter(item=> item.jobName !== info.jobName);
        if (current === "interview-btn") {
            emptyData.classList.remove("hidden")
    renduringInterview();
}
else if (current === "rejected-btn") {
    rendurRejcted();
}
count()
updateHeaderCount()
        
    }
    
    lengt()
})


function renduringInterview (){
   section.innerText="";

   for (const intr of interview) {
       let div = document.createElement("div");
       div.className ="card bg-base-100 w-full shadow-sm";
       div.innerHTML=` <div class="card-body">
                    <h2 class="card-title">
                    ${intr.jobName}                      
                    </h2>

                    <p id="position" class="text-[#64748B]">${intr.position}</p>
                    <p class="my-5">
                        Remote • Full-time • $130,000 - $175,000
                    </p>
                    <div>
                         <button class="btn py-2.5 px-8 btn-active border border-green-500 bg-white text-green-500">
                            ${intr.state}
                        </button>
                    </div>
                    <p>Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    <div class="card-actions justify-start">
                        <button class="interview btn btn-active border border-green-500 bg-white text-green-500">
                            INTERVIEW
                        </button>
                        <button class="reject btn btn-active border border-red-500  bg-white text-red-500">
                            REJECTED
                        </button>
                    </div>
                </div>
                <div class=" w-[50px] h-[50px] rounded-full shadow-2xl text-center shadow-[#64748B] border border-[#64748B] content-center absolute right-2 top-5"><i class="cursor-pointer trash fa-solid fa-trash-can"></i> </div>`

                section.appendChild(div)
   }

}
function rendurRejcted (){
   section.innerText="";

   for (const intr of rejected) {
       let div = document.createElement("div");
       div.className ="card bg-base-100 w-full shadow-sm";
       div.innerHTML=` <div class="card-body">
                    <h2 class="card-title">
                    ${intr.jobName}                      
                    </h2>

                    <p id="position" class="text-[#64748B]">React Native Developer</p>
                    <p class="my-5">
                        Remote • Full-time • $130,000 - $175,000
                    </p>
                    <div>
                         <button class="btn py-2.5 px-8 btn-active border-none bg-[#002C5C]/10 text-[#002C5C]">
                            REJECTED
                        </button>
                    </div>
                    <p>Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    <div class="card-actions justify-start">
                        <button class="interview btn btn-active border border-green-500 bg-white text-green-500">
                            INTERVIEW
                        </button>
                        <button class="reject btn btn-active border border-red-500  bg-white text-red-500">
                            REJECTED
                        </button>
                    </div>
                </div>
                <div class=" w-[50px] h-[50px] rounded-full shadow-2xl text-center shadow-[#64748B] border border-[#64748B] content-center absolute right-2 top-5"><i class="cursor-pointer trash fa-solid fa-trash-can"></i> </div>`

                section.appendChild(div)
   }

}