document.querySelector('.button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#background3').scrollIntoView({ behavior: 'smooth' });
        });