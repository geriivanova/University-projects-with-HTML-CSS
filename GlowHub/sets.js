for (let i = 1; i <= 12; i++) {
        const priceLink = document.getElementById(i);

        const originalText = priceLink.innerHTML;

        priceLink.addEventListener('mouseover', function() {
            priceLink.innerHTML = 'Купи';
        });

        priceLink.addEventListener('mouseout', function() {
            priceLink.innerHTML = originalText;
        });
}


function addToOrder(imageSrc, productName, productPrice) {
    localStorage.setItem("productImage", imageSrc);
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);

    console.log("Данни за продукта:");
    console.log("Снимка: " + localStorage.getItem("productImage"));
    console.log("Име: " + localStorage.getItem("productName"));
    console.log("Цена: " + localStorage.getItem("productPrice"));

    window.location.href = "orders.html";
}