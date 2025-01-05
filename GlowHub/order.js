const productImage = localStorage.getItem("productImage");
const productName = localStorage.getItem("productName");
const productPrice = localStorage.getItem("productPrice");
console.log("Данни от localStorage:");
console.log("Снимка: " + productImage);
console.log("Име: " + productName);
console.log("Цена: " + productPrice);

if (productImage && productName && productPrice) {
        document.getElementById("productImage").src = productImage;
        document.getElementById("productName").textContent = productName;
        document.getElementById("productPrice").textContent = productPrice;
} else  {
            document.getElementById("orderDetails").innerHTML = "<p>Няма избран продукт.</p>";
        }

