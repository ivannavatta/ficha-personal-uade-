document.addEventListener('DOMContentLoaded', () => {
    const modoToggle = document.querySelector('.toggle-modo');
    const toggleIcon = modoToggle.querySelector("i");
    
    modoToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Cambia el icono
        if (document.body.classList.contains('dark-mode')) {
            toggleIcon.classList.remove("fa-toggle-off");
            toggleIcon.classList.add("fa-toggle-on");
        } else {
            toggleIcon.classList.remove("fa-toggle-on");
            toggleIcon.classList.add("fa-toggle-off");
        }
    });
});
