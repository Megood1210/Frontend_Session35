const btnAdd = document.querySelector("#title");
const form = document.querySelector("#form");
const inputWeb = document.querySelector("#exampleInputEmail1");
const inputUrl = document.querySelector("#exampleInputPassword1");
const btnSubmit = document.querySelector("#btn");
const ul = document.querySelector("#ul");
const closeForm = document.querySelector("#btn-X");
const web = JSON.parse(localStorage.getItem("webs")) || [];


function renderWebs() {
    ul.innerHTML = "";
    web.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <div>${item.web}</div>
            <div><button class="btn-close" data-index="${index}">X</button></div>
        `;
        ul.appendChild(li);
    });
    
    document.querySelectorAll('.btn-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            if(confirm("Bạn có chắc chắn muốn xóa không ?")) {
                web.splice(index, 1);
                localStorage.setItem("webs", JSON.stringify(web));
                renderWebs(); 
            }
        });
    });
}

renderWebs();

btnAdd.addEventListener('click',function () {
    form.style.display = "block";
    document.body.style.background = "rgba(0, 0, 0, 0.6)";
});

closeForm.addEventListener('click', function () {
    form.style.display = "none";
    document.body.style.background = " rgb(103, 9, 191)";
    event.preventDefault();
});

btnSubmit.addEventListener('click', function () {
    let inputWebValue = inputWeb.value.trim();
    let inputUrlValue = inputUrl.value.trim();
    if (inputWebValue === "" || inputUrlValue === ""){
        alert("Không được để trống!!!");
        return;
    }
    web.push({web : inputWebValue,url : inputUrlValue});
    localStorage.setItem("webs",JSON.stringify(web));
    inputWeb.value = "";
    inputUrl.value = "";
    form.style.display = "none";
    document.body.style.background = "rgb(103, 9, 191)";
    
    renderWebs();
});