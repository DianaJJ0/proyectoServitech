document.addEventListener("DOMContentLoaded", () => {
    fetch('assets/components/navbar-admin.html')
      .then(response => response.text())
      .then(data => {
        const navbarContainer = document.createElement('div');
        navbarContainer.innerHTML = data;
        document.body.insertBefore(navbarContainer, document.body.firstChild);
      })
      .catch(error => console.error('Error al cargar el navbar:', error));
  });