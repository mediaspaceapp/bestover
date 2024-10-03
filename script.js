// Mostrar la animación de introducción y luego el login
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector('.intro').style.display = 'none';
        document.querySelector('.login-section').style.display = 'flex';
    }, 3000); // Duración de la animación (3 segundos)
});

// Mostrar la página de acceso al hacer clic en "Obtener Acceso"
document.getElementById('get-access').addEventListener('click', function() {
    document.querySelector('.login-section').style.display = 'none';
    document.querySelector('.access-page').style.display = 'block';
});

// Redireccionar a la página de pago
document.getElementById('pay-access').addEventListener('click', function() {
    window.location.href = 'https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c938084924d2a13019250043a1e01ac';
});

// Validar el login y redireccionar
document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar usuario y contraseña (puedes ajustar la validación a tu gusto)
    if (username === 'over95' && password === '952024over') {
        // Si los datos son correctos, redirigir a la página deseada
        window.location.href = 'go:pro';
    } else {
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
});