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

