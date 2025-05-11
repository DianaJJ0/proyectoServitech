# ProyectoServitech

Servitech es una plataforma web que conecta expertos en informática con personas 
interesadas en aprender o resolver dudas tecnológicas. Incluye:

- Landing page pública (`index.html`).
- Buscador de expertos con filtros (`feed.html`).
- Páginas de expertos, mensajes, calendario y pasarela de pago.
- Panel de administración con CRUD de usuarios, publicaciones, categorías, asesorías, etc.

-------------------------------

## ¿Cómo probarlo?

1. Clona o descarga este repo.
2. Abre `index.html` en tu navegador para la **landing page**.

3. ¿Cómo Navegar a?: 
desde el encabezado podrás ir a:
   - `index.html`:Inicio: para el inicio y ver solo Servitech
   - `feed.html`:feed: para buscar expertos y ver publicaciones.
   - `experts.html`:expertos: para ver perfiles de expertos.
   - `contact.html `:contacto: Formulario de contacto para dudas o errores.

 al darle a otros botones podrás ir tambien a:
   - `calendar.html` para el calendario.
   - `messages.html` para la bandeja de mensajes de los usuarios.
   - `payment-gateway.html` para la pasarela de pago.

4. Ve al panel del administrador `admin-dashboard.html` desde el botón de inicio de sesión para poder acceder a las secciones de administración.
> **Credenciales de prueba**  
> Correo: `admin@servitech.com`  
> Contraseña: `1234`

---------------------------------

## 📁 Estructura de carpetas
ProyectoServitech/
│
├── index.html # Landing page pública
├── feed.html # Buscador de expertos
├── experts.html # Listado de perfiles de expertos
├── contact.html # Formulario de contacto
├── messages.html # Bandeja de mensajes usuario
├── calendar.html # Calendario de asesorías
├── payment-gateway.html # Pasarela de pagos
│
├── admin-*.html # Panel de administración (users, publications, categories, advisories, experts, messages, configurations, dashboard)
│
├── assets/
│ ├── components/
│ │ ├── header.html # Plantilla del encabezado
│ │ ├── footer.html # Plantilla del pie de página
│ │ └── navbar-admin.html# Menu lateral del admin
│ │
│ ├── css/
│ │ ├── styles.css # Variables, reset y estilos globales
│ │ ├── feed.css # Estilos exclusivos de feed.html
│ │ ├── experts.css # Estilos Perfil de expertos
│ │ ├── contact.css # Estilos Formulario de contacto
│ │ ├── messages.css # Estilos Bandeja de mensajes Usuarios
│ │ ├── calendar.css # Estilos Vista del calendario
│ │ ├── payment.css # Estilos de la pasarela de pago
│ │ ├── components.css # Estilos de header/footer/nav
│ │ ├── sidebar-admin.css # Estilos del menú lateral del admin
│ │ └── dashboard.css # Estilos del panel de administración
│ │
│ ├── img/ # Imágenes y logos
│ └── js/
│ └── components/
│ ├── loadHeader.js # Inserta header.html
│ ├── loadFooter.js # Inserta footer.html
│ ├── navbarLoader.js # Inserta el navbar-admin.html
│ ├── auth.js # Lógica de login/logout (simulación)
│ └── adminCommon.js # Funciones comunes del admin
│
└── README.md # Este archivo

--------------------------------------------

## 🔍 Descripción de las partes clave

- **Landing & páginas públicas**  
  - `index.html`: Home con CTA “Regístrate” y secciones introductorias.  
  - `feed.html`: Buscador con filtros de los expertos y publicaciones de usuarios para asesorías (especialización, precio, disponibilidad, valoración) y botón de negociar.  
  - `experts.html`, `contact.html`, `messages.html`, `calendar.html`, `payment-gateway.html`: funcionalidades específicas del usuario.

- **Panel de administración** (`admin-*.html`)  
  Menu lateral (`navbar-admin.html`) + secciones para gestionar:
  - Usuarios (`admin-users.html`)  
  - Publicaciones (`admin-publications.html`)  
  - Categorías (`admin-categories.html`)  
  - Asesorías (`admin-advisories.html`)  
  - Expertos (`admin-experts.html`)  
  - Mensajes (`admin-messages.html`)  
  - Configuraciones generales (`admin-configurations.html`)  
  - Dashboard general (`admin-dashboard.html`)

- **Componentes comunes**  
  - `header.html` y `footer.html` se inyectan en todas las páginas mediante `loadHeader.js` y `loadFooter.js`.  
  - Todos los estilos globales (colores, tipografías, utilidades) en `styles.css` y -cada página con su propio css-.  

---------------------------------

## ✅ Notas de implementación

- **Responsive**: basado en Grid de Bootstrap y media queries personalizadas.  
- **Flexbox** en `feed.css` para sidebar+contenido y footer sticky.  
- **Variables CSS** en `styles.css`y (los demás archivos CSS) para colores y fuentes uniformes.  
- **Carga dinámica** de header/footer/navbar para evitar duplicar HTML.

-------

## 💡 Próximos pasos

- Integrar un backend real (Node.js, Django…) para autenticar y persistir datos.  
- Añadir validación y manejo de errores en los formularios (contacto, login).  
- Versión móvil.

---------------------------------------------------------------------------------------
