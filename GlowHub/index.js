document.querySelector('.button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#background3').scrollIntoView({ behavior: 'smooth' });
        });

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