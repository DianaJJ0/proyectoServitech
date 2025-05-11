document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("header-container");
    if (!container) return;
  
    fetch("assets/components/header.html")
      .then(res => res.text())
      .then(html => {
        container.innerHTML = html;
  
        // Buscar y cargar manualmente los <script> internos del header.html
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
  
        const scripts = tempDiv.querySelectorAll("script");
  
        scripts.forEach(script => {
          const newScript = document.createElement("script");
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch(err => console.error("Error cargando el header:", err));
  });
  