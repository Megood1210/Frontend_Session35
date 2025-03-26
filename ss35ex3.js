const products = [
    { 
        name: "Laptop Dell XPS 15",
        price: "35,990,000 VNĐ",  
        image: "https://mayxaugiacao.com/wp-content/uploads/2022/02/dell-xps-15-9510-mayxaugiacao.jpg", 
        description: "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",  
    },
    { 
        name: "iPhone 15 Pro Max", 
        price: "32,990,000 VNĐ",
        image: "https://cdn.hoanghamobile.com/Uploads/2023/12/14/iphone-15-pro-max-natural-titanium-4-hhm.jpg",
        description: "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.", 
    },
    { 
        name: "Samsung Galaxy S24 Ultra", 
        price: "28,990,000 VNĐ", 
        image: "https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain",
        description: "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
    },
    { 
        name: "Tai nghe Sony WH-1000XM5",
        price: "7,990,000 VNĐ", 
        image: "https://tainghechinhhang.vn/wp-content/uploads/2024/04/Sony-WH-1000XM5-3.jpg", 
        description: "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.", 
    },
    { 
        name: "Apple Watch Series 9", 
        price: "11,990,000 VNĐ", 
        image: "https://dpphone.vn/uploads/source/hinh/watch-series-9-gps-lte-c1wax4zkgf42-og.png",
        description: "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.", 
    },
    { 
        name: "Loa JBL Charge 5", 
        price: "3,990,000 VNĐ", 
        image: "https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png",
        description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.", 
    }
];
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
function renderProducts(products) {
    productList.innerHTML = ""; 
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button>Buy</button>
        `;
        productList.appendChild(productCard);
    });
}
renderProducts(products);
//Chức năng nút search
searchBtn.addEventListener("click", function() {
    const keyword = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(keyword) ||product.description.toLowerCase().includes(keyword)
    );
    renderProducts(filteredProducts);
});
                                                             