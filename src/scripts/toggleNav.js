document.getElementById('check').addEventListener('change', function () {
    const navMobile = document.getElementById('navMobile');
    if (this.checked) {
        navMobile.style.visibility = 'visible';
        navMobile.style.opacity = '1';
        navMobile.style.transform = 'translateX(0)';
    } else {
        navMobile.style.visibility = 'hidden';
        navMobile.style.opacity = '0';
        navMobile.style.transform = 'translateX(-100%)';
    }
});

document.querySelectorAll('.links').forEach(link => {
    link.addEventListener('click', function () {
        const navMobile = document.getElementById('navMobile');
        navMobile.style.visibility = 'hidden';
        navMobile.style.opacity = '0';
        navMobile.style.transform = 'translateX(-100%)';
    });
});

