class Products {
    constructor (name, backgroundImg, img, price, detail, sold) {
        this.name = name;
        this.backgroundImg = backgroundImg;
        this.img = img;
        this.price = price;
        this.detail = detail;
        this.sold = sold;
    }
}
let str = "";
let product1 = new Products("Đồng hồ", "assets/img/products/background.png", "assets/img/products/dong-ho.jpg", "819.000đ",
                            "Đồng Hồ Thông Minh Hello Watch 3+ ( Plus ) Ram 4GB Thiết Kế Cực Đẹp, Dễ Sử Dụng, Pin Cực Trâu. Tặng Kèm Dây Đeo", "25");
let product2 = new Products("Dép", "assets/img/products/background.png", "assets/img/products/dep.jpg", "9.000đ",
                            "Dép lông Dép bông đi trong nhà Dép Lông Xù Dày Dặn Mũi Tròn Ấm Áp Thoải Mái Thời Trang Mới đế dày 2cm", "14,6k");
let product3 = new Products("Đèn ngủ", "assets/img/products/background.png", "assets/img/products/den-ngu.jpg", "4.900đ",
                            "[10 Mẫu] Đèn Ngủ Cảm Biến Ánh Sáng, Tự Động Bật Tắt, Tiết Kiệm Năng Lượng, Đèn Trang Trí, Đèn Phòng Ngủ Khogiasi247", "50,6k");

function addProducts (product) {
    str += `<div class="product">
                <img src="${product.img}" alt="${product.name}" width="100%">
                <img src="assets/img/products/background.png" alt="bg" width="100%" class="products-bg">
                <div class="detail">${product.detail}</div>
                <div class="product-footer">
                    <div class="price">${product.price}</div>
                    <div class="sold">Đã bán ${product.sold}</div>
                </div>
             </div>`;
}
function showProducts () {
    document.getElementById("products-container").innerHTML = str;
}
addProducts(product1);
addProducts(product2);
addProducts(product3);
addProducts(product1);
addProducts(product2);
addProducts(product3);
addProducts(product1);
addProducts(product2);
addProducts(product3);
addProducts(product1);
addProducts(product2);
addProducts(product3);
addProducts(product1);
addProducts(product2);
addProducts(product3);
addProducts(product1);
addProducts(product2);
addProducts(product3);
addProducts(product1);
addProducts(product2);
addProducts(product3);
addProducts(product1);
addProducts(product2);
addProducts(product3);
showProducts();