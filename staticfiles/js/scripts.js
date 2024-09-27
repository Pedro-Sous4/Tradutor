// Função para alterar o tema
function setTheme(theme) {
  if (theme === 'auto') {
    localStorage.removeItem('theme');
    document.documentElement.setAttribute('data-bs-theme', 'auto');
  } else {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
  updateTheme();
}

// Atualiza o tema do header e sidebar baseado no tema selecionado
function updateTheme() {
  const theme = document.documentElement.getAttribute('data-bs-theme');
  const navbar = document.getElementById('navbar-header');
  const sidebar = document.getElementById('sidebarMenu');
  const themeButton = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Atualiza a navbar
  if (theme === 'dark') {
    navbar.classList.remove('bg-light');
    navbar.classList.add('bg-dark', 'navbar-dark');
    themeButton.classList.remove('theme-btn-light');
    themeButton.classList.add('theme-btn-dark');
    themeIcon.classList.remove('bi-sun-fill');
    themeIcon.classList.add('bi-moon-stars-fill');
  } else {
    navbar.classList.remove('bg-dark', 'navbar-dark');
    navbar.classList.add('bg-light', 'navbar-light');
    themeButton.classList.remove('theme-btn-dark');
    themeButton.classList.add('theme-btn-light');
    themeIcon.classList.remove('bi-moon-stars-fill');
    themeIcon.classList.add('bi-sun-fill');
  }

  // Atualiza o fundo da sidebar
  if (theme === 'dark') {
    sidebar.classList.remove('sidebar-light');
    sidebar.classList.add('sidebar-dark');
  } else {
    sidebar.classList.remove('sidebar-dark');
    sidebar.classList.add('sidebar-light');
  }
}

// Ao carregar a página, aplica o tema escolhido anteriormente
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('auto');
  }
})();
