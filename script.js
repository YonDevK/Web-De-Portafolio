document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aquí podrías agregar la lógica para enviar el formulario a un servidor

    alert(`Gracias por tu mensaje, ${name}! Te responderemos pronto.`);
    
    // Limpiar el formulario después del envío
    document.getElementById("contact-form").reset();
});

