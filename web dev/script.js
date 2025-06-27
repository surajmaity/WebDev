// script.js
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optionally save preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load theme from localStorage on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
