// Cambiar entre pestañas dependiendo del botón (login o registro)
document.querySelectorAll('[data-auth-type]').forEach(button => {
    button.addEventListener('click', () => {
      const type = button.getAttribute('data-auth-type');
      const loginTab = document.getElementById('login-tab');
      const registerTab = document.getElementById('register-tab');
      const tab = new bootstrap.Tab(type === 'login' ? loginTab : registerTab);
      tab.show();
    });
  });
  
  // Mostrar/Ocultar contraseñas
  function togglePassword(buttonId, inputId) {
    const toggleButton = document.getElementById(buttonId);
    const passwordInput = document.getElementById(inputId);
    toggleButton.addEventListener('click', () => {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      toggleButton.querySelector('i').classList.toggle('bi-eye');
      toggleButton.querySelector('i').classList.toggle('bi-eye-slash');
    });
  }
  
  togglePassword('toggleLoginPassword', 'loginPassword');
  togglePassword('toggleRegisterPassword', 'registerPassword');
  togglePassword('toggleConfirmPassword', 'registerConfirmPassword');
  
  // Login (simulación)
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validar credenciales
    if (email === 'admin@servitech.com' && password === '1234') {
      window.location.href = 'admin-dashboard.html'; // Redirigir al dashboard
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  });
  
  // Registro (simulación)
  document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;
  
    if (!acceptTerms) {
      alert('Debes aceptar los términos y condiciones.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
  
    // Aquí podrías enviar los datos al backend
    alert(`¡Registro exitoso para ${name}! Ahora puedes iniciar sesión.`);
    const loginTab = new bootstrap.Tab(document.getElementById('login-tab'));
    loginTab.show();
  });
  
  // Recuperar contraseña (simulación)
  document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const recoveryEmail = document.getElementById('recoveryEmail').value;
  
    alert(`Se ha enviado un enlace de recuperación a ${recoveryEmail}`);
    const modal = bootstrap.Modal.getInstance(document.getElementById('forgotPasswordModal'));
    modal.hide();
  });
