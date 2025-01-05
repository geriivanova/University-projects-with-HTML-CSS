document.querySelector('.button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#background3').scrollIntoView({ behavior: 'smooth' });
        });

function addToOrder(imageSrc, productName, productPrice) {
    localStorage.setItem("productImage", imageSrc);
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);
    window.location.href = "orders.html";
}