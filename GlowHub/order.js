document.addEventListener('DOMContentLoaded', function() {
    const productImage = localStorage.getItem("productImage");
    const productName = localStorage.getItem("productName");
    const productPrice = localStorage.getItem("productPrice");

    const orderButton = document.getElementById("orderButton");
    const orderDetails = document.getElementById("orderDetails");
    const h1 = document.querySelector("h1");

    if (!productImage || !productName || !productPrice) {
        document.getElementById("orderDetails").innerHTML = "<p style='font-family: \"Bahnschrift Light\", sans-serif; font-weight: bold; font-size: 48px; margin-top: 200px; margin-bottom: 100px; text-align: center;'>Няма направени поръчки.</p>";
        document.querySelector("h1").style.display = "none";  
        document.querySelector(".button").style.display = "none"; 
    } else {
        document.getElementById("productImage").src = productImage;
        document.getElementById("productName").textContent = productName;
        document.getElementById("productPrice").textContent = productPrice;

        localStorage.removeItem("productImage");
        localStorage.removeItem("productName");
        localStorage.removeItem("productPrice");
    }

    orderButton.addEventListener("click", function(event) {
    event.preventDefault();
    h1.style.display = "none";
    orderButton.style.display = "none";
    orderDetails.innerHTML = "<p style='font-family: \"Bahnschrift Light\", sans-serif; font-weight: bold; font-size: 48px; margin-top: 200px; margin-bottom: 100px; text-align: center;'>Благодарим за поръчката!</p>";
    });
});

