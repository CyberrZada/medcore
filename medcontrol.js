
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
  
    // Abrir o menu lateral
    menuToggle.addEventListener('click', () => {
      sidebar.classList.add('visible');
    });
  
    // Fechar o menu lateral
    closeMenu.addEventListener('click', () => {
      sidebar.classList.remove('visible');
    });
  
    // Fechar o menu ao clicar fora (opcional)
    document.addEventListener('click', (event) => {
      if (
        !sidebar.contains(event.target) &&
        !menuToggle.contains(event.target) &&
        sidebar.classList.contains('visible')
      ) {
        sidebar.classList.remove('visible');
      }
    });
  });
  