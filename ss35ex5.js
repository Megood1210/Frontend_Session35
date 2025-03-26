
let categories = [
    {
      cateCode: 'DM001',
      cateName: 'Quần áo',
      cateStatus: true,
    },
    {
      cateCode: 'DM002',
      cateName: 'Kính mắt',
      cateStatus: false,
    },
    {
      cateCode: 'DM003',
      cateName: 'Giày dép',
      cateStatus: true,
    },
    {
      cateCode: 'DM004',
      cateName: 'Thời trang nam',
      cateStatus: true,
    },
    {
      cateCode: 'DM005',
      cateName: 'Thời trang nữ',
      cateStatus: true,
    },
  ];
 document.addEventListener("DOMContentLoaded", function () {
    loadCategories(); // Gọi hàm load dữ liệu khi trang tải lại
  });
  
  function addCategory() {
    let categoryId = document.getElementById("categoryId").value.trim();
    let categoryName = document.getElementById("categoryName").value.trim();
    let categoryStatus = document.querySelector("input[name='categoryStatus']:checked").value;
  
    if (!categoryId || !categoryName) {
      alert("Mã danh mục và Tên danh mục không được để trống!");
      return;
    }
  
    let category = {
      id: categoryId,
      name: categoryName,
      status: categoryStatus,
    };
  
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories.push(category);
    localStorage.setItem("categories", JSON.stringify(categories));
  
    appendCategoryToTable(category);
    document.getElementById("categoryForm").reset();
    let modal = bootstrap.Modal.getInstance(document.getElementById("modal-add-category"));
    modal.hide();
  }
  
  function loadCategories() {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories.forEach(appendCategoryToTable);
  }
  
  function appendCategoryToTable(category) {
    let tbody = document.getElementById("tbody");
    let row = document.createElement("tr");
    row.classList.add("align-middle");
    
    row.innerHTML = `
      <td>${category.id}</td>
      <td>${category.name}</td>
      <td>
        <p class="status ${category.status === "active" ? "active" : "inactive"}">
          <i class="bi bi-dot"></i>
          <span>${category.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</span>
        </p>
      </td>
      <td>
        <i class="bi bi-trash" onclick="deleteCategory('${category.id}', this)" ></i>
        <i class="bi bi-pen" "></i>
      </td>
    `;
    tbody.appendChild(row);
  }
  
  function deleteCategory(id, element) {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories = categories.filter(category => category.id !== id);
    localStorage.setItem("categories", JSON.stringify(categories));
    
    element.closest("tr").remove();
  }
  document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector("#btn-add-category");
    const categoryIdInput = document.querySelector("#categoryId");
    const categoryNameInput = document.querySelector("#categoryName");

    addButton.addEventListener("click", function () {
        let isValid = true;

        // Reset trạng thái lỗi
        document.querySelectorAll(".error-message").forEach(el => el.remove());
        categoryIdInput.classList.remove("is-invalid");
        categoryNameInput.classList.remove("is-invalid");

        // Kiểm tra mã danh mục
        if (categoryIdInput.value.trim() === "") {
            showError(categoryIdInput, "Mã danh mục không được để trống");
            isValid = false;
        }

        // Kiểm tra tên danh mục
        if (categoryNameInput.value.trim() === "") {
            showError(categoryNameInput, "Tên danh mục không được để trống");
            isValid = false;
        }

        // Nếu hợp lệ thì tiếp tục xử lý thêm danh mục
        if (isValid) {
            alert("Danh mục hợp lệ, tiến hành thêm!");
            // Gọi API hoặc thực hiện logic thêm danh mục tại đây
        }
    });

    function showError(inputElement, message) {
        inputElement.classList.add("is-invalid");
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("error-message", "text-danger", "mt-1");
        errorMessage.innerText = message;
        inputElement.parentNode.appendChild(errorMessage);
    }
});
