document.getElementById("addTask").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;
    if (taskValue === "") {
        alert("O nhap cong viec khong doc trong");
        return;
    }
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `<span>${taskValue}</span>
        <div>
            <button class="edit">Sửa</button>
            <button class="delete">Xóa</button>
        </div>`;
    document.getElementById("taskList").appendChild(taskDiv);
    taskInput.value = "";
    taskDiv.querySelector(".delete").addEventListener("click", function() {
        if (confirm("Ban muon xoa cong viec khong")) {
            taskDiv.remove();
        }
    });
    taskDiv.querySelector(".edit").addEventListener("click", function() {
        let newTask = prompt("Nhap cong viec moi", taskValue);
        if (newTask !== null && newTask !== "") {
            taskDiv.querySelector("span").textContent = newTask;
        }
    });
});