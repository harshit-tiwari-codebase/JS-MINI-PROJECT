function openCards() {
    let allElem = document.querySelectorAll('.elem');
    let full = document.querySelectorAll('.full');
    let fullBack = document.querySelectorAll('.full .goBack');

    allElem.forEach((elem) => {
        elem.addEventListener('click', () => {
            full[elem.id].style.display = 'flex';
        });
    });

    fullBack.forEach((back) => {
        back.addEventListener('click', () => {
            full[back.id].style.display = 'none';
        });
    });
}

openCards();

function Todolist() {

    let form = document.querySelector('.addTask form');
    let formIn = document.querySelector('.addTask form input');
    let textIn = document.querySelector('.addTask form textarea');
    let taskImp = document.querySelector('.addTask form #important');
    let TaskList = document.querySelector('.TaskList');

    let currentTask = JSON.parse(localStorage.getItem("currentTask")) || [];

    function renderTasks() {
        let clutter = "";

        currentTask.forEach((e, index) => {
            clutter += `
        <div class="task">
            <h1>${e.Task} ${e.taskCheck ? '<span class="imp">⭐</span>' : ''}</h1>
            <button data-id="${index}">Task Completed</button>
        </div>`;
        });

        TaskList.innerHTML = clutter;

        let compbtn = document.querySelectorAll('.task button');
compbtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let id = btn.dataset.id;

        btn.parentElement.style.width = "0%";

        setTimeout(() => {
            currentTask.splice(id, 1);
            renderTasks();
        }, 300);
    });
});


        localStorage.setItem("currentTask", JSON.stringify(currentTask));
    }





    form.addEventListener('submit', (e) => {
        e.preventDefault();

        currentTask.push({
            Task: formIn.value,
            details: textIn.value,
            taskCheck: taskImp.checked
        });

        localStorage.setItem("currentTask", JSON.stringify(currentTask));

        renderTasks();
        form.reset();
    });




    renderTasks();
}

Todolist();



function DailyPlanner(){

    let flutter = '';
    let daily = document.querySelector('#daily-container');

    // GET planner from localStorage
    let dayPlanData = JSON.parse(localStorage.getItem("dayPlan")) || [];

    let hours = Array.from({length:18},(elem,idx)=>{
        return `${6+idx}:00 - ${7+idx}:00`;
    });

    hours.forEach((e,i)=>{
        flutter += `
        <div class="plan">
            <p>${e}</p>
            <input data-id="${i}" type="text" placeholder="..." value="${dayPlanData[i] || ''}">
        </div>`;
    });

    daily.innerHTML = flutter;

    let plan = document.querySelectorAll('.plan input');

    plan.forEach((ip)=>{

        ip.addEventListener('input',()=>{

            dayPlanData[ip.dataset.id] = ip.value;

            // SAVE to localStorage
            localStorage.setItem("dayPlan", JSON.stringify(dayPlanData));

        });

    });

}
 DailyPlanner();

async function getQuote(){

    let res = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random/10");
    let data = await res.json();

    let random = data[Math.floor(Math.random() * data.length)];

    let quote = random.quote;
    let author = random.author || "Unknown";

    typeQuote(quote); // typing animation

    document.querySelector(".quote-author").innerText = "— " + author;
}

// typing animation
function typeQuote(text){

    let h1 = document.querySelector(".motivation-container h1");
    h1.innerHTML="";

    let i = 0;

    let timer = setInterval(()=>{
        h1.innerHTML += text.charAt(i);
        i++;

        if(i >= text.length){
            clearInterval(timer);
        }
    },60);
}

getQuote();
