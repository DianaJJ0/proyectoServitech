document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle
    const sidebar = document.querySelector('.admin-sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');

    if (sidebar && sidebarToggle && sidebarClose) {
        // Abrir sidebar
        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.add('show');
        });

        // Cerrar sidebar
        sidebarClose.addEventListener('click', function () {
            sidebar.classList.remove('show');
        });

        // Cerrar sidebar al hacer clic en un enlace (en pantallas pequeñas)
        document.querySelectorAll('.admin-sidebar .nav-link').forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992) {
                    sidebar.classList.remove('show');
                }
            });
        });
    }

    // Cambiar estilos del encabezado al hacer scroll
    const header = document.querySelector('.admin-header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Botón de filtro de período
    const periodFilter = document.querySelector('.period-filter');
    if (periodFilter) {
        periodFilter.addEventListener('click', function () {
            console.log('Cambiar período a último mes');
        });
    }

    // Botón de descarga de reportes
    const downloadReport = document.querySelector('.download-report');
    if (downloadReport) {
        downloadReport.addEventListener('click', function () {
            console.log('Descargar reporte');
        });
    }
});
