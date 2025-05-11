document.addEventListener('DOMContentLoaded', async function () {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        try {
            const response = await fetch('assets/components/footer.html');
            if (response.ok) {
                const footerHTML = await response.text();
                footerContainer.innerHTML = footerHTML;
            } else {
                console.error('Error al cargar el footer:', response.status);
            }
        } catch (error) {
            console.error('Error al cargar el footer:', error);
        }
    }
});