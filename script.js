const textBox = document.getElementById("input-box");
const list = document.getElementById("container-list");
const repBox = document.getElementById("rep-box");
const setBox = document.getElementById("set-box");


function addTask() {
    if (textBox.value === '' || setBox.value === '' || setBox.value === '') {
        alert("Cannot be an empty field!");
    } else if(isNaN(repBox.value) || isNaN(setBox.value)) {
        alert("Sets and Repititions must be Valid Numbers!");
    } 
    else {
            let li = document.createElement("li");
            li.innerHTML = textBox.value;
            list.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            let setList = document.createElement("ul");
            for (let i = 1; i <= setBox.value; i ++) {
                let li1 = document.createElement("li");
                li1.innerHTML = "Set " + i + ": " + repBox.value + " Reps";
                setList.appendChild(li1);
            }
            li.appendChild(setList);  
            save();
    }
    textBox.value = '';
    setBox.value = '';
    repBox.value = '';
    
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    save();
}, false)

function save() {
    localStorage.setItem("data", list.innerHTML);
}

function set() {
    list.innerHTML = localStorage.getItem("data");
}
set();