document.querySelector('.button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#background3').scrollIntoView({ behavior: 'smooth' });
        });

/*function addToOrder(imageSrc, productName, productPrice) {
    localStorage.setItem("productImage", imageSrc);
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);
    window.location.href = "orders.html";
}*/

function addToOrder(imageSrc, productName, productPrice) {
    // Записваме информацията в localStorage
    localStorage.setItem("productImage", imageSrc);
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);

    // Проверяваме дали данните са записани правилно в localStorage
    console.log("Данни за продукта:");
    console.log("Снимка: " + localStorage.getItem("productImage"));
    console.log("Име: " + localStorage.getItem("productName"));
    console.log("Цена: " + localStorage.getItem("productPrice"));

    // Пренасочваме към orders.html
    window.location.href = "orders.html";
}