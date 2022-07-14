let toDoList = [];
let completeList = [];

let showTask = () => {
   let contentNew = "";
   let contentComplete = "";

   for (const index in toDoList) {
      contentNew += `
         <li>
            <span>${toDoList[index]}</span>
            <div class="buttons">
               <button onclick="deleteTask(${index})" class="remove"><i class="fa fa-trash-alt"></i></button>
               <button onclick="taskComplete(${index})"><i class="fa fa-check"></i></button>
            </div>
         </li>
      `
   }
   document.querySelector("#todo").innerHTML = contentNew;

   for (const index in completeList) {
      contentComplete += `
         <li>
            <span>${completeList[index]}</span>
            <div class="buttons">
               <button onclick="deleteCompleted(${index})" class="remove"><i class="fa fa-trash-alt"></i></button>
               <span class="complete"><i class="fa fa-check"></i></span>
            </div>
         </li>
      `
   }
   document.querySelector("#completed").innerHTML = contentComplete;
}

let addTask = () => {
   if (document.querySelector("#newTask").value !== "") {
      let newTask = document.getElementById("newTask").value;
      toDoList.push(newTask);
      showTask();

      document.querySelector("#newTask").value = "";
   }
}

let deleteTask = (index) => {
   delete toDoList[index];
   showTask();
}

let taskComplete = (index) => {
   completeList.push(toDoList[index]);
   deleteTask(index);
   showTask();
}

let deleteCompleted = (index) => {
   delete completeList[index];
   showTask();
}

document.querySelector("#two").onclick = () => {
   toDoList.sort();
   showTask();
};

document.querySelector("#three").onclick = () => {
   toDoList.sort();
   toDoList.reverse();
   showTask();
};

