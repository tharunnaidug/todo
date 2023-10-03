console.log("Hello World");
//Declaring globle ids

const inp = document.getElementById("inp");//user Task Input
const aT = document.getElementById("addTask")//add Task Btn
const ulList = document.getElementById(`ulList`);//Ul
const taskDis = document.getElementById("tas")//Task displaying
const tim = document.getElementById("tim")//Time displaying
const done = document.getElementById("done")//Done btn
const del = document.getElementById("del")//delete btn
const delBtn = document.querySelectorAll(`.delBtn`)
const temptext = document.getElementById("temp");//strating Deafulat Text
let inpVal = "";

//Adding task ()
const addTask = (task, time) => {
    const linode = document.createElement(`li`);
    document.createTextNode(linode.innerHTML = `<div class="tasks">
    <p id="tas" class="">${task}</p>
    <p id="tim">${time}</p>
    <button id="done">Done</button>
    <button id="del" class="delBtn">Delete</button>
</div>`)
    ulList.appendChild(linode);
}


//Handling AddTask btn
aT.addEventListener("click", () => {
    inpVal = inp.value;
    let d = Date(Date.now());
    let dd = d.toString();
    let time = dd.slice(16, 24);//Getting curent Time
    if (inpVal == "") {
        console.log("Enter the Task")
    } else {
        addTask(inpVal, time);
        inp.value = "";
        saveData();
        gg();
        di();
    }
})

//getting The Remove Li Index
const gg = () => {
    document.querySelectorAll(`.delBtn`).forEach((button, index) => {
        // console.log(button,index)
        button.addEventListener(`click`, () => {
            const listItm = button.parentElement;
            const indexDel = Array.from(document.querySelectorAll(`.tasks`)).indexOf(listItm);
            //   console.log(`deleted at `, button.value,indexDel)
            remove(indexDel)
        })
    })
}

//getting The Done Li Index
const di = () => {
    document.querySelectorAll(`#done`).forEach((button, index) => {
        // console.log(button,index)
        button.addEventListener(`click`, () => {
            const listItm = button.parentElement;
            listItm.style.textDecoration = `line-through`
            saveData();
        })
    })
}

//remove Task()
const remove = (index) => {
    ulList.removeChild(ulList.getElementsByTagName(`li`)[index]);
    saveData();
    di();
}

//AutoMactically Display When Reloaded
ulList.innerHTML = localStorage.getItem(`data`);
gg()//random Naming...

//Saving in Local Storage
const saveData = () => {
    localStorage.setItem("data", ulList.innerHTML);
     
}
// localStorage.clear()
window.onload(di())


// -----------------------------End of code Loc=90;------------------------//